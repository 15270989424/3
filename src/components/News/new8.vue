<template>
  <div>
    <div id="main" style="width:100%;height:400px"></div>

    <!-- {{msg}} -->
    {{tags}}
    <!-- {{rating}}
    {{data}} -->
  </div>
</template>
<script>
import echarts from 'echarts'
import { stringify } from 'querystring'
export default {
  data() {
    return {
      msg:[],
      tags:[],
      rating:[],
      data:[]
    }
  },
  mounted() {
    this.$axios.get('home/api/1')
    .then(res=>{
      this.msg = res.data
       for(var i=0;i<6;i++){
        this.tags.push(String(res.data[i].tags))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        //  this.rating.push(res.data[i].rating ) 
        //   this.data.push(res.data[i].data ) 
      }
    })
    

    var myChart = echarts.init(document.getElementById('main'))
    
    var option = {
      title:{ 
        Text:'ECharts 入门实例'
      },
      tooltip:{

      },
      legend:{
        data:['销量']
      },
      xAxis:{
        data:['衬衫','羊毛衫','裤子','高跟鞋','袜子','羽绒服'],
      
      },
      yAxis:{},
      series:[
        {
          name:'销量',
          type:'bar',
          data:[5,50,20,36,18,10]

        }
      ]
    }
    myChart.setOption(option)



  }
}
</script>