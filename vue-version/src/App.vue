<script setup lang="ts">
import { RouterView } from "vue-router";

document.documentElement.style.setProperty("--color-primary", "#1a6070");
document.documentElement.style.setProperty("--color-accent", "#6366f1");
document.documentElement.style.setProperty("--color-background", "#111827");
document.documentElement.style.setProperty("--color-text", "#dfeaed");
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
    @apply text-font subpixel-antialiased w-screen h-screen;
}

html,
body {
    @apply bg-background w-screen h-screen overflow-hidden;
}

</style>
