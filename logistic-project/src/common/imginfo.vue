<template>
  <div class="div_img_info">
    <div class="div_btn">
      <button class="btn_left car_info_img_left" @click="btnLeft($event)">向左旋转90度</button>
      <button class="btn_right car_info_img_right " @click="btnRight($event)">向右旋转90度</button>
    </div>

    <div class="div_imgs div_driver_headimg">
      <img :src="imgsrc">
    </div>
  </div>
</template>
<script>
  import $ from 'webpack-zepto'

  export default{
    props:{
      imgsrc:{
        type:String
      }
    },
    data(){
      return{
        current_driver_headimg:0,
      }
    },
    created(){

    },
    methods:{
      btnLeft(event){
        this.current_driver_headimg = (this.current_driver_headimg - 90);
        console.log(this.current_driver_headimg)
        $(event.target).parents(".div_btn").siblings(".div_imgs ").css({'transform': "rotate(" + this.current_driver_headimg + "deg)"});
      },
      btnRight(event){
        this.current_driver_headimg = (this.current_driver_headimg + 90);
        console.log(this.current_driver_headimg)
        $(event.target).parents(".div_btn").siblings(".div_imgs ").css({'transform': "rotate(" + this.current_driver_headimg + "deg)"});
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
</style>
