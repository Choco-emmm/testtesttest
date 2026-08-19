<template>
  <div class="register-container">
    <h2>用户注册</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input 
          id="username" 
          v-model="username" 
          type="text" 
          placeholder="请输入用户名"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">邮箱：</label>
        <input 
          id="email" 
          v-model="email" 
          type="email" 
          placeholder="请输入邮箱"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input 
          id="password" 
          v-model="password" 
          type="password" 
          placeholder="请输入密码"
          required
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">确认密码：</label>
        <input 
          id="confirmPassword" 
          v-model="confirmPassword" 
          type="password" 
          placeholder="请再次输入密码"
          required
        />
      </div>
      <button type="submit">注册</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('密码与确认密码不一致！');
        return;
      }
      console.log('注册提交:', { 
        username: this.username, 
        email: this.email, 
        password: this.password 
      });
      // 这里可以添加实际的注册逻辑
      alert(`注册成功：用户名 ${this.username}，邮箱 ${this.email}`);
    }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.register-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #007bff;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #1e7e34;
}
</style>