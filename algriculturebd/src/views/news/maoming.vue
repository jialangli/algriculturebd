<script setup lang='ts'>
import { ref } from 'vue'

interface NewsItem {
  id: number
  title: string
  date: string
  content: string
  imageUrl: string
}

const newsList = ref<NewsItem[]>([
  {
    id: 1,
    title: '茂名荔枝产业迎来丰收季，预计产量创新高',
    date: '2024-03-20',
    content: '茂名市荔枝种植面积达100万亩，今年预计产量将突破50万吨，创历史新高。当地政府积极推动荔枝产业升级，助力农民增收。',
    imageUrl: '/images/news/maoming-litchi.jpg',
  },
  {
    id: 2,
    title: '茂名香蕉产业转型升级，打造智慧农业示范区',
    date: '2024-03-18',
    content: '茂名市启动香蕉产业智慧化改造项目，引入物联网技术，实现精准种植和智能管理，提升香蕉品质和产量。',
    imageUrl: '/images/news/maoming-banana.jpg',
  },
  {
    id: 3,
    title: '茂名农产品电商平台正式上线，助力农产品销售',
    date: '2024-03-15',
    content: '茂名市农产品电商平台正式运营，整合全市优质农产品资源，打通线上线下销售渠道，为农民提供便捷的销售平台。',
    imageUrl: '/images/news/maoming-ecommerce.jpg',
  },
])
</script>

<template>
  <div class="news-container p-6">
    <h1 class="text-3xl font-bold text-center mb-8">
      茂名农产品新闻
    </h1>

    <div class="news-list space-y-6">
      <div v-for="news in newsList" :key="news.id" class="news-item bg-white rounded-lg shadow-md p-6">
        <div class="flex flex-col md:flex-row gap-6">
          <div class="news-image w-full md:w-1/3">
            <img :src="news.imageUrl" :alt="news.title" class="w-full h-48 object-cover rounded-lg">
          </div>
          <div class="news-content flex-1">
            <h2 class="text-xl font-semibold mb-2">
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
</style>
