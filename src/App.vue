<template>
  <div id="app">
    <div class="form">
      <el-select v-model="type" style="width: 100px">
        <el-option label="理科" value="理科"></el-option>
        <el-option label="文科" value="文科"></el-option>
      </el-select>
      <el-input-number
        v-model="score"
        :min="400"
        :max="700"
        style="margin: 0 15px"
      ></el-input-number>
      <el-button @click="init">查询</el-button>
    </div>
    <el-table
      fit="true"
      border
      :highlight-current-row="true"
      :data="dataList"
      style="width: 100%;"
      max-height="500"
    >
      <el-table-column prop="schoolName" label="学校" sortable align="center">
      </el-table-column>
      <el-table-column prop="spname" label="专业" sortable align="center">
      </el-table-column>
      <el-table-column
        prop="min"
        label="最低分"
        sortable
        align="center"
        width="150px"
      ></el-table-column>
      <el-table-column
        prop="average"
        label="平均分"
        sortable
        align="center"
        width="150px"
      ></el-table-column>
      <el-table-column
        prop="max"
        label="最高分"
        sortable
        align="center"
        width="150px"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { query } from "./api/app";

export default {
  data() {
    return {
      dataList: [],
      score: 600,
      type: "理科"
    };
  },
  methods: {
    async init() {
      this.dataList = await query(this.type, "陕西", "2017", this.score);
    }
  },
  created() {
    this.init();
  }
};
</script>
<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.input {
  width: 200px;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
