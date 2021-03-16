<template>
    <div>
      <div class="box">
          <ul>
              <li v-for="news in newsList" :key="news.id">
                <h2>  {{news.name}}</h2>
                <p>电话：{{news.phone}}</p>
                <p>地址：{{news.address}}</p>
                <p><img :src="news.images[0]" alt="" srcset="">
                <img :src="news.images[1]" alt="" srcset=""></p>
                <p>营业时间：{{ news.businessHours }}</p>
                <p><a :href="news.link">也可以直接点美团</a></p>
                <h3>热门评价:</h3>
               
                <p>{{news.comments[0].name}}：{{news.comments[0].content}}
                  
                    <img :src="news.comments[0].images[0]" alt="" srcset="">
                <img :src="news.comments[0].images[1]" alt="" srcset="">
                </p>
                <p>发布时间:{{news.comments[0].date}}</p>
                <!-- <p>2. {{news.comments[1].name}}：{{news.comments[1].content}}
                 
                    <img :src="news.comments[1].images[0]" alt="" srcset="">
                <img :src="news.comments[1].images[1]" alt="" srcset="">
                </p>
                <p>发布时间:{{news.comments[1].date}}</p> -->
                <!-- <p>3. {{news.comments[2].name}}：{{news.comments[2].content}}
            
                    <img :src="news.comments[2].images[0]" alt="" srcset="">
                <img :src="news.comments[2].images[1]" alt="" srcset="">
                </p>
                <p>发布时间:{{news.comments[2].date}}</p> -->
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