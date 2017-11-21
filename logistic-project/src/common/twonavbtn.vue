<template>
    <div>
      <!--数据分析二级模块-->
      <template v-if="name=='analysis'">
        <router-link :to="{name:'dataView'}">
        <el-button :type="pri_dataview" size="large" @click="btnclick($event)">数据一览</el-button>
        </router-link>
        <router-link :to="{name:'getStatistic'}">
          <el-button :type="pri_getdata" size="large" @click="btnclick($event)">货物统计</el-button>
        </router-link>
        <router-link :to="{name:'trafficStatistic'}">
          <el-button :type="pri_traffic" size="large" @click="btnclick($event)">车辆统计</el-button>
        </router-link>
      </template>
      <!--会员管理二级模块-->
      <template v-if="name=='management'">
        <router-link :to="{name:'shipperList'}">
          <el-button :type="pri_shipper" size="large" @click="btnclick($event)">货主认证</el-button>
        </router-link>
        <router-link :to="{name:'driverList'}" >
          <el-button :type="pri_driver" size="large" @click="btnclick($event)">司机认证</el-button>
        </router-link>
      </template>
    </div>

</template>
<script>
  import $ from 'webpack-zepto'
  export default{
    props:{
      name:{
        type:String
      }
    },
    data(){
      return{
        pri_dataview:'primary',
        pri_getdata:'',
        pri_traffic:'',
        pri_shipper:'primary',
        pri_driver:''
      }
    },
    created(){
//      console.log(this.name)
      this.routename=localStorage.getItem("itemname")//刷新页面的时候对应的显示左侧第几项高亮
      switch (this.routename){
        case '数据一览':
          this.pri_dataview='primary'
          break;
        case '货物统计':
          this.pri_dataview=''
          this.pri_getdata='primary'
          break;
        case '车辆统计':
          this.pri_dataview=''
          this.pri_traffic='primary'
          break;
        case '货主认证':
          this.pri_shipper='primary'
          break;
        case '司机认证':
          this.pri_shipper=''
          this.pri_driver='primary'
          break;
      }
    },
    methods:{
      btnclick(event){
        var currenttext=event.target.textContent;
        localStorage.setItem("itemname",currenttext);//放到本地存储  //拿到区分性元素 存到cookie里面
        switch (currenttext){
          case '数据一览':
            this.pri_dataview='primary'
            this.pri_getdata=''
            this.pri_traffic=''
            this.pri_shipper=''
            this.pri_driver=''
            break;
          case '货物统计':
            this.pri_dataview=''
            this.pri_getdata='primary'
            this.pri_traffic=''
            this.pri_shipper=''
            this.pri_driver=''
            break;
          case '车辆统计':
            this.pri_dataview=''
            this.pri_getdata=''
            this.pri_traffic='primary'
            this.pri_shipper=''
            this.pri_driver=''
            break;
          case '货主认证':
            this.pri_dataview=''
            this.pri_getdata=''
            this.pri_traffic=''
            this.pri_shipper='primary'
            this.pri_driver=''
            break;
          case '司机认证':
            this.pri_dataview=''
            this.pri_getdata=''
            this.pri_traffic=''
            this.pri_shipper=''
            this.pri_driver='primary'
            break;
        }
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
</style>
