<template>
  <div class="users-container">
    <h1>用户列表</h1>
    <div class="users-table">
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>邮箱</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      loading: true,
      error: null
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        // 尝试连接本地后端 API
        const response = await axios.get('/users');
        this.users = response.data;
      } catch (err) {
        // 如果本地 API 不可用，使用模拟数据
        console.warn('无法连接到后端 API，使用模拟数据', err);
        this.users = [
          { id: 1, name: '张三', email: 'zhangsan@example.com' },
          { id: 2, name: '李四', email: 'lisi@example.com' }
        ];
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.users-container {
  padding: 20px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-table th, .user-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.user-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.loading, .error {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
}

.loading {
  background-color: #e7f3ff;
  color: #0056b3;
}

.error {
  background-color: #ffebee;
  color: #d32f2f;
}
</style>