<template>
  <div class="user-dashboard">
    <header class="dashboard-header">
      <h1>用户控制台</h1>
      <p class="welcome-message">欢迎回来，{{ userName }}！</p>
    </header>

    <main class="dashboard-content">
      <section class="quick-actions">
        <h2>快捷操作</h2>
        <div class="action-cards">
          <div class="card">
            <div class="card-icon">👤</div>
            <h3>个人资料</h3>
            <p>编辑您的个人信息</p>
            <button class="btn">管理</button>
          </div>
          <div class="card">
            <div class="card-icon">🔒</div>
            <h3>安全设置</h3>
            <p>修改密码和安全选项</p>
            <button class="btn">设置</button>
          </div>
          <div class="card">
            <div class="card-icon">📊</div>
            <h3>账户概览</h3>
            <p>查看您的使用统计</p>
            <button class="btn">详情</button>
          </div>
          <div class="card">
            <div class="card-icon">⚙️</div>
            <h3>系统设置</h3>
            <p>自定义您的偏好</p>
            <button class="btn">配置</button>
          </div>
        </div>
      </section>

      <section class="recent-activity">
        <h2>最近活动</h2>
        <div class="activity-list">
          <div class="activity-item">
            <span class="activity-icon">✓</span>
            <div class="activity-details">
              <span class="activity-title">登录成功</span>
              <span class="activity-time">2分钟前</span>
            </div>
          </div>
          <div class="activity-item">
            <span class="activity-icon">📝</span>
            <div class="activity-details">
              <span class="activity-title">更新了个人资料</span>
              <span class="activity-time">1小时前</span>
            </div>
          </div>
          <div class="activity-item">
            <span class="activity-icon">🔔</span>
            <div class="activity-details">
              <span class="activity-title">收到新消息</span>
              <span class="activity-time">3小时前</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="dashboard-footer">
      <p>© {{ currentYear }} 用户控制台 | 您的数字生活中心</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  data() {
    return {
      userName: '用户',
      currentYear: new Date().getFullYear()
    };
  },
  mounted() {
    // 这里可以添加初始化逻辑，如获取用户信息
    // this.fetchUserInfo();
  },
  methods: {
    // 示例方法
    handleCardClick(cardName) {
      console.log(`点击了 ${cardName} 卡片`);
    }
  }
};
</script>

<style scoped>
.user-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 40px;
}

.dashboard-header h1 {
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.welcome-message {
  color: #666;
  font-size: 1.2rem;
}

.dashboard-content {
  display: grid;
  gap: 30px;
}

.quick-actions {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 25px;
}

.quick-actions h2 {
  color: #333;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.action-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-color: #ddd;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
  text-align: center;
}

.card h3 {
  color: #333;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.card p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
}

.btn:hover {
  background: #0056b3;
}

.recent-activity {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 25px;
}

.recent-activity h2 {
  color: #333;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.activity-list {
  list-style: none;
  padding: 0;
}

.activity-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  font-size: 1.5rem;
  margin-right: 15px;
  color: #007bff;
}

.activity-details {
  flex: 1;
}

.activity-title {
  display: block;
  color: #333;
  font-weight: 500;
}

.activity-time {
  display: block;
  color: #666;
  font-size: 0.85rem;
}

.dashboard-footer {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  color: #666;
  font-size: 0.9rem;
}
</style>