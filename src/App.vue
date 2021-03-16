<template>
  <div id="app">
    <!-- 顶部 -->
        <mt-header fixed title="信息管理系统" style="width:100%">
        <router-link to="/" slot="left">
          <mt-button @click="fh" icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <!-- vue组件的出口文件 -->
    <router-view/>

    <!-- 底部栏 -->
      <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home" :class="{active1:num==0,active2:cur==0} " >
        <img slot="icon" src="./assets/11.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip" :class="{active1:num==1,active2:cur==0}">
        <img slot="icon" src="./assets/22.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="cart" :class="{active1:num==2,active2:cur==0}">
        <img slot="icon" src="./assets/33.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search" :class="{active1:num==3,active2:cur==0}">
        <img slot="icon" src="./assets/44.png">
        查找
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected:"",
      num :10,
      cur:10
    }
  },
  watch:{   //监听
    selected(newV,oldV){
      // console.log(newV); console.log(this.selected);
      // console.log(oldV);
      this.$router.push({name:this.selected})

    },
    '$route'(toRouter, fromRouter) {
      var path1 = toRouter.path
      // console.log(path1)
     
      if(  path1 == "/vip"){
          this.num = 1;
          //  console.log(this.num)
      }else{
        this.cur= 0
      }  
      ;
      if(  path1 == "/cart"){
          this.num = 2;
          //  console.log(this.num)
      }else{
        this.cur= 0
      }  ;
      if(  path1 == "/search"){
          this.num = 3;
          //  console.log(this.num)
      }else{
        this.cur= 0
      }  ;
       if(  path1 == '/home'){
          this.num = 0;
          // console.log(this.num)
      }else{
        this.cur= 0
      }  ;
       
      }
     
  },
  methods: {
    fh(){
      this.$router.go(-1)
    }
  },
}
</script>

<style>

.active1{
 background-color: #eaeaea;
    color: #26a2ff;
    z-index: 99;
}
.active2{
   background-color: white  ;
    color:black ;
    z-index: 8;
}



</style>
