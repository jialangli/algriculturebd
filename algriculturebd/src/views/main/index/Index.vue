<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { ElImage } from 'element-plus'
import { computed, ref } from 'vue'
import bannerImg1 from '@/static/img/bannerImg/banner_1.png'
import bannerImg2 from '@/static/img/bannerImg/banner_2.png'
import bannerImg3 from '@/static/img/bannerImg/banner_3.png'
// 轮播图
const bannerItem = [{
  img: bannerImg3,
  id: 1,
}, {
  img: bannerImg2,
}, {
  img: bannerImg1,
  id: 3,
}]

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
// pagination
const data = ref([
  { name: 'John', age: 25, address: 'New York' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },
  { name: 'Jane', age: 30, address: 'Los Angeles' },

  // 更多数据...
])
const newsList = ref([
  { title: '全辖首个1到2个国家企业就业和就业服务体系综合服务', date: '2023-05-15', img: bannerImg1 },
  { title: '全辖首个1到2个国家企业就业和就业服务体系综合服务', date: '2023-05-15', img: bannerImg1 },
  { title: '全辖首个1到2个国家企业就业和就业服务体系综合服务', date: '2023-05-15', img: bannerImg1 },
  { title: '全辖首个1到2个国家企业就业和就业服务体系综合服务', date: '2023-05-15', img: bannerImg1 },
  { title: '全辖首个1到2个国家企业就业和就业服务体系综合服务', date: '2023-05-15', img: bannerImg1 },
  { title: '全辖首个1到2个国家企业就业和就业服务体系综合服务', date: '2023-05-15', img: bannerImg1 },
])

const pageSize = ref(3)
const currentPage = ref(1)

const total = computed(() => newsList.value.length)

const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return data.value.slice(start, end)
})

const handleCurrentChange = (page) => {
  currentPage.value = page
}
</script>

<template>
  <!-- 搜索栏 -->

  <section class="search-bar">
    <div class="search-container">
      <input type="text" class="search-input" placeholder="搜索农产品、供应商、价格...">
      <button class="search-btn">
        搜索
      </button>
    </div>
  </section>

  <!-- 主要内容 -->
  <main class="container">
    <!-- 轮播图/横幅 -->
    <section class="banner w1200px h300px">
      <el-carousel :autoplay="false" style="height: 100%; width: 100%;">
        <RouterLink to="/main/news">
          <el-carousel-item v-for="item in bannerItem" :key="item.id" style="height:100%">
            <a class="aspect-container size-full">
              <ElImage
                :src="item.img" :alt="item.id" fit="cover" style="width: 100%; height: 100%"
              />
            </a>
          </el-carousel-item>
        </RouterLink>
      </el-carousel>
    </section>

    <div class="news-section w1200px relative mt-20">
      <router-link to="/main/news">
        <div class="title absolute z-1 text-25px text-green-700">
          <i class="b-l-solid b-green-700 w-1px h-20px b-l-3 inline-block" />
          新闻动态
        </div>
      </router-link>
      <el-tabs v-model="activeName" class="b-cyan" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">
          <div class="news-list">
            <div v-for="item in newsList" :key="item.title " class="news-card">
              <router-link to="/main/news">
                <img :src="item.img" alt="新闻图片" class="news-image">
                <div class="news-content">
                  <h3 class="news-title">
                    全辖首个1到2个国家企业就业和就业服务体系综合服务
                  </h3>
                  <div class="news-date">
                    2023-05-15
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="pagination reliateve">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="total"
              :page-size="pageSize"
              @current-change="handleCurrentChange"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">
          Config
        </el-tab-pane>
        <el-tab-pane label="Role" name="third" style="color: red;">
          Role
        </el-tab-pane>
        <el-tab-pane label="Task" name="fourth">
          Task
        </el-tab-pane>
      </el-tabs>
    </div>

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
/* tabs */
::v-deep(.el-tabs__nav-scroll) {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: end;
  .el-tabs__item {
    font-size: large;
  }
}
/* paginations */
.pagination {
  ::v-deep(.el-pager) {
    color: #389e0d;
    .is-active {
      background-color: #389e0d !important;
    }
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
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
.carousel-item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  display: flex;
  align-items: center;
  margin: 0;
  text-align: center;
  height: 100%;
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
  margin-top: 10px;
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
