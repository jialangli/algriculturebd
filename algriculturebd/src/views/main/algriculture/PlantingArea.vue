<script  setup lang='ts'>
import * as echarts from 'echarts';
</script>

<template>
   <!-- 种植面积部分 -->
   <section id="area-section" class="data-section" style="display: none">
        <!-- 过滤栏 -->
        <div class="filter-bar">
          <div class="filter-group">
            <span class="filter-label">地区</span>
            <select class="filter-select">
              <option>全部</option>
              <option>广东省</option>
              <option>广西省</option>
              <option>海南省</option>
            </select>
          </div>
          <div class="filter-group">
            <span class="filter-label">品类</span>
            <select class="filter-select">
              <option>全部</option>
              <option>水果</option>
              <option>蔬菜</option>
              <option>粮食</option>
            </select>
          </div>
          <button class="btn btn-primary" style="margin-left: auto">查询</button>
        </div>

        <!-- 面积表格 -->
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

</style>
