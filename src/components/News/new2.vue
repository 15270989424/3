<template>
    <div>
      <div class="box">
         
          <ul>
              <li v-for="news in newsList" :key="news.id">
                <h2>  {{news.name}}</h2>
                <p>电话：{{news.phone}}</p>
                <p>地址：{{news.address}}</p>
                <p><img :src="news.images[0]" alt="" srcset="">
                <img :src="news.images[1]"  alt="" srcset=""></p>
                <p>营业时间：{{ news.businessHours }}</p>
                <p><a :href="news.link">也可以直接点美团</a></p>
                <h3>热门评价:</h3>
                <p v-for="(item1 ,index1) in news.comments" :key="index1"   style="margin-bottom: 10px;">
                   {{index1 +1}}. {{item1.name}} {{item1.content}} 
                <img :src="item1.images" alt="" srcset="">
                </p>
              </li>
          </ul>
      </div>
    </div>
</template>

<script>
// import loading from '../loading.vue'

export default {
//   components: { loading },
    data() {
        return {
          newsList:[]
        }
    },
    created() {
        this.$axios.get('home/api/2')
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