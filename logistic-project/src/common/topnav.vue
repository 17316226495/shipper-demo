<template>
    <div class="div_header">
      <div class="project-name">
         <img class="user-logo" src="../../static/img/ziyuan_fanhui.png" @click="logout">
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        name: 'linxin'
      }
    },
    computed:{
      username(){
        let username = localStorage.getItem('ms_username');
        return username ? username : this.name;
      }
    },
    methods:{
      logout() {
//          localStorage.removeItem('ms_username')
          this.$router.push('/login');
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  .div_header{
    height: 34px;
    width: 100%;
    background: #242f42;
    .project-name{
      float: right;
      width: 250px;
      text-align: center;
      color: #fff;
      line-height: 34px;
    }
  }
</style>
