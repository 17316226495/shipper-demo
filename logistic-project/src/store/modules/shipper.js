/**
 * Created by hasee-pc on 2017/10/24.
 */
import $ from 'webpack-zepto'

const state={
  shipperSelfInfo:{
    shipperName:'徐大慧',
    shipperPhone:'17316226495',
    shipperIdcard:'411424199303183365',
    shipperHeadImg:'../../static/img/logo.png',//货主头像
    shipperInfoImg:'../../static/img/c2.png',//货主信息
  },
  shipperCarInfo:{
    carPlateType:'蓝牌',//车牌类型
    carPlateNumber:'989898',//车牌号码
    carType:'黑A',//车型
    carLong:'42',//车长
    carLoad:'50kg',//载重
    carInfoImg:'../../static/img/small.png',//车辆信息
  },
}

const actions={
  sumbitshipper(){
    //request 提交的时候 select（必选）未通过时传参数组  通过时传参“ok”
    if($(".shipperself_selectstate").val()==''||$(".shippercar_selectstate").val()==""){
       alert("请选择审核结果")
    }else if($(".shipperself_selectstate").val()=='2'||$(".shippercar_selectstate").val()=='2'){
      if($(".shipperself_selectstate").val()=='2'){
        var shipperselflist= $(".shipperself").val().split(",");
        console.log(shipperselflist)
      }else if($(".shipperself_selectstate").val()=='1'){
        var shipperselflist= "ok";
      }
      if($(".shippercar_selectstate").val()=='2'){
        var shippercarlist= $(".shippercar").val().split(",");
        console.log(shippercarlist)
      }else if($(".shippercar_selectstate").val()=='1'){
        var shippercarlist= "ok";
      }
      if(shipperselflist==""||shippercarlist==""){ //console.log([""]=="")//true
        alert("请选择未通过原因")
      }else if(shipperselflist!=""&&shippercarlist!=""){
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
