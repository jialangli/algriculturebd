<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const categoryValue = ref('')

const options = [
  {
    value: '全部',
    label: '全部',
  },
  {
    value: '北京市',
    label: '北京市',
  },
  {
    value: '天津市',
    label: '天津市',
  },
  {
    value: '河北省',
    label: '河北省',
  },
  {
    value: '山西省',
    label: '山西省',
  },
  {
    value: '内蒙古自治区',
    label: '内蒙古自治区',
  },
  {
    value: '辽宁省',
    label: '辽宁省',
  },
  {
    value: '吉林省',
    label: '吉林省',
  },
  {
    value: '黑龙江省',
    label: '黑龙江省',
  },
  {
    value: '上海市',
    label: '上海市',
  },
  {
    value: '江苏省',
    label: '江苏省',
  },
  {
    value: '浙江省',
    label: '浙江省',
  },
  {
    value: '安徽省',
    label: '安徽省',
  },
  {
    value: '福建省',
    label: '福建省',
  },
  {
    value: '江西省',
    label: '江西省',
  },
  {
    value: '山东省',
    label: '山东省',
  },
  {
    value: '河南省',
    label: '河南省',
  },
  {
    value: '湖北省',
    label: '湖北省',
  },
  {
    value: '湖南省',
    label: '湖南省',
  },
  {
    value: '广东省',
    label: '广东省',
  },
  {
    value: '广西壮族自治区',
    label: '广西壮族自治区',
  },
  {
    value: '海南省',
    label: '海南省',
  },
  {
    value: '重庆市',
    label: '重庆市',
  },
  {
    value: '四川省',
    label: '四川省',
  },
  {
    value: '贵州省',
    label: '贵州省',
  },
  {
    value: '云南省',
    label: '云南省',
  },
  {
    value: '西藏自治区',
    label: '西藏自治区',
  },
  {
    value: '陕西省',
    label: '陕西省',
  },
  {
    value: '甘肃省',
    label: '甘肃省',
  },
  {
    value: '青海省',
    label: '青海省',
  },
  {
    value: '宁夏回族自治区',
    label: '宁夏回族自治区',
  },
  {
    value: '新疆维吾尔自治区',
    label: '新疆维吾尔自治区',
  },
  {
    value: '台湾省',
    label: '台湾省',
  },
  {
    value: '香港特别行政区',
    label: '香港特别行政区',
  },
  {
    value: '澳门特别行政区',
    label: '澳门特别行政区',
  }
]

const categoryOptions = [
  {
    value: '全部',
    label: '全部',
  },
  {
    value: '苹果',
    label: '苹果',
  },
  {
    value: '香蕉',
    label: '香蕉',
  },
  {
    value: '橙子',
    label: '橙子',
  },
  {
    value: '葡萄',
    label: '葡萄',
  },
  {
    value: '西瓜',
    label: '西瓜',
  },
  {
    value: '草莓',
    label: '草莓',
  },
  {
    value: '芒果',
    label: '芒果',
  },
  {
    value: '菠萝',
    label: '菠萝',
  },
  {
    value: '梨',
    label: '梨',
  },
  {
    value: '桃子',
    label: '桃子',
  },
  {
    value: '猕猴桃',
    label: '猕猴桃',
  },
  {
    value: '柚子',
    label: '柚子',
  },
  {
    value: '荔枝',
    label: '荔枝',
  },
  {
    value: '龙眼',
    label: '龙眼',
  },
  {
    value: '榴莲',
    label: '榴莲',
  },
  {
    value: '山竹',
    label: '山竹',
  },
  {
    value: '蓝莓',
    label: '蓝莓',
  },
  {
    value: '樱桃',
    label: '樱桃',
  },
  {
    value: '石榴',
    label: '石榴',
  },
]
</script>

<template>
  <div class="filter-bar">
    <div class="filter-group">
      <span class="filter-label">地区</span>
      <el-select v-model="value" placeholder="全部" style="width: 120px">
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
        v-model="categoryValue"
        placeholder="全部"
        style="width: 120px"
      >
        <el-option
          v-for="item in categoryOptions"
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
