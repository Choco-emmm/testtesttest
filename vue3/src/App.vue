<template>
  <div class="app-container">
    <div class="nav-buttons">
      <button @click="showLogin">登录</button>
      <button @click="showRegister">注册</button>
    </div>
    <div class="content">
      <Login v-if="currentView === 'login'" />
      <Register v-if="currentView === 'register'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

const currentView = ref('login');

const showLogin = () => {
  currentView.value = 'login';
};

const showRegister = () => {
  currentView.value = 'register';
};
</script>