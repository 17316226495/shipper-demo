<template>
    <div>
      <p>
        <span>请选择审核结果：</span>
        <select class="select_change" v-model="selectstate"  @change="chooseMedicine($event)">
          <option value="0" disabled>请选择</option>
          <option value="1">通过</option>
          <option value="2">未通过</option>
        </select>
        <span class="span_text_color">(必选)</span>
        <input type="hidden"  :value="selectstate" v-if="checkedname=='shipperself'"  class="shipperself_selectstate"/>
        <input type="hidden"  :value="selectstate" v-if="checkedname=='shippercar'"  class="shippercar_selectstate"/>
        <input type="hidden"  :value="selectstate" v-if="checkedname=='driverself'"  class="driverself_selectstate"/>
        <input type="hidden"  :value="selectstate" v-if="checkedname=='drivercar'"  class="drivercar_selectstate"/>
      </p>
      <div class="div_nopass_content" v-if="selectedImgShow">
        <template v-for="(checkdesc,checkindex) in checkboxList">
          <input type="checkbox" :value="checkindex" :name="checkindex" v-model="selectedList" > <label :for="checkdesc">{{checkdesc}}</label>
        </template>

        <input type="hidden"  :value="selectedList" v-if="checkedname=='shipperself'"  class="shipperself"/>
        <input type="hidden"  :value="selectedList" v-if="checkedname=='shippercar'"  class="shippercar"/>
        <input type="hidden"  :value="selectedList" v-if="checkedname=='driverself'"  class="driverself"/>
        <input type="hidden"  :value="selectedList" v-if="checkedname=='drivercar'"  class="drivercar"/>
      </div>
    </div>
</template>
<script>
  import { mapState} from 'vuex'
  export default{
    props:{
      checkedname:{
        type:String
      }
    },
    data(){
      return{
        selectedImgShow:false,
//      checkboxList:['照片模糊','人物不符护手霜','照片模糊','人物不符','照片模糊多少度','人物不符'],
        selectedList:[],
        selectstate:'',
      }
    },
    created(){
    },
    computed:{
      ...mapState({
        checkboxList:state=>state.activities.checkboxList,
      })
    },
    methods:{
      chooseMedicine(event){
        if(event.target.value=="2"){
          this.selectedImgShow = true;
        }else{
          this.selectedImgShow = false;
        }
//        console.log(event.target.value)
        console.log(this.selectstate)
      },
    },

  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
</style>
