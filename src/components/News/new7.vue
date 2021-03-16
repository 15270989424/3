<template>
  <div>
    <div id="main" style="width:100%;height:400px"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
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
        data:['衬衫','羊毛衫','裤子','高跟鞋','袜子','羽绒服']

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



  },
}
</script>