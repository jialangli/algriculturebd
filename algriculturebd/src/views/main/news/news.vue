<script setup lang='ts'>
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import img from '@/static/img/bannerImg/banner_new.webp'

interface NewsItem {
  id: number
  title: string
  date: string
  content: string
  imageUrl: string
  category: string
  views: number
}

const newsList = ref<NewsItem[]>([
  {
    id: 1,
    title: '茂名荔枝产业迎来丰收季，预计产量创新高',
    date: '2024-03-20',
    content: '茂名市荔枝种植面积达100万亩，今年预计产量将突破50万吨，创历史新高。当地政府积极推动荔枝产业升级，助力农民增收。通过引进新品种、推广新技术，茂名荔枝品质不断提升，市场竞争力显著增强。',
    imageUrl: img,
    category: '产业动态',
    views: 1250,
  },
  {
    id: 2,
    title: '茂名香蕉产业转型升级，打造智慧农业示范区',
    date: '2024-03-18',
    content: '茂名市启动香蕉产业智慧化改造项目，引入物联网技术，实现精准种植和智能管理，提升香蕉品质和产量。项目总投资达5000万元，预计带动周边农户增收30%以上。',
    imageUrl: img,
    category: '科技创新',
    views: 980,
  },
  {
    id: 3,
    title: '茂名农产品电商平台正式上线，助力农产品销售',
    date: '2024-03-15',
    content: '茂名市农产品电商平台正式运营，整合全市优质农产品资源，打通线上线下销售渠道，为农民提供便捷的销售平台。平台上线首月交易额突破1000万元，带动5000户农户增收。',
    imageUrl: img,
    category: '电商发展',
    views: 1560,
  },
  {
    id: 4,
    title: '茂名举办首届农产品品牌节，展示特色农产品',
    date: '2024-03-10',
    content: '茂名市举办首届农产品品牌节，集中展示荔枝、香蕉、龙眼等特色农产品。活动期间签订产销合作协议20余份，意向金额达2亿元。',
    imageUrl: img,
    category: '品牌建设',
    views: 890,
  },
  {
    id: 5,
    title: '茂名举办首届农产品品牌节，展示特色农产品',
    date: '2024-03-10',
    content: '茂名市举办首届农产品品牌节，集中展示荔枝、香蕉、龙眼等特色农产品。活动期间签订产销合作协议20余份，意向金额达2亿元。',
    imageUrl: img,
    category: '品牌建设',
    views: 890,
  },
  {
    id: 6,
    title: '茂名举办首届农产品品牌节，展示特色农产品',
    date: '2024-03-10',
    content: '茂名市举办首届农产品品牌节，集中展示荔枝、香蕉、龙眼等特色农产品。活动期间签订产销合作协议20余份，意向金额达2亿元。',
    imageUrl: img,
    category: '品牌建设',
    views: 890,
  },
])

const currentPage = ref(1)
const pageSize = ref(5)
const searchKeyword = ref('')
const selectedCategory = ref('全部')

const categories = ['全部', '产业动态', '科技创新', '电商发展', '品牌建设']

const filteredNews = computed(() => {
  return newsList.value.filter((news) => {
    const matchKeyword = news.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
      || news.content.toLowerCase().includes(searchKeyword.value.toLowerCase())
    const matchCategory = selectedCategory.value === '全部' || news.category === selectedCategory.value
    return matchKeyword && matchCategory
  })
})

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredNews.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredNews.value.length / pageSize.value)
})

const handlePageChange = (page: number) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSearch = () => {
  currentPage.value = 1
  ElMessage.success('搜索完成')
}

const handleCategoryChange = () => {
  currentPage.value = 1
}
// 跳转动态
const router = useRouter()
const handleDetialClick = (params: string) => {
  router.push({
    name: 'detail',
    params: { id: params },
  })
}
</script>

<template>
  <div class="news-container p-6">
    <h1 class="font-bold text-center mb-8 text-3xl">
      茂名农产品新闻
    </h1>

    <!-- 搜索和筛选区域 -->
    <div class="flex search-filter mb-6 flex-col md:flex-row gap-4">
      <el-input
        v-model="searchKeyword"
        placeholder="搜索新闻..."
        class="w-full md:w-64"
        @keyup.enter="handleSearch"
      >
        <template #append>
          <el-button @click="handleSearch">
            <el-icon><Search /></el-icon>
          </el-button>
        </template>
      </el-input>

      <el-select
        v-model="selectedCategory"
        placeholder="选择分类"
        class="w-full md:w-40"
        @change="handleCategoryChange"
      >
        <el-option
          v-for="category in categories"
          :key="category"
          :label="category"
          :value="category"
        />
      </el-select>
    </div>

    <!-- 新闻列表 -->
    <div class="news-list space-y-6">
      <div

        v-for="news in paginatedNews"
        :key="news.id"
        class="bg-white p-6 news-item rounded-lg shadow-md"
        @click="handleDetialClick('2') "
      >
        <div class="flex flex-col md:flex-row gap-6">
          <div class="news-image w-full md:w-1/3">
            <img
              :src="news.imageUrl"
              :alt="news.title"
              class="w-full rounded-lg h-48 object-cover"
            >
          </div>
          <div class="news-content flex-1">
            <div class="flex items-center gap-2 mb-2">
              <el-tag size="small" type="success">
                {{ news.category }}
              </el-tag>
              <span class="text-gray-500 text-sm">{{ news.views }} 阅读</span>
            </div>
            <h2 class="mb-2 text-xl font-semibold">
              {{ news.title }}
            </h2>
            <p class="text-gray-500 mb-4">
              {{ news.date }}
            </p>
            <p class="text-gray-700">
              {{ news.content }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="mt-8 flex justify-center pagination-container">
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        :total="filteredNews.length"
        :page-sizes="[5, 10, 20]"
        layout="total, sizes, prev, pager, next"
        @size-change="pageSize = $event"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped>
.news-container {
  max-width: 1200px;
  margin: 0 auto;
}

.news-item {
  transition: transform 0.3s ease;
}

.news-item:hover {
  transform: translateY(-5px);
}

.news-image img {
  transition: transform 0.3s ease;
}

.news-image img:hover {
  transform: scale(1.05);
}

:deep(.el-pagination) {
  justify-content: center;
  margin-top: 20px;
}

:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 1px #dcdfe6 inset;
}

:deep(.el-input__wrapper:hover) {
  box-shadow: 0 0 0 1px #409eff inset;
}
</style>
