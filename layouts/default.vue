<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const router = useRouter();

onMounted(() => {
  if (route.path === '/') {
    window.location.href = 'https://smartbd.com';
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
