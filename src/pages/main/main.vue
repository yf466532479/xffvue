<template>
  <div>
      <el-input v-model="this.myMsg"></el-input>
        <div>{{this.myMsg}}</div>
        
  </div>
</template>
<script>
export default {
  props: ["msg"],
  data() {
    return {
      myMsg: this.msg
    };
  },
  mounted(){
      console.log(this.myMsg)
  },
  watch:{
      msg(newa,olda){
          this.myMsg = newa;
      },
  }
};
</script>
<style scoped>
</style>