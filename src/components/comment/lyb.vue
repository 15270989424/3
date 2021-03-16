<template>
    <div id="lyb">
        <mt-button type="primary" @click="lybPl">评论</mt-button>
        <mt-button type="danger" style="float:right">返回</mt-button>
        <div style="clear:both"></div>
       <textarea  class="kk" v-model="kk">

       </textarea>

       <div class="lyn-connect">
           <ul>
               <li style="border-bottom:1px solid"><span class="font-1">评论列表</span><span class="font-2">4条评论</span><div style="clear:both"></div></li>
             
           </ul>
           <ul v-for="(item,index) in lybmsg" :key="item.id">
               <span v-if="index<size">
               <li v-for="(item1 ,index1) in item.comments" :key="index1">
                     {{item1.name}}  :  {{item1.content}} 
               </li>
                </span>

           </ul>
        <mt-button type="danger"  @click="loadMore" >加载更多</mt-button>
       </div>
    </div>
</template>
<script>
import { Button } from 'mint-ui';
export default {
    
    name:"new6",
    props:['cid'],
    data() {
        return {
          lybmsg:[],
          size:1,
          kk:""
        }
        
    },
    created() {
        console.log(this.cid)
       
        this.$axios.get('home/api/2')
        .then(res=>{
            this.lybmsg = res.data
            // console.log( this.newsList)
        })
    },methods: {
        loadMore(){
            this.size ++
        }
        ,
        lybPl(){
        //    this.lybmsg.push(this.kk)
        }
    },
}
</script>
<style lang="">
    #lyb{
        margin-bottom: 18%;
    }
     .kk{
        height: 200px;
        width: 99%;
        line-height: 40px;
        font-size: 18px;
        text-indent: 2em;
        /* border: 1px solid; */
    }
    .lyn-connect li{
        margin: 10px 0;
        border-bottom: 1px solid #eee;
    }
    .font-1{
        font-size: 22px;
        font-weight: 700;
    }
     .font-2{
        font-size: 18px;
       float: right;
    }
</style>