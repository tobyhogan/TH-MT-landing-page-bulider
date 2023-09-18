<script setup lang="ts">
import { RouterView } from "vue-router";

document.documentElement.style.setProperty("--color-primary", "#6366f1");
document.documentElement.style.setProperty("--color-accent", "#6366f1");
document.documentElement.style.setProperty("--color-background", "#111827");
document.documentElement.style.setProperty("--color-text", "#f3f4f6");
document.documentElement.style.setProperty("--color-text-accent", "#f3f4f6");
document.documentElement.style.setProperty("--dark-mode", "true");
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
    @apply bg-background w-screen h-screen overflow-hidden;
}

</style>
