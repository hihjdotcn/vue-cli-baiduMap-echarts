<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="mychart" ref="myref" class="chart-wrap"></div>
  </div>
</template>
<script>
export default {
  mounted () {
    let yourChart = this._echarts.init(this.$refs.myref, 'temp')
    let option = {}
    option = {
      // 提示框（就是鼠标放上去后出现的框）
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },

      //  右上角的组件，用于说明，也可进行点击筛选
      legend: {
        align: 'right',
        x: 'right',
        top: 25,
        selectedMode: 'single', //  我这里设置的单选模式
        data: ['好', '坏'] //  显示的第一项和第二项，这里的颜色是根据自定义主题的颜色顺序来定的
      },

      //  x、y轴显示一些设置，比如刻度颜色显示什么的，可在自定义主题设置一部分
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      // 具体配置项，根据具体项目查看官网配置项说明
      series: [
        {
          name: '好',
          data: [150, 132, 201, 534, 290, 530, 820],
          type: 'line',
          smooth: true, //  是否平滑曲线
          areaStyle: {}
        },
        {
          name: '坏',
          data: [82, 93, 90, 93, 129, 333, 432],
          type: 'line',
          smooth: true,
          areaStyle: {}
        }
      ]
    }
    // 执行渲染图形和数据的操作
    if (option && typeof option === 'object') {
      yourChart.setOption(option, true)
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-wrap{
  width:100%;
  height:400px;
}
</style>
