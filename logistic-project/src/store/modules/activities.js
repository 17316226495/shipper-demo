/**
 * Created by hasee-pc on 2017/10/24.
 */
import request from 'superagent'

import $ from 'webpack-zepto'
const state={
  checkboxList:['照片模糊','人物不符','太丑','太美','不是本人','呵呵'],
  pickerOptions2: {
    shortcuts: [{
      text: '最近一周',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end]);
      }
    }]
  },
  list:""//获取list的数据
};

const mutations={ //action ajax获取数据之后再次进行赋值之列的操作
  getList(state,payload){
    state.list=payload.res
  }
};

const actions={
  // 获取详情页列表
    getList({commit}){
      request
        .post('freight/public/cargosAduit/list')
        .set('Accept','application/json')
        .send('"page":"1","starttime":"","endtime":"","phone":"","isaduit":""')
        .end((err,res)=>{
          if(!err){
            console.log(res.body);
            commit({
              type:'getList',//指定函数名 只在此获取数据 其他的操作给mutations
              res:res.body
            })
          }
      })
    },


}

export default {
  state,
  actions
}
