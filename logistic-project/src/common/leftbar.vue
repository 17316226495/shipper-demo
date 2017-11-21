<!--是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转-->
<template>
  <div class="sidebar">
    <div class="div_imglogo">
      <img src="../assets/img/logo.png">
      <p>货运物流后台管理</p>
    </div>
    <!--unique-opened router 可以打开文件的路径   -->
    <el-menu :default-active="routename" class="el-menu-vertical-demo" theme="dark" unique-opened router  @select="handleOpen">
      <template v-for="item in items">
          <el-menu-item :index="item.index">
            <i :class=item.classicon></i>{{ item.title }}
          </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            index: 'analysis',
            title: '数据分析',
            classicon:'el-icon-setting'
          },
          {
            index: 'management',
            title: '会员管理',
            classicon:'el-icon-menu'
          },

        ],
        routename:"analysis"
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    },
    created(){
      this.routename=localStorage.getItem("routename")//刷新页面的时候对应的显示左侧第几项高亮
    },
    methods:{
      handleOpen(index,indexPath){
       localStorage.setItem("routename",index);//放到本地存储  //拿到区分性元素 存到cookie里面
      },
    }
  }
</script>

<style  lang="scss" type="text/css" rel="stylesheet/scss">
  @import '../../static/css/leftbar.css';
</style>
