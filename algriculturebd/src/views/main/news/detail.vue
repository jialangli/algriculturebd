<script setup lang='ts'>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const news = ref({
  title: '茂名荔枝产业迎来丰收季，预计产量创新高',
  date: '2024-03-20',
  author: '茂名日报记者 李明',
  views: 1250,
  likes: 328,
  content: `
    茂名市荔枝种植面积达100万亩，今年预计产量将突破50万吨，创历史新高。当地政府积极推动荔枝产业升级，助力农民增收。通过引进新品种、推广新技术，茂名荔枝品质不断提升，市场竞争力显著增强。

    在茂名市高州市根子镇，荔枝种植户张大叔告诉记者："今年荔枝长势特别好，预计产量比去年增加30%左右。这要归功于政府推广的新品种和新技术。"

    据了解，茂名市近年来大力推广"妃子笑"、"白糖罂"等优质荔枝品种，并引入智能灌溉、无人机植保等现代化农业技术。同时，通过建立标准化种植基地，确保荔枝品质的稳定性。

    在销售方面，茂名市积极拓展线上线下销售渠道。除了传统的批发市场销售外，还通过电商平台、直播带货等方式，将茂名荔枝销往全国各地。今年，茂名荔枝还首次出口到东南亚市场，进一步扩大了销售范围。

    茂名市农业农村局相关负责人表示："我们将继续加大科技投入，提升荔枝品质，同时加强品牌建设，让茂名荔枝走向更广阔的市场。"
  `,
  images: [
    {
      url: '/images/news/litchi-field.jpg',
      caption: '茂名荔枝种植基地',
    },
    {
      url: '/images/news/litchi-harvest.jpg',
      caption: '荔枝丰收场景',
    },
    {
      url: '/images/news/litchi-market.jpg',
      caption: '荔枝交易市场',
    },
  ],
  tags: ['产业动态', '荔枝产业', '农业科技', '乡村振兴'],
})

const isLiked = ref(false)
const commentText = ref('')
const comments = ref([
  {
    id: 1,
    user: '农民老王',
    content: '今年荔枝确实长得好，希望价格也能保持稳定。',
    time: '2024-03-20 10:30',
  },
  {
    id: 2,
    user: '农业专家',
    content: '茂名的荔枝产业升级做得很好，值得其他地区学习。',
    time: '2024-03-20 11:15',
  },
])

const handleLike = () => {
  isLiked.value = !isLiked.value
  if (isLiked.value) {
    news.value.likes++
    ElMessage.success('点赞成功')
  }
  else {
    news.value.likes--
    ElMessage.info('取消点赞')
  }
}

const handleComment = () => {
  if (!commentText.value.trim()) {
    ElMessage.warning('请输入评论内容')
    return
  }

  comments.value.unshift({
    id: comments.value.length + 1,
    user: '游客',
    content: commentText.value,
    time: new Date().toLocaleString(),
  })

  commentText.value = ''
  ElMessage.success('评论成功')
}
</script>

<template>
  <div class="p-6 news-detail-container max-w-4xl mx-auto">
    <!-- 文章头部 -->
    <div class="mb-8 article-header">
      <h1 class="text-3xl font-bold mb-4">
        {{ news.title }}
      </h1>
      <div class="flex items-center gap-4 text-gray-500 text-sm">
        <span>{{ news.author }}</span>
        <span>{{ news.date }}</span>
        <span>{{ news.views }} 阅读</span>
      </div>
    </div>

    <!-- 文章内容 -->
    <div class="mb-8 article-content">
      <div class="prose max-w-none">
        <p v-for="(paragraph, index) in news.content.split('\n')" :key="index" class="mb-4">
          {{ paragraph }}
        </p>
      </div>
    </div>

    <!-- 图片展示 -->
    <div class="mb-8 article-images">
      <div class="gap-4 grid grid-cols-1 md:grid-cols-3">
        <div v-for="(image, index) in news.images" :key="index" class="image-container">
          <img :src="image.url" :alt="image.caption" class="w-full h-48 object-cover rounded-lg">
          <p class="text-center mt-2 text-gray-600">
            {{ image.caption }}
          </p>
        </div>
      </div>
    </div>

    <!-- 标签 -->
    <div class="mb-8 article-tags">
      <el-tag
        v-for="tag in news.tags"
        :key="tag"
        class="mr-2"
        type="success"
      >
        {{ tag }}
      </el-tag>
    </div>

    <!-- 互动区域 -->
    <div class="mb-8 interaction-area">
      <div class="flex items-center gap-4">
        <el-button
          :type="isLiked ? 'primary' : 'default'"
          @click="handleLike"
        >
          <el-icon class="mr-1">
            <Thumb />
          </el-icon>
          {{ isLiked ? '已点赞' : '点赞' }} ({{ news.likes }})
        </el-button>
        <el-button>
          <el-icon class="mr-1">
            <Share />
          </el-icon>
          分享
        </el-button>
      </div>
    </div>

    <!-- 评论区 -->
    <div class="comment-section">
      <h3 class="text-xl font-semibold mb-4">
        评论区
      </h3>

      <!-- 评论输入框 -->
      <div class="mb-6 comment-input">
        <el-input
          v-model="commentText"
          type="textarea"
          :rows="3"
          placeholder="写下你的评论..."
        />
        <div class="mt-2 flex justify-end">
          <el-button type="primary" @click="handleComment">
            发表评论
          </el-button>
        </div>
      </div>

      <!-- 评论列表 -->
      <div class="comment-list space-y-4">
        <div
          v-for="comment in comments"
          :key="comment.id"
          class="bg-gray-50 rounded-lg comment-item p-4"
        >
          <div class="flex mb-2 justify-between items-start">
            <span class="font-semibold">{{ comment.user }}</span>
            <span class="text-gray-500 text-sm">{{ comment.time }}</span>
          </div>
          <p class="text-gray-700">
            {{ comment.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-detail-container {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.image-container img {
  transition: transform 0.3s ease;
}

.image-container img:hover {
  transform: scale(1.05);
}

:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 1px #dcdfe6 inset;
}

:deep(.el-input__wrapper:hover) {
  box-shadow: 0 0 0 1px #409eff inset;
}

:deep(.el-textarea__inner) {
  min-height: 100px;
}

.comment-item {
  transition: transform 0.2s ease;
}

.comment-item:hover {
  transform: translateX(5px);
}
</style>
