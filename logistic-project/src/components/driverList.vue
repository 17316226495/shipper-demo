<template>
    <div>
      <div class="div_cer_top">
        <div class="div_title">
          <div class="div_data">
            <span style="float: left">时间：</span>
            <el-date-picker
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              placeholder="选择日期"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </el-date-picker>
          </div>
          <div class="div_phone">
            <span>手机号：</span>
            <input type="text" class="input_phone" max="11">
          </div>
          <div class="div_state">
            <span>审核状态：</span>
            <select @change="selectStateChange('driver',$event)">
              <option value="0" selected disabled>请选择</option>
              <option value="1">未审核</option>
              <option value="2">通过</option>
              <option value="3">不通过</option>
              <option value="4">变更审核</option>
            </select>
            <span>司机类型：</span>
            <select @change="selectDriverChange($event)">
              <option value="0" selected disabled>请选择</option>
              <option value="0">主驾驶</option>
              <option value="1">副驾驶</option>
            </select>
            <button @click="searchFind('driver',$event)">搜索</button>
          </div>
        </div>
        <div class="div_table">
          <table border="0" cellpadding="0" cellspacing="0" class="drivertable">
            <thead>
            <tr>
              <th>日期时间</th>
              <th>用户名</th>
              <th>手机号</th>
              <th>审核状态</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>2017-01-12 12:20</td>
              <td>xuhui</td>
              <td>17316226495</td>
              <td>已通过</td>
              <td>哈哈</td>
               <td><router-link :to="{name:'driverCertification'}">详情</router-link></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
</template>
<script>
  import { mapState,mapActions} from 'vuex'
  export default{
    data(){
      return {
        value7: '',
        currentPage4: 4,
      }
    },
    created(){

    },
    computed:{
      ...mapState({
        pickerOptions2:state=>state.activities.pickerOptions2,
      })
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import "../../static/css/certification.css";
</style>
