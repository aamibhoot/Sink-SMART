<script setup>
import { useRoute } from 'vue-router'; // Import route composable
import { onMounted, ref } from 'vue';

const route = useRoute();
const isRedirecting = ref(false);

onMounted(() => {
  if (route.path === '/') {
    isRedirecting.value = true; // Show the message
    setTimeout(() => {
      window.location.href = 'https://smartbd.com'; // Redirect after 0 seconds
    }, 0);
  }
});
</script>

<template>
  <main v-if="!isRedirecting" class="flex flex-col min-h-screen">
    <LayoutsHeader />
    <section class="flex flex-1">
      <div class="container mx-auto">
        <slot />
      </div>
    </section>
    <LayoutsFooter />
  </main>
  <div v-else class="flex items-center justify-center min-h-screen bg-gray-100 text-center text-lg font-semibold text-gray-700">
    Redirecting to Bangladesh's largest IT distribution company...
  </div>
</template>
