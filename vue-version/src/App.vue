<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen h-screen overflow-auto">
    <RouterView />
  </div>
</template>

<style lang="postcss">
#app {
    @apply text-gray-100 subpixel-antialiased w-screen h-screen;
}

html,
body {
    @apply bg-gray-900 w-screen h-screen overflow-hidden;
}
</style>
