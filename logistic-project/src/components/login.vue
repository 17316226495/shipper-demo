<template>
      <div  id="land-box">
        <div class="div_img"></div>
        <div class="forget-password land" >
          <p class="p-logo"><img src="../../static/img/logo.png"></p>
          <p class="p-title2">V1.0 </p>
          <form method="post" action="" id="flogin">
            <input type="hidden" value="false" name="remember">
            <p class="user"><label></label><input type="text" name="phones" autocomplete="off" placeholder="请输入用户名" v-model="username" class="inputuser"  v-on:keyup="usernameKey()"/>
              <i class="testuser landActive">{{testuser}}</i>
            </p>
            <p class="password"><label></label><input type="password" name="passworld" placeholder="请输入密码" v-model="password"  class="inputpassword"  v-on:keyup="passwordKey()"/>
              <i class="testpassword landActive">{{testpassword}}</i>
            </p>
            <p class="code">
              <input type="text" name="yzm" placeholder="验证码" autocomplete="off" class="inputyz-code"  v-model="code" v-on:keyup="codeKey()"><span> <a onclick="javascript:re_captcha();">
                    <img src="" alt="验证码" title="刷新图片" class="validate-num" id="yzm" border="0">
                    </a></span>
              <i class="yz-code landActive">{{testcode}}</i>
            </p>
            <p class="land-btn"><button :disabled="disabled1" :class="disabled1==false?'ableBtn':'unableBtn'" @click="login"  >登&nbsp;&nbsp;录</button></p>
          </form>
        </div>

        <div class="div_bottom">
          <span class="p-title1">北京运道互联网科技有限公司</span>
          <span class="p-phone">010-51901193</span>
        </div>
      </div>
</template>
<script>
  export default{
    data(){
      return{
        username:"",
        password:"",
        code:"",
        testuser:"请输入用户名",
        testpassword:"请输入密码",
        testcode:"请输入二维码",
        disabled1:true,
      }
    },
    created(){

    },
    methods:{
      usernameKey(){
       if(this.username=="") {
         this.testuser = "用户名不能为空"
       }else{
         this.testuser = ""
       }
        this.judge()
      },
      passwordKey(){
        if(this.password==""){
          this.testpassword="密码不能为空"
        }else if(!(/^[0-9A-Za-z]{6,20}$/).test(this.password)){
          this.testpassword="密码长度不能小于6"
        }else{
          this.testpassword=""
        }
        this.judge()
      },
      codeKey(){
        if(this.code==""){
          this.testcode="验证码不能为空"
        }else if(this.code!="2"){
          this.testcode="验证码不正确"
        }else{
          this.testcode=""
        }
        this.judge()
      },
      judge(){
        if(this.testcode==""&&this.testpassword==""&&this.testuser==""){
          this.disabled1=false;
        }
      },
      login(){
        //request网络请求
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import "../../static/css/land.css";
</style>
