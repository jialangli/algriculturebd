<script setup lang='ts'>

</script>

<template>
  <!-- 导航栏 -->
  <header class="navbar">
    <div class="container navbar-container">
      <div class="logo">
        <span class="logo-icon">🌾</span>
        <span>农产品产供销数据平台</span>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          首页
        </li>
        <li class="nav-item active">
          农产品产供销数据
        </li>
        <li class="nav-item">
          关于我们
        </li>
      </ul>
      <div class="auth-buttons">
        <button class="btn btn-outline">
          登录
        </button>
        <button class="btn btn-primary">
          注册
        </button>
      </div>
    </div>
  </header>

  <!-- 主要内容 -->
  <main class="container">
    <!-- 数据选项卡 -->
    <div class="data-tabs">
      <div class="data-tab active" onclick="showDataSection('price')">
        价格行情
      </div>
      <div class="data-tab" onclick="showDataSection('area')">
        种植面积
      </div>
      <div class="data-tab" onclick="showDataSection('yield')">
        产量预测
      </div>
    </div>

    <!-- 价格行情部分 -->
    <section id="price-section" class="data-section">
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
        <button class="btn btn-primary" style="margin-left: auto">
          查询
        </button>
      </div>

      <!-- 价格图表 -->
      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">
            变化趋势
          </h3>
          <div class="chart-options">
            <div class="chart-option active">
              近7天
            </div>
            <div class="chart-option">
              近30天
            </div>
            <div class="chart-option">
              近半年
            </div>
          </div>
        </div>
        <canvas id="priceChart" height="300" />
      </div>

      <!-- 价格表格 -->
      <div class="data-table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>类型</th>
              <th>品名</th>
              <th>价格</th>
              <th>省份</th>
              <th>数据时间</th>
              <th>数据来源</th>
              <th>地区/市场</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>水果</td>
              <td>哈密瓜</td>
              <td>4.4元/斤</td>
              <td>广东省</td>
              <td>2025/3/12</td>
              <td>全国农批布</td>
              <td>茂名市xx农贸市场</td>
            </tr>
            <tr>
              <td>2</td>
              <td>水果</td>
              <td>哈密瓜</td>
              <td>4.4元/斤</td>
              <td>广东省</td>
              <td>2025/3/12</td>
              <td>全国农批布</td>
              <td>茂名市xx农贸市场</td>
            </tr>
            <tr>
              <td>3</td>
              <td>水果</td>
              <td>哈密瓜</td>
              <td>4.4元/斤</td>
              <td>广东省</td>
              <td>2025/3/12</td>
              <td>全国农批布</td>
              <td>茂名市xx农贸市场</td>
            </tr>
            <tr>
              <td>4</td>
              <td>水果</td>
              <td>哈密瓜</td>
              <td>4.4元/斤</td>
              <td>广东省</td>
              <td>2025/3/12</td>
              <td>全国农批布</td>
              <td>茂名市xx农贸市场</td>
            </tr>
            <tr>
              <td>5</td>
              <td>水果</td>
              <td>哈密瓜</td>
              <td>4.4元/斤</td>
              <td>广东省</td>
              <td>2025/3/12</td>
              <td>全国农批布</td>
              <td>茂名市xx农贸市场</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

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
        <button class="btn btn-primary" style="margin-left: auto">
          查询
        </button>
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

    <!-- 产量预测部分 -->
    <section id="yield-section" class="data-section" style="display: none">
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
        <button class="btn btn-primary" style="margin-left: auto">
          查询
        </button>
      </div>

      <!-- 产量图表 -->
      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">
            产量预测趋势
          </h3>
          <div class="chart-options">
            <div class="chart-option active">
              季度
            </div>
            <div class="chart-option">
              年度
            </div>
          </div>
        </div>
        <canvas id="yieldChart" height="300" />
      </div>
    </section>
  </main>

  <!-- 页脚 -->

  <script>
    // 数据选项卡切换
    function showDataSection(section) {
    // 隐藏所有部分
    document.querySelectorAll('.data-section').forEach((el) => {
    el.style.display = 'none'
    })

    // 显示选中的部分
    document.getElementById(section + '-section').style.display = 'block'

    // 更新选项卡状态
    document.querySelectorAll('.data-tab').forEach((tab) => {
    tab.classList.remove('active')
    })
    event.target.classList.add('active')
    }

    // 图表选项切换
    document.querySelectorAll('.chart-option').forEach((option) => {
    option.addEventListener('click', function () {
    document.querySelectorAll('.chart-option').forEach((opt) => {
    opt.classList.remove('active')
    })
    this.classList.add('active')
    // 这里可以添加图表数据更新的逻辑
    })
    })

    // 初始化价格图表
    const priceCtx = document.getElementById('priceChart').getContext('2d')
    const priceChart = new Chart(priceCtx, {
    type: 'line',
    data: {
    labels: ['2025-03-05', '2025-03-06', '2025-03-07', '2025-03-08', '2025-03-09', '2025-03-10', '2025-03-11'],
    datasets: [
    {
    label: '哈密瓜价格 (元/斤)',
    data: [3.8, 4.0, 4.2, 4.3, 4.4, 4.4, 4.3],
    borderColor: '#389e0d',
    backgroundColor: 'rgba(56, 158, 13, 0.1)',
    borderWidth: 2,
    tension: 0.1,
    fill: true,
    },
    ],
    },
    options: {
    responsive: true,
    plugins: {
    legend: {
    position: 'top',
    },
    tooltip: {
    mode: 'index',
    intersect: false,
    },
    },
    scales: {
    y: {
    beginAtZero: false,
    min: 3,
    max: 5,
    ticks: {
    stepSize: 0.5,
    },
    },
    },
    },
    })

    // 初始化产量图表
    const yieldCtx = document.getElementById('yieldChart').getContext('2d')
    const yieldChart = new Chart(yieldCtx, {
    type: 'bar',
    data: {
    labels: ['第一季度', '第二季度', '第三季度', '第四季度'],
    datasets: [
    {
    label: '预计产量 (吨)',
    data: [1200, 1800, 2200, 1500],
    backgroundColor: [
    'rgba(56, 158, 13, 0.7)',
    'rgba(56, 158, 13, 0.7)',
    'rgba(56, 158, 13, 0.7)',
    'rgba(56, 158, 13, 0.7)',
    ],
    borderColor: [
    'rgba(56, 158, 13, 1)',
    'rgba(56, 158, 13, 1)',
    'rgba(56, 158, 13, 1)',
    'rgba(56, 158, 13, 1)',
    ],
    borderWidth: 1,
    },
    ],
    },
    options: {
    responsive: true,
    plugins: {
    legend: {
    position: 'top',
    },
    },
    scales: {
    y: {
    beginAtZero: true,
    },
    },
    },
    })
  </script>
</template>

<style>

</style>
