<template>
    <div>
      <div class="box">
          <ul>
              <li v-for="news in newsList" :key="news.id">
                <h2>  {{news.name}}</h2>
                <p>电话：{{news.phone}}</p>
                <p>地址：{{news.address}}</p>
                <p ><span v-for="(item,index) in news.images" :key="index" >
                    <img :src="item" alt="">
                    </span>
                    
                <p>营业时间：{{ news.businessHours }}</p>
                <p><a :href="news.link">也可以直接点美团</a></p>
                <h3>热门评价:</h3>

               
                <p v-for="(item1 ,index1) in news.comments" :key="index1"   style="margin-bottom: 10px;">
                   {{index1}}. {{item1.name}} {{item1.content}} 
                <img :src="item1.images" alt="" srcset="">
                </p>



                <!-- <div v-for="(item,index)in news.comments" :key="index">
                        {{item.name}}：{{item.content}}
                    <img :src="item.images[0]" alt="" srcset="">
                <img :src="item.images[1]" alt="" srcset="">
               
                发布时间:{{item1.date}} -->
                
              </li>
          </ul>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          newsList:[]
        }
    },
    created() {
        this.$axios.get('home/api/4')
        .then(res=>{
            this.newsList = res.data
            console.log( this.newsList)
        })
    }
}
</script>
<style lang="">
    .box {
        margin-bottom: 11%;
    }
    .box img{
        width: 49%;
    }
    .box li{
        margin-top: 11%;
    }
</style>