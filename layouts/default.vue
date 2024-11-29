<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();

onMounted(() => {
  if (route.path === '/') {
    // Create a message element
    const messageDiv = document.createElement('div');
    messageDiv.textContent = "Redirecting to Bangladesh's largest IT distribution company...";
    messageDiv.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f3f4f6; /* Light gray */
      text-align: center;
      font-size: 1.125rem; /* Text-lg */
      font-weight: 600; /* Font-semibold */
      color: #374151; /* Gray-700 */
    `;
    
    // Append the message to the body
    document.body.appendChild(messageDiv);

    // Redirect after a short delay
    setTimeout(() => {
      window.location.href = 'https://smartbd.com';
    }, 0);
  }
});
</script>

<template>
  <main class="flex flex-col min-h-screen">
    <LayoutsHeader />
    <section class="flex flex-1">
      <div class="container mx-auto">
        <slot />
      </div>
    </section>
    <LayoutsFooter />
  </main>
</template>
