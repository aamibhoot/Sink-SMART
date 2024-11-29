<script setup>
import { useRouter, useRoute } from 'vue-router'; // Import router and route composables
import { onMounted } from 'vue';

const route = useRoute();
const router = useRouter();

onMounted(() => {
  if (route.path === '/') {
    window.location.href = 'https://smartbd.com'; // Redirect to external URL
  }
});
</script>

<template>
  <main v-if="route.path !== '/'" class="flex flex-col min-h-screen">
    <LayoutsHeader />
    <section class="flex flex-1">
      <div class="container mx-auto">
        <slot />
      </div>
    </section>
    <LayoutsFooter />
  </main>
</template>
