/**
 * Created by hasee-pc on 2017/10/24.
 */
import $ from 'webpack-zepto'
const state={
  driverSelfInfo:{
    driverName:'徐慧',
    driverPhone:'17316226495',
    driverIdcard:'411424199303183365',
    driverHeadImg:'../../static/img/logo.png',//司机头像
    driverInfoImg:'../../static/img/c2.png',//司机信息
  },
  driverCarInfo:{
    carPlateType:'蓝牌',//车牌类型
    carPlateNumber:'989898',//车牌号码
    carType:'黑A',//车型
    carLong:'42',//车长
    carLoad:'50kg',//载重
    carInfoImg:'../../static/img/small.png',//车辆信息
  },
}
const actions={
  sumbitdriver(){//select必选 如果没有选择 提醒选择
    //request 提交的时候 select（必选）未通过时传参数组  通过时传参“ok”
    if($(".driverself_selectstate").val()==''||$(".drivercar_selectstate").val()==""){
      alert("请选择审核结果")
    }else if($(".driverself_selectstate").val()=='2'||$(".drivercar_selectstate").val()=='2'){
      if($(".driverself_selectstate").val()=='2'){
        var driverselflist= $(".driverself").val().split(",");
        console.log(driverselflist)
      }else if($(".driverself_selectstate").val()=='1'){
        var driverselflist= "ok";
      }
      if($(".drivercar_selectstate").val()=='2'){
        var drivercarlist= $(".drivercar").val().split(",");
        console.log(drivercarlist)
      }else if($(".drivercar_selectstate").val()=='1'){
        var drivercarlist= "ok";
      }
      if(driverselflist==""||drivercarlist==""){ //console.log([""]=="")//true
        alert("请选择原因")
      }else if(driverselflist!=""&&drivercarlist!=""){
        alert("ok")
        //传递数据 request
      }
    }
  }
}

export default {
  state,
  actions
}

