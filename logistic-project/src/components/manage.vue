<template>
     <div class="content">
       <Twonavbtn name="management"></Twonavbtn>
       <router-view></router-view>
    </div>
</template>
<script>
  import Twonavbtn from '../common/twonavbtn.vue'
  export default{
    components: {
      Twonavbtn
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
</style>
