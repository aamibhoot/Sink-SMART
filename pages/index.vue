<template>
  <div class="redirect-container">
    <img 
      src="https://smartbd.com/wp-content/uploads/2023/05/smart-png-logo-02-1.png" 
      alt="Smart Logo" 
      class="logo"
    />
    <p class="redirect-text">Redirecting...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    window.location.href = 'https://www.smartbd.com';
  }, 3000); // Redirect after 3 seconds
});
</script>

<style>
.redirect-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Optional background color */
  margin: 0;
}

.logo {
  width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.redirect-text {
  font-size: 1.5rem;
  color: #2E366C; /* Your primary impact color */
  text-align: center;
}
</style>
