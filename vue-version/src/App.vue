<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { addPageView } from "./services/analytics";

document.documentElement.style.setProperty("--color-primary", "#6366f1");
document.documentElement.style.setProperty("--color-text", "#f3f4f6");

onMounted(() => {
    addPageView();
});
</script>

<template>
<div class="h-screen w-screen overflow-auto">
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
