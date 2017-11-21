<template>
    <div style="width: 100%;height: 100%">
      <TopNav></TopNav>
      <LeftBar></LeftBar>
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
</template>
<script>
  import TopNav from '../common/topnav.vue'
  import LeftBar from '../common/leftbar.vue'
   export default{
     components: {
       TopNav, LeftBar
     },
     created(){

     },
     methods:{
     },
   }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
@import "../../static/css/common.css";
</style>
