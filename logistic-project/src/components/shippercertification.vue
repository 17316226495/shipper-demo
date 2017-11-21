<template>
  <div>
  <div class="div_certification">
    <div class="div_info div_driver_info">
      <p class="p_title">货主信息审核<span class="span_text_color">(已通过，不必再重新审核)</span></p>
      <div class="div_diver_info div_driver_left">
        <!--<imgInfo imgsrc="../../static/img/logo.png"></imgInfo>-->
        <!--<imgInfo imgsrc="../../static/img/c2.png"></imgInfo>-->
        <imgInfo :imgsrc="shipperSelfInfo.shipperHeadImg"></imgInfo>
        <imgInfo :imgsrc="shipperSelfInfo.shipperInfoImg"></imgInfo>
      </div>
      <div class="div_diver_info div_driver_right">
        <div class="div_driverinfo">
          <p class="p_title">驾驶员信息</p>
          <p>
            <span>司机：</span><span class="span_drivername">{{shipperSelfInfo.shipperName}}</span>
          </p>
          <p>
            <span>手机号：</span><span class="span_driverphone">{{shipperSelfInfo.shipperPhone}}</span>
          </p>
          <p>
            <span>身份证号：</span><span class="span_drivercard">{{shipperSelfInfo.shipperIdcard}}</span>
          </p>
          <p class="p_title p_result">审核结果</p>
          <selectCheckbox checkedname="shipperself"></selectCheckbox>
          <!--<p>
            <span>请选择审核结果：</span>
            <select  class="select_change"   @change="chooseMedicine($event,'driverimg')">
              <option value="0">请选择</option>
              <option value="1">通过</option>
              <option value="2">未通过</option>
            </select>
            <span class="span_text_color">(必选)</span>
          </p>
          <div class="div_nopass_content" v-if="selectedDriverImgShow">
            <input type="checkbox" value="0" name="nopass0">照片模糊
            <input type="checkbox" value="0" name="nopass0">人物不符护手霜<br>
            <input type="checkbox" value="0" name="nopass0">照片模糊
            <input type="checkbox" value="0" name="nopass0">人物不符<br>
            <input type="checkbox" value="0" name="nopass0">照片模糊多少度
            <input type="checkbox" value="0" name="nopass0">人物不符
          </div>-->
        </div>
      </div>
    </div>
    <div class="div_info div_car_info">
      <p class="p_title">车辆信息审核<span class="span_text_color">(未审核)</span></p>
      <div class="div_diver_info div_driver_left">
        <imgInfo :imgsrc="shipperCarInfo.carInfoImg"></imgInfo>
      </div>
      <div class="div_diver_info div_driver_right">
        <div class="div_driverinfo">
          <p class="p_title">车辆信息</p>
          <p>
            <span>车牌类型：</span><span class="span_carname">{{shipperCarInfo.carPlateType}}</span>
          </p>
          <p>
            <span>车牌号码：</span><span class="span_carnum">{{shipperCarInfo.carPlateNumber}}</span>
          </p>
          <p>
            <span>车型：</span><span class="span_cartype">{{shipperCarInfo.carType}}</span>
          </p>
          <p>
            <span>车长：</span><span class="span_cartype">{{shipperCarInfo.carLong}}</span>
          </p>
          <p>
            <span>载重：</span><span class="span_cartype">{{shipperCarInfo.carLoad}}</span>
          </p>
          <p class="p_title p_result">审核结果</p>
          <selectCheckbox checkedname="shippercar"></selectCheckbox>
          <!--<p>
            <span>请选择审核结果：</span>
            <select class="select_change"   @change="chooseMedicine($event,'carimg')">
              <option value="0">请选择</option>
              <option value="1">通过</option>
              <option value="2">未通过</option>
            </select>
            <span class="span_text_color">(必选)</span>
          </p>
          <div class="div_nopass_content" v-if="selectedCarImgShow">
            <input type="checkbox" value="0" name="nopass0">照片模糊
            <input type="checkbox" value="0" name="nopass0">人物不符护手霜<br>
            <input type="checkbox" value="0" name="nopass0">照片模糊
            <input type="checkbox" value="0" name="nopass0">人物不符<br>
            <input type="checkbox" value="0" name="nopass0">照片模糊多少度
            <input type="checkbox" value="0" name="nopass0">人物不符
          </div>-->
        </div>
      </div>
    </div>
    <div class="clearflow"></div>
    <div class="div_opt">
      <button class="btn-prev" @click="prevClick">上一个</button>
      <button class="btn-submit" @click="submitClick">提交</button>
      <button class="btn-next" @click="nextClick">下一个</button>
    </div>
    <div>
    </div>
  </div>
  </div>
</template>
<script>
  import imgInfo from '../common/imginfo.vue'
  import selectCheckbox from '../common/selectcheckbox.vue'
  import {mapState, mapActions} from 'vuex'
  export default{
    components: {
      imgInfo,selectCheckbox
    },
    data(){
      return {
//        selectedDriverImgShow:false,
//        selectedCarImgShow:false
      }
    },
    created(){
      this.getList()
    },
    computed:{
      ...mapState({
        shipperSelfInfo:state=>state.shipper.shipperSelfInfo,
        shipperCarInfo:state=>state.shipper.shipperCarInfo,
      })
    },
    methods:{
      ...mapActions([
        'sumbitshipper','getList'
      ]),
      submitClick(){
      this.sumbitshipper()
      },
      prevClick(){

      },
      nextClick(){

      },

    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import "../../static/css/certification.css";
</style>
