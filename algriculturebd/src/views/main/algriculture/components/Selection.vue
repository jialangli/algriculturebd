<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: '全部',
    label: '全部',
  },
  {
    value: '广东省',
    label: '广东省',
  },
  {
    value: '广西省',
    label: '广西省',
  },
  {
    value: '湖南省',
    label: '湖南省',
  },

]
</script>

<template>
  <div class="filter-bar">
    <div class="filter-group">
      <span class="filter-label">地区</span>
      <el-select v-model="value" placeholder="Select" style="width: 120px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="filter-group">
      <span class="filter-label">品类</span>
      <el-select
        v-model="value"
        placeholder="Select"

        style="width: 120px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<style scoped>
/* 数据过滤篮 */
.filter-bar {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.filter-group {
  display: flex;
  align-items: center;
}

.filter-label {
  margin-right: 10px;
  font-size: 14px;
  color: #666;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: white;
  min-width: 120px;
}
</style>
