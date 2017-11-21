<template>
  <div class="div_mapcontent">
    <div id="mapDiv_getStatistic" style="width: 100%;height: 100vh;"></div>
    <input type="hidden" :value="val" class="input_state">
    <div class="div_mapcargo">
      <span class="span_title">全国货物统计</span>
      <ul>
        <li>
          <div class="div_desc1">今日已发</div>
          <div class="div_desc2">2000辆 <div class="div_color"></div></div>

        </li>
        <li>
          <div class="div_desc1">总发货量</div>
          <div class="div_desc2">20000吨 <div class="div_color"></div></div>

        </li>
        <li>
          <div class="div_desc1">货运活跃指数</div>
          <div class="div_desc2">10% <div class="div_color"></div></div>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        val:'0'
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      init () {
        var cluster, markers = [],content,title='货主信息',infoWindow;
        var map = new AMap.Map("mapDiv_getStatistic", {
          resizeEnable: true,
          center:[105,34],
          zoom: 4
        });
//        map.setMapStyle("dark")
        //实例化信息窗体
        infoWindow = new AMap.InfoWindow({
          isCustom: true,  //使用自定义窗体
          offset: new AMap.Pixel(16, -45)
        });
        //ajax 请求成功后执行的操作
        console.log(points.length)
        var val=this.val
        for(var i=0;i<points.length;i+=1){
          (function (x) {
            let marker_content=''
            if(val=="0"){//小车停运 根据后台返回的车的状态points[x].state=="0"
              marker_content='<div  class="icon-market-cargo'+x+' marker-cargo" style="background-image: url(../../static/img/icon-cargo-red.png); height: 24px; width: 24px;line-height: 24px; background-position: 0px 0px; border-radius: 12px; text-align: center;cursor: pointer"><input type="hidden" value="0"></div>'
            }else{//小车运行
              marker_content='<div  class="icon-market-cargo'+x+' marker-cargo" style="background-image: url(../../static/img/icon-cargo-green.png); height: 24px; width: 24px;line-height: 24px; background-position: 0px 0px; border-radius: 12px; text-align: center;cursor: pointer"><input type="hidden" value="0"></div>'
            }
            markers.push(new AMap.Marker({
              position:points[x]['lnglat'],
              content: marker_content,
              offset: new AMap.Pixel(-15,-15)
            }))
            AMap.event.addListener(markers[x], 'click', function (e) {
              infoWindow.open(map, markers[x].getPosition());
//                  infoWindow.setContent(""+points[x]['lnglat']);//必须是string类型 默认类型
              content="<div class='div_user'><img src='../../static/img/c11.png'><p class='text-black username'>蒋经奎</p><p>18709877678</p></div><p class='p_desc'><span>车牌：</span><span class='text-black'>京Y98087</span></p> <p class='p_desc'><span>车型：</span><span class='text-black'>4.2米/平板</span></p> <p class='p_desc'><span>流向：</span><span class='text-black'>北京，秦皇岛，天津，上海，北京</span></p>";
              infoWindow.setContent(createInfoWindow(title, content))
            });
          })(i);
        }
        var sts = [//自定义图标
          {
            url: '../../static/img/hexagon3.png',
            size: new AMap.Size(32, 32),
            offset: new AMap.Pixel(-16, -16)
          }, {
            url: '../../static/img/hexagon33.png',
            size: new AMap.Size(32, 32),
            offset: new AMap.Pixel(-16, -16)
          }, {
            url: '../../static/img/hexagon2.png',
            size: new AMap.Size(36, 36),
            offset: new AMap.Pixel(-18, -18)
          },{
            url: '../../static/img/hexagon1.png',
            size: new AMap.Size(48, 48),
            offset: new AMap.Pixel(-24, -24)
          },{
            url: '../../static/img/hexagon11.png',
            size: new AMap.Size(48, 48),
            offset: new AMap.Pixel(-24, -24)
          }];
        cluster = new AMap.MarkerClusterer(map, markers, {
          styles: sts,
          gridSize:80
        });
        //构建自定义信息窗体
        function createInfoWindow(title, content) {
          var info = document.createElement("div");
          info.className = "info";
          // 定义顶部标题
          var top = document.createElement("div");
          var titleD = document.createElement("div");
          var closeX = document.createElement("img");
          top.className = "info-top";
          titleD.innerHTML = title;
          closeX.src = "http://webapi.amap.com/images/close2.gif";
          closeX.onclick = closeInfoWindow;
          top.appendChild(titleD);
          top.appendChild(closeX);
          info.appendChild(top);
          // 定义中部内容
          var middle = document.createElement("div");
          middle.className = "info-middle";
          middle.style.backgroundColor = 'white';
          middle.innerHTML = content;
          info.appendChild(middle);
          // 定义底部内容
          var bottom = document.createElement("div");
          bottom.className = "info-bottom";
          bottom.style.position = 'relative';
          bottom.style.top = '0px';
          bottom.style.margin = '0 auto';
          var sharp = document.createElement("img");
          sharp.src = "http://webapi.amap.com/images/sharp.png";
          bottom.appendChild(sharp);
          info.appendChild(bottom);
          return info;
        }
        //关闭信息窗体
        function closeInfoWindow() {
          map.clearInfoWindow();
        }
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import "../../static/css/mapStyle.css";
</style>
