<script setup lang="ts">
// 滚动动画
document.addEventListener('DOMContentLoaded', () => {
  const animateOnScroll = function () {
    const elements = document.querySelectorAll('.timeline-item, .team-card')

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        (element as HTMLElement).style.opacity = '1';
        (element as HTMLElement).style.transform = 'translateY(0)'
      }
    })
  }

  window.addEventListener('scroll', animateOnScroll)
  animateOnScroll() // 初始加载时执行一次
})
</script>

<template>
  <main class="about-page">
    <!-- 关于我们头部 -->
    <section class="about-header">
      <h1>关于我们</h1>
      <p>我们致力于打造全国领先的农产品产供销一体化数据服务平台，通过数据赋能农业产业升级，连接生产者与消费者，推动农业现代化发展。</p>
    </section>

    <!-- 发展历程 -->
    <section class="timeline">
      <div class="section-title">
        发展历程
      </div>

      <div class="timeline-item">
        <div class="timeline-year">
          2018
        </div>
        <h3>平台正式成立</h3>
        <p>在茂名市农业局指导下，平台正式成立并上线首个版本</p>
      </div>

      <div class="timeline-item">
        <div class="timeline-year">
          2020
        </div>
        <h3>服务覆盖全省</h3>
        <p>完成广东省21个地级市的服务网络建设，注册用户突破10万</p>
      </div>

      <div class="timeline-item">
        <div class="timeline-year">
          2022
        </div>
        <h3>数据平台升级</h3>
        <p>推出智能数据分析系统，接入全省200+农业合作社数据</p>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team-section">
      <div class="section-title">
        核心团队
      </div>

      <div class="team-grid">
        <div class="team-card">
          <div class="team-photo">
            CEO
          </div>
          <div class="team-info">
            <h4>张晓明</h4>
            <p>创始人 & CEO</p>
            <p>15年农业信息化经验</p>
          </div>
        </div>

        <div class="team-card">
          <div class="team-photo">
            CTO
          </div>
          <div class="team-info">
            <h4>王立军</h4>
            <p>首席技术官</p>
            <p>大数据专家</p>
          </div>
        </div>

        <div class="team-card">
          <div class="team-photo">
            COO
          </div>
          <div class="team-info">
            <h4>李芳</h4>
            <p>首席运营官</p>
            <p>农产品供应链专家</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="partners-section">
      <div class="section-title">
        合作伙伴
      </div>
      <div class="partner-logos">
        <div class="partner-logo">
          农业局
        </div>
        <div class="partner-logo">
          农科院
        </div>
        <div class="partner-logo">
          合作社联盟
        </div>
        <div class="partner-logo">
          农产品交易所
        </div>
        <div class="partner-logo">
          农业银行
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: #fafafa;
}

/* 关于我们头部 */
.about-header {
  position: relative;
  background: linear-gradient(135deg, rgba(56, 158, 13, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%);
  padding: 100px 0;
  text-align: center;
  margin-bottom: 60px;
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.about-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 50px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="50" height="50" x="0" y="0" fill="none" stroke="%23389e0d" stroke-width="0.5" opacity="0.1"/></svg>');
  opacity: 0.3;
  z-index: -1;
}

.about-header h1 {
  font-size: 42px;
  color: #389e0d;
  margin-bottom: 20px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.about-header p {
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  color: #389e0d;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #389e0d;
  border-radius: 3px;
}

/* 时间轴 */
.timeline {
  position: relative;
  padding: 60px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #389e0d, rgba(56, 158, 13, 0.2));
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: calc(50% - 40px);
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.timeline-item:nth-child(odd) {
  margin-left: calc(50% + 40px);
  animation: fadeInRight 0.6s ease-out 0.3s forwards;
}

.timeline-item:nth-child(even) {
  margin-right: calc(50% + 40px);
  animation: fadeInLeft 0.6s ease-out 0.3s forwards;
}

.timeline-item:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.timeline-year {
  position: absolute;
  width: 80px;
  height: 80px;
  background: #389e0d;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 4px 12px rgba(56, 158, 13, 0.3);
}

.timeline-item h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #389e0d;
}

.timeline-item p {
  color: #666;
}

/* 团队介绍 */
.team-section {
  background: linear-gradient(to bottom, rgba(246, 255, 237, 0.5), rgba(255, 255, 255, 0.8));
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.team-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="%23389e0d" stroke-width="0.5" opacity="0.1"/></svg>');
  opacity: 0.2;
  z-index: -1;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.team-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(30px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.team-card:nth-child(1) {
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
}
.team-card:nth-child(2) {
  animation: fadeInUp 0.6s ease-out 0.4s forwards;
}
.team-card:nth-child(3) {
  animation: fadeInUp 0.6s ease-out 0.6s forwards;
}

.team-card:hover {
  transform: translateY(-10px) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.team-photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 3px solid #389e0d;
  background: linear-gradient(45deg, #f5f5f5, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
}

.team-info {
  padding: 25px;
}

.team-info h4 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
}

.team-info p {
  color: #666;
  font-size: 14px;
  margin-bottom: 5px;
}

.team-info p:last-child {
  color: #999;
  font-size: 13px;
}

/* 合作伙伴 */
.partners-section {
  padding: 80px 0;
  text-align: center;
}

.partner-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  /* align-items: center; */
}

.partner-logo {
  height: 60px;
  line-height: 40px;
  filter: grayscale(100%) brightness(1.2);
  opacity: 0.7;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 10px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.partner-logo:hover {
  filter: none;
  opacity: 1;
  transform: translateY(-5px);
}

/* 动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-header {
    padding: 60px 0;
  }

  .about-header h1 {
    font-size: 32px;
  }

  .about-header p {
    font-size: 16px;
  }

  .timeline::before {
    left: 30px;
  }

  .timeline-item,
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    width: calc(100% - 80px);
    margin-left: 80px;
    animation: fadeInRight 0.6s ease-out 0.3s forwards;
  }

  .timeline-year {
    left: -40px;
    transform: none;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
