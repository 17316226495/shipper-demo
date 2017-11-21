<template>
    <div class="div_mapcontent">
      <div class="div_mapcargo">
        <span class="span_title">全国货物物流指数</span>
        <ul>
          <li>
            <div class="div_desc1">今日货运</div>
            <div class="div_desc2">2000<span>票</span> <div class="div_color"></div></div>

          </li>
          <li>
            <div class="div_desc1">日发货吨位</div>
            <div class="div_desc2">20000<span>万吨</span><div class="div_color"></div></div>

          </li>
          <li>
            <div class="div_desc1">日交易额</div>
            <div class="div_desc2">865945<span>万元</span> <div class="div_color"></div></div>

          </li>
        </ul>
      </div>
      <!--货运活跃指数/货物类型-->
      <div class="div_charts_content">
        <div class="div_charts">
          <div class="div_chart">
            <div id="activityChart" style="width: 100%;height:100%;"></div>
          </div>
          <div class="div_chart">
            <div id="typeChart" style="width: 100%;height:100%;"></div>
          </div>
        </div>
        <!--地图/实时交易-->
        <div class="div_map">
          <div id="main" style="width: 100%;height:62%;"></div>
          <div class="div_commont_state">
            <div class="state">
              <span>系统状态</span>
              <span class="radius"></span>
            </div>
            <div class="state ">
              <span>评价状态</span>
              <span class="radius radius_red" ></span>
            </div>
          </div>
          <div class="clearfix"></div>
          <div id="transact">
            <p class="p_transact_text">实时交易</p>
            <ul class="ul_head">
              <li>
                <span>时间</span>
                <span>货源流向</span>
                <span>货物吨位</span>
                <span>运费</span>
              </li>
            </ul>
            <div class="dowebok">
              <ul>
                <li>
                  <span>16:30</span>
                  <span>北京海淀->黑龙江哈尔滨</span>
                  <span>10吨大米</span>
                  <span>1200</span>
                </li>
                <li>
                  <span>15:30</span>
                  <span>北京海淀->黑龙江哈尔滨</span>
                  <span>10吨大米</span>
                  <span>1200</span>
                </li>
                <li>
                  <span>14:30</span>
                  <span>北京海淀->黑龙江哈尔滨</span>
                  <span>10吨大米</span>
                  <span>1200</span>
                </li>
                <li>
                  <span>13:30</span>
                  <span>北京海淀->黑龙江哈尔滨</span>
                  <span>10吨大米</span>
                  <span>1200</span>
                </li>
                <li>
                  <span>12:30</span>
                  <span>北京海淀->黑龙江哈尔滨</span>
                  <span>10吨大米</span>
                  <span>1200</span>
                </li>
                <li>
                  <span>11:30</span>
                  <span>北京海淀->黑龙江哈尔滨</span>
                  <span>10吨大米</span>
                  <span>1200</span>
                </li>
                <li>
                  <span>10:30</span>
                  <span>北京海淀->黑龙江哈尔滨</span>
                  <span>10吨大米</span>
                  <span>1200</span>
                </li>
                <li>
                  <span>9:30</span>
                  <span>北京海淀->黑龙江哈尔滨</span>
                  <span>10吨大米</span>
                  <span>1200</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--活力指数/车型分布/车长分布-->
        <div class="div_charts">
          <div class="div_chart1">
            <div id="sportChart" style="width: 100%;height:100%;"></div>
          </div>
          <div class="div_chart1">
            <div id="carTypeChart" style="width: 100%;height:100%;"></div>
          </div>
          <div class="div_chart1">
            <div id="carLengthChart" style="width: 100%;height:100%;"></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

  import request from 'superagent';
  import $ from 'webpack-zepto'
