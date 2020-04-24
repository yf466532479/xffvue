<template>
  <el-container>
    <el-header>我是home页面</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <el-form>
          <el-form-item>
            <el-select v-model="edit.name" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="el-icon-download" @click="exportClientInfoExcel">导出</el-button>
        </el-form-item>
        </el-form>
        <el-date-picker type="year" v-model="year" format="yyyy年"></el-date-picker>
        <el-button @click="aa">ceshi</el-button>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import aa from "@/pages/main/main";
import axios from 'axios';
export default {
  components: {
    aa
  },
  data() {
    return {
      options: [
        {
          value: 0,
          name: "大爷"
        },
        {
          value: 1,
          name: "大爷1"
        },
        {
          value: 2,
          name: "大爷2"
        }
      ],
      msg: "nidaye",
      value: "",
      label: "",
      key: "",
      name: "",
      edit: {},
      year: ""
    };
  },
  created() {
    this.getData();
    this.getYear();
  },
  mounted() {},
  methods: {
    
    exportClientInfoExcel(){
      let param = {
      names:'aaa'
    }
      return axios({
          url: "/api/file/downfile",
          method:'post',
          params:param,
          headers: {
              // 'Content-Type': 'application/json;charset=utf-8'
                // 'Content-Type': 'application/x-www-form/urlencoded'
          },
          responseType: 'blob',

      }).then(res=>{
        let blob =new Blob([res.data],{type:"application/vnd.ms-excel;charset=utf-8"});
        if(window.navigator.msSaveBlob){
          window,navigator.msSaveBlob(blob,"qqqqq.xls");
        }else{
          let url = window.URL.createObjectURL(blob);
          let link = document.createElement("a");
          link.style.display = 'none';
          link.href = url;
          link.download = "qqqqq.xls";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    getYear() {
      var date = new Date();
      this.year = date;
    },
    getData: function() {
      let edit = {
        name: 1
      };
      this.edit = edit;
    },
    aa: function() {
      // console.log("传入后台值value=", this.edit.name);
      this.msg = this.edit.name;
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>