<script setup lang="ts">

</script>

<template>
  <router-view />
  <!-- 搜索栏 -->
  <section class="search-bar">
    <div class="container">
      <div class="search-container">
        <input type="text" class="search-input" placeholder="搜索农产品、供应商、价格...">
        <button class="search-btn">
          搜索
        </button>
      </div>
    </div>
  </section>

  <!-- 主要内容 -->
  <main class="container">
    <!-- 轮播图/横幅 -->
    <section class="banner">
      农产品产供销一体化服务平台
    </section>

    <!-- 新闻动态 -->
    <section class="news-section">
      <div class="news-header">
        <h2 class="section-title">
          新闻动态
        </h2>
        <div class="news-tabs">
          <div class="news-tab active">
            全部
          </div>
          <div class="news-tab">
            政策文件
          </div>
          <div class="news-tab">
            行业资讯
          </div>
        </div>
      </div>

      <div class="news-list">
        <div class="news-card">
          <img src="https://via.placeholder.com/400x300?text=新闻图片1" alt="新闻图片" class="news-image">
          <div class="news-content">
            <h3 class="news-title">
              全辖首个1到2个国家企业就业和就业服务体系综合服务
            </h3>
            <div class="news-date">
              2023-05-15
            </div>
          </div>
        </div>

        <div class="news-card">
          <img src="https://via.placeholder.com/400x300?text=新闻图片2" alt="新闻图片" class="news-image">
          <div class="news-content">
            <h3 class="news-title">
              三亚南山港推出"一站式"海选科技服务
            </h3>
            <div class="news-date">
              2023-05-10
            </div>
          </div>
        </div>

        <div class="news-card">
          <img src="https://via.placeholder.com/400x300?text=新闻图片3" alt="新闻图片" class="news-image">
          <div class="news-content">
            <h3 class="news-title">
              全国人大代表、中国科学院院士创新：加强粮食类农产品品牌建设
            </h3>
            <div class="news-date">
              2023-05-05
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <div class="page-item active">
          1
        </div>
        <div class="page-item">
          2
        </div>
        <div class="page-item">
          3
        </div>
        <div class="page-item">
          4
        </div>
        <div class="page-item">
          5
        </div>
        <div class="page-item">
          6
        </div>
        <div class="page-item">
          ...
        </div>
        <div class="page-item">
          10
        </div>
        <div class="page-item">
          >
        </div>
      </div>
    </section>

    <!-- 价格行情 -->
    <section class="price-trend">
      <div class="section-title">
        农产品价格行情
      </div>

      <table class="price-table">
        <thead>
          <tr>
            <th>品类</th>
            <th>价格(元/斤)</th>
            <th>城市</th>
            <th>升/降</th>
            <th>走势</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>菠菜</td>
            <td>1.6</td>
            <td>茂名</td>
            <td class="trend-up">
              ↑4.11%
            </td>
            <td>📈</td>
          </tr>
          <tr>
            <td>胡萝卜</td>
            <td>1.6</td>
            <td>茂名</td>
            <td class="trend-up">
              ↑3.11%
            </td>
            <td>📈</td>
          </tr>
          <tr>
            <td>白菜</td>
            <td>1.2</td>
            <td>茂名</td>
            <td class="trend-down">
              ↓2.45%
            </td>
            <td>📉</td>
          </tr>
          <tr>
            <td>土豆</td>
            <td>2.1</td>
            <td>茂名</td>
            <td class="trend-up">
              ↑1.78%
            </td>
            <td>📈</td>
          </tr>
        </tbody>
      </table>

      <div class="view-more">
        <a href="#" class="btn btn-outline">查看更多</a>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* 搜索栏 */
.search-bar {
  /* background-color: #389e0d; */
  padding: 15px 0;
}

.search-container {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  outline: none;
}

.search-btn {
  background-color: #52c41a;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: #73d13d;
}

/* 轮播图/横幅 */
.banner {
  height: 300px;
  background-color: #d9f7be;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #389e0d;
  font-size: 24px;
  font-weight: bold;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
    url('https://via.placeholder.com/1200x300?text=农产品产供销数据平台');
  background-size: cover;
  background-position: center;
}

/* 新闻动态 */
.news-section {
  margin-bottom: 40px;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.news-tabs {
  display: flex;
}

.news-tab {
  padding: 5px 15px;
  cursor: pointer;
}

.news-tab.active {
  color: #389e0d;
  border-bottom: 2px solid #389e0d;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.news-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.news-image {
  height: 160px;
  width: 100%;
  object-fit: cover;
}

.news-content {
  padding: 15px;
}

.news-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-date {
  color: #999;
  font-size: 12px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.page-item {
  margin: 0 5px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
}

.page-item.active {
  background-color: #389e0d;
  color: white;
}

/* 价格行情 */
.price-trend {
  margin-bottom: 40px;
}

.price-table {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
  overflow: hidden;
}

.price-table th,
.price-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.price-table th {
  background-color: #fafafa;
  font-weight: 500;
}

.price-table tr:last-child td {
  border-bottom: none;
}

.trend-up {
  color: #f5222d;
}

.trend-down {
  color: #52c41a;
}
</style>
