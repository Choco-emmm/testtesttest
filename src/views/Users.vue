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
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="viewUser(user)" class="btn-view">查看详情</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div v-if="loading" class="loading">
      <p>加载中...</p>
    </div>
    
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      users: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        // 模拟 API 调用
        this.loading = true;
        this.error = null;
        
        // 模拟延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 模拟返回的用户数据
        const mockUsers = [
          { id: '1', name: '张三', email: 'zhangsan@example.com' },
          { id: '2', name: '李四', email: 'lisi@example.com' },
          { id: '3', name: '王五', email: 'wangwu@example.com' },
          { id: '4', name: '赵六', email: 'zhaoliu@example.com' }
        ];
        
        this.users = mockUsers;
      } catch (err) {
        this.error = '获取用户列表失败，请重试';
        console.error('Error fetching users:', err);
      } finally {
        this.loading = false;
      }
    },
    
    viewUser(user) {
      alert(`查看用户: ${user.name} (ID: ${user.id})`);
    }
  }
}
</script>

<style scoped>
.users-container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.users-container h1 {
  color: #333;
  margin-bottom: 20px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.user-table th, .user-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.user-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.user-table tr:hover {
  background-color: #f9f9f9;
}

.btn-view {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-view:hover {
  background-color: #45a049;
}

.loading, .error {
  margin-top: 20px;
  padding: 15px;
  border-radius: 4px;
}

.loading {
  background-color: #e7f3ff;
  color: #333;
}

.error {
  background-color: #ffebee;
  color: #d32f2f;
}
</style>