//  import echarts from 'echarts';
//  import  'echarts/lib/chart/map';
//  import 'echarts/map/js/china.js';
  // 按需引入基本模板
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/bar');  // 引入柱状图组件
  require('echarts/lib/chart/pie');  // 引入饼状图组件
  require('echarts/map/js/china.js');  // 引入中国地图组件
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default{
    data(){
      return{
          dataList:[
            {time : "9:30",startCity:'北京海淀',endCity:'黑龙江哈尔滨',load:'10吨大米',money:'1200'},
            {time : "10:30",startCity:'北京海淀',endCity:'黑龙江哈尔滨',load:'10吨大米',money:'1200'},
            {time : "11:30",startCity:'北京海淀',endCity:'黑龙江哈尔滨',load:'10吨大米',money:'1200'},
            {time : "12:30",startCity:'北京海淀',endCity:'黑龙江哈尔滨',load:'10吨大米',money:'1200'},
            {time : "13:30",startCity:'北京海淀',endCity:'黑龙江哈尔滨',load:'10吨大米',money:'1200'},
            {time : "14:30",startCity:'北京海淀',endCity:'黑龙江哈尔滨',load:'10吨大米',money:'1200'},
          ]
      }
    },
    mounted(){
        this.mapmain();
        this.activityChart();
        this.typeChart();
        this.sportChart();
        this.carTypeChart();
        this.cerLengthChart();
    },
    created(){

    },
    methods:{
//      地图 迁移
      mapmain(){
        let myChart = echarts.init(document.getElementById('main'));
        request
          .get('../../static/js/china.json')
          .end((err,res)=>{
              if(!err){
                echarts.registerMap('china', res.body);
               var option = {
                  legend: {
                    show: false,
                    orient: 'vertical',
                    top: 'bottom',
                    left: 'right',
                    data: ['地点', '线路'],
                    textStyle: {
                      color: '#fff'
                    }
                  },
                  geo: {
                    map: 'china',
                    label: {
                      emphasis: {
                        show: false
                      }
                    },
                    roam: true,
                    itemStyle: {
                      normal: {
                        areaColor: '#324157',
                        borderColor: '#404a59'
                      },
                      emphasis: {
                        areaColor: '#2a333d'
                      }
                    }
                  },
                  series: [{
                    name: '地点',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                      brushType: 'stroke'
                    },
                    label: {
                      emphasis: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                      }
                    },
                    symbolSize: 5,
                    showEffectOn: 'render',
                    itemStyle: {
                      normal: {
                        color: '#46bee9'
                      }
                    },
                    data: allData.citys
                  }, {
                    name: '线路',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    large: true,
                    effect: {
                      show: true,
                      constantSpeed: 30,
                      symbol: 'pin',
                      symbolSize: 3,
                      trailLength: 0,
                    },
                    lineStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0, color: '#58B3CC'
                        }, {
                          offset: 1, color: '#F58158'
                        }], false),
                        width: 1,
                        opacity: 0.2,
                        curveness: 0.1
                      }
                    },
                    data: allData.moveLines
                  }]
                };
                myChart.setOption(option);
              }
          })
       let allData = {"citys":[{"name":"珠海","value":[113.576726,22.270715,9],"symbolSize":5,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黑龙江","value":[126.661669,45.742347,-198],"symbolSize":8,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"大连","value":[121.614682,38.914003,40],"symbolSize":5,"itemStyle":{"normal":{"color":"#F58158"}}}],"moveLines":[{"fromName":"黑龙江","toName":"珠海","coords":[[126.661669,45.742347],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"大连","coords":[[126.661669,45.742347],[121.614682,38.914003]]}]};//地图数据
      },
//      货运活跃指数
      activityChart(){
        var activityChart = echarts.init(document.getElementById('activityChart'));
        let optionActivity = {
          color: ['#949aa6', '#065279'],
          title: [{
            text: '货运活跃指数',
            textStyle: {
              color: '#949aa6'
            }
          }],
          grid: {
            left: '5%',
            right: '5%',
            top: '16%',
            bottom: '1%',
            containLabel: true
          },
          legend: {
            x: '50%',
            top: '1%',
            textStyle: {
              color: '#949aa6',
            },
            data: ['出港', '入港']
          },
          xAxis: {
            type: 'category',
            "axisLine": {
              lineStyle: {
                color: '#949aa6'
              }
            },
            "axisTick": {
              "show": false
            },
            axisLabel: {
              interval: 0,//x轴的数据可以全部显示出来
              textStyle: {
                color: '#949aa6'
              }
            },
            boundaryGap: true, //false时X轴从0开始
            data: ['成都', '郑州', '昆明', '石家庄', '北京', '济南']
          },
          yAxis: {
            "axisLine": {
              lineStyle: {
                color: '#949aa6'
              }
            },
            splitLine: {
              show: false,
            },
            "axisTick": {
              "show": false
            },
            axisLabel: {
              textStyle: {
                color: '#949aa6'
              }
            },
            type: 'value'
          },
          series: [{
            name: '出港',
            smooth: true,
            type: 'bar',
            symbolSize: 10,
            barWidth: '15%',
            data: [90, 50, 39, 50, 120, 82],
            label: {//图形上的文本标签
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#a8aab0',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 12,
                },
              },
            }
          }, {
            name: '入港',
            smooth: true,
            type: 'bar',
            symbolSize: 10,
            barWidth: '15%',
            data: [70, 50, 50, 87, 90, 80],
            label: {//图形上的文本标签
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#a8aab0',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 12,
                },
              },
            }
          }
          ]
        }
        activityChart.setOption(optionActivity);
      },
