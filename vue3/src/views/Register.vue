<template>
  <div class="register-container">
    <h2>用户注册</h2>
    <form @submit.prevent="handleRegister" class="register-form">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input 
          type="text" 
          id="username" 
          v-model="formData.username" 
          placeholder="请输入用户名"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="email">邮箱：</label>
        <input 
          type="email" 
          id="email" 
          v-model="formData.email" 
          placeholder="请输入邮箱地址"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="password">密码：</label>
        <input 
          type="password" 
          id="password" 
          v-model="formData.password" 
          placeholder="请输入密码"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="confirmPassword">确认密码：</label>
        <input 
          type="password" 
          id="confirmPassword" 
          v-model="formData.confirmPassword" 
          placeholder="请再次输入密码"
          required
        />
      </div>
      
      <button type="submit" class="register-btn">注册</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    handleRegister() {
      // 简单的表单验证
      if (this.formData.password !== this.formData.confirmPassword) {
        alert('密码与确认密码不一致！');
        return;
      }
      
      // 这里可以添加注册逻辑
      console.log('注册数据:', this.formData);
      alert('注册成功！（模拟）');
    }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.register-container h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.register-form .form-group {
  margin-bottom: 20px;
}

.register-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.register-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.register-form input:focus {
  outline: none;
  border-color: #4CAF50;
}

.register-btn {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.register-btn:hover {
  background-color: #45a049;
}
</style>