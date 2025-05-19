<script  setup lang='ts'>
import Selection from './components/Selection.vue'
</script>

<template>
  <!-- 种植面积部分 -->
  <Selection />
  <!-- 面积表格 -->
  <section>
    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>类型</th>
            <th>品类</th>
            <th>种植面积</th>
            <th>省份</th>
            <th>更新时间</th>
            <th>数据来源</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>水果</td>
            <td>水田</td>
            <td>100公顷</td>
            <td>广东省</td>
            <td>2025/3/12</td>
            <td>茂名市</td>
          </tr>
          <tr>
            <td>2</td>
            <td>水果</td>
            <td>水田</td>
            <td>100公顷</td>
            <td>广东省</td>
            <td>2025/3/12</td>
            <td>茂名市</td>
          </tr>
          <tr>
            <td>3</td>
            <td>水果</td>
            <td>水田</td>
            <td>100公顷</td>
            <td>广东省</td>
            <td>2025/3/12</td>
            <td>茂名市</td>
          </tr>
          <tr>
            <td>4</td>
            <td>水果</td>
            <td>水田</td>
            <td>100公顷</td>
            <td>广东省</td>
            <td>2025/3/12</td>
            <td>茂名市</td>
          </tr>
          <tr>
            <td>5</td>
            <td>水果</td>
            <td>水田</td>
            <td>100公顷</td>
            <td>广东省</td>
            <td>2025/3/12</td>
            <td>茂名市</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style>
 .data-table-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 30px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}

.data-table th {
  background-color: #fafafa;
  font-weight: 500;
  color: #666;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.data-table tr:hover {
  background-color: #f9f9f9;
}
</style>