//      货物类型
      typeChart(){
        var typeChart = echarts.init(document.getElementById('typeChart'));
        let optionType = {
          title: [{
            text: '货物类型',
            textStyle: {
              color: '#949aa6'
            }
          }],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          series: [
            {
              name:'货物类型',
              type:'pie',
              hoverAnimation: false,
              legendHoverLink:false,
              radius: ['40%', '42%'],
              color: ['#915872', '#3077b7', '#9a8169', '#3f8797','#5b8144'],
              label: {
                normal: {
                  position: 'inner'
                }
              },
              labelLine: {
                normal: {
                  show: false
                },

              },
              tooltip: {
                show:false,
              },

              data:[
                {value:435, name:''},
                {value:679, name:''},
                {value:848, name:''},
                {value:348, name:''},
                {value:679, name:''},
              ]
            },
            {
              name:'货物类型',
              type:'pie',
              radius: ['42%', '47%'],
              color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900'],
              label: {
                normal: {
                  formatter: '{b}\n{d}%'
                },
              },
              data:[
                {value:435, name:'农副产品'},
                {value:679, name:'建材'},
                {value:848, name:'工业品'},
                {value:348, name:'钢铁能源'},
                {value:679, name:'其他'},
              ]
            }
          ]
        };
        typeChart.setOption(optionType);
      },
//      运力指数
      sportChart(){
        var sportChart = echarts.init(document.getElementById('sportChart'));
        let optionSport = {
          title: {
            text: '运力指数',
            textStyle: {
              color: '#949aa6'
            }
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '1%',
            top:'10%',
            containLabel: true
          },
          yAxis: {
            "axisLine": {
              lineStyle: {
                color: '#949aa6'
              }
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#949aa6',
              }
            },
            type: 'value'
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,//x轴的数据可以全部显示出来
              textStyle: {
                color: '#949aa6',
                fontSize: 12
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#949aa6',
              }
            },
            data: ['成都', '重庆', '南宁',"长沙","四川","海南",'哈尔滨']
          }, {
            type: 'category',

            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: ['成都', '重庆', '南宁',"长沙","四川","海南",'哈尔滨']
          },
          ],
          series: [{
            name: '有效房源量1',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
              normal: {//背景柱条
                show: true,
                color: '#949aa6',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333',
              }
            },
            silent: true,//鼠标移上不会变成手型 不会触发覆盖前面的柱状
            barWidth: '20%',
            data: [2000, 2000, 2000, 2000, 2000, 2000,2000]
          },  {
            name: '去年',
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: '#4c8dae',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333',
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#333'
                }
              }
            },
            barWidth: '20%',
            data: [398, 419, 452,789,980,1900,1200]
          }
          ]
        };
        sportChart.setOption(optionSport);
      },
//      车型分布
      carTypeChart(){
        var carTypeChart = echarts.init(document.getElementById('carTypeChart'));
        let optioncarType = {
          title: [{
            text: '车型分布',
            textStyle: {
              color: '#949aa6'
            }
          }],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",

          },
          series: [
            {
              name:'车型分布',
              type:'pie',
              hoverAnimation: false,
              legendHoverLink:false,
              radius: ['40%', '42%'],
              color: ['#915872', '#3077b7', '#9a8169', '#3f8797','#5b8144'],
              label: {
                normal: {
                  position: 'inner'
                }
              },
              labelLine: {
                normal: {
                  show: false
                },

              },
              tooltip: {
                show:false,
              },

              data:[
                {value:335, name:''},
                {value:179, name:''},
                {value:248, name:''},
                {value:848, name:''},
                {value:120, name:''},
              ]
            },
            {
              name:'车型分布',
              type:'pie',
              radius: ['42%', '47%'],
              color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900'],
              label: {
                normal: {
                  formatter: '{b}\n{d}%'
                },
              },
              data:[
                {value:335, name:'厢式'},
                {value:179, name:'高低平板'},
                {value:248, name:'平板'},
                {value:848, name:'高栏'},
                {value:120, name:'其他'},
              ]
            }
          ]
        };
        carTypeChart.setOption(optioncarType);
      },
//      车长分布
      cerLengthChart(){
        var carLengthChart = echarts.init(document.getElementById('carLengthChart'));
        let optioncarLength = {
          title: [{
            text: '车长分布',
            textStyle: {
              color: '#949aa6'
            }
          }],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [{
            name: '车长分布',
            type: 'pie',
            radius: '68%',
            center: ['50%', '50%'],
            clockwise: false,
            data: [{
              value: 45,
              name: '13.0米'
            }, {
              value: 25,
              name: '9.6米'
            }, {
              value: 15,
              name: '6.8米'
            }, {
              value: 8,
              name: '17.5米'
            }, {
              value: 7,
              name: '其他'
            }],
            label: {
              normal: {
                textStyle: {
                  color: '#949aa6',
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 4,
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }],
          color: [
            '#00acee',
            '#52cdd5',
            '#79d9f1',
            '#a7e7ff',
            '#c8efff'
          ],
        };
        carLengthChart.setOption(optioncarLength);
      },
//      无缝上下滚动
      dowebok(){

      },
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import "../../static/css/mapStyle.css";
</style>
