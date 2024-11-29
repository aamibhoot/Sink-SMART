<script setup>
import { useRoute } from 'vue-router'; // Import the route composable

const route = useRoute(); // Get the current route
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
