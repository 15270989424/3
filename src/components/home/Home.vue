<template>
    <div id='home'>
        <!-- 轮播图 -->
       <mt-swipe :auto="4000" class="swiper">
            <mt-swipe-item v-for='(item,index) in imgs' :key="index">
                <img :src="item"   alt="" />
             </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
       <div class="list">
           <ul>
               <li v-for="(item,index) in msg"  :key='item.id' @click="tz_btn(index)" >
                   <img   :src='item.icon' :alt="item.name" />
                    <p>{{ item.name }}</p>         
                    <br>      
               </li>
           </ul>    
       </div>
       
    </div>
</template>

<script>
//     import  src1 from '../../assets/11.png'
//      import  src2 from '../../assets/22.png'
//      import  src3 from '../../assets/33.png'
//      import  src4 from '../../assets/44.png'

//  var grides = [
//      {id:1,src:src1,title:"111",router:{name:"news.list"}},
//       {id:2,src:src2,title:"222",router:{name:"news.list"}},
//        {id:3,src:src1,title:"333",router:{name:"news.list"}},
//          {id:4,src:src3,title:"444",router:{name:"news.list"}},
//          {id:5,src:src4,title:"555",router:{name:"news.list"}},
//           {id:6,src:src1,title:"666",router:{name:"news.list"}},
//            {id:7,src:src1,title:"777",router:{name:"news.list"}},
//             {id:8,src:src1,title:"888",router:{name:"news.list"}},
//              {id:9,src:src1,title:"999",router:{name:"news.list"}}
        

//  ]


export default {
    name:'Home',
    data() {      
        return {
          imgs:[],
        //   grides:grides,
          msg:[]
        }
    },
    created() {
        this.$axios.get('home/api/3')
        .then(res=>{
            // console.log(res.data[0].imaaes);
            this.imgs =  res.data[0].images;
        })
        .catch(err=>{
            // console.log('轮播数据异常',err);
        });
        this.$axios.get('home/api/11')
        .then(res=>{
             this.msg =  res.data;
             console.log(this.msg)
        })
    },methods: {
        tz_btn(msg){
              this.$router.push({name:"new"+msg})  
            // console.log(msg)
        }
    }
}
</script>


<style lang="css"  scoped>
    /* scoped 只对当前组件css起作用 */
    .swiper{
        height: 300px;
        /* width: 100%; */
    }
    .swiper img{
        width: 100%;
        height: 100%;
    }
    .list{
        width: 100%;
        margin-top: 25px;
    }
    .list ul{
        display: flex;
        flex-wrap: wrap;
    }
    .list ul li{
        width:33%;
        height: 100px;
        text-align: center;
        font-size: 14px;
        margin-bottom: 10%;
    }
     .list ul li a{
         display: inline-block;
         width: 50px;
         height: 50px;
         margin: 0 auto;
     }
     .list ul li a img{
         width: 58px;
     }
     #home{
         margin-bottom: 10%;
     }

</style>