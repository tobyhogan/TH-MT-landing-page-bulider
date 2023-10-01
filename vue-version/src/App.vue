<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { setNewTheme } from "@/services/theme";

document.documentElement.style.setProperty("--color-primary", "#1a6070"); // color that compliments bg e.g. header
document.documentElement.style.setProperty("--color-accent", "#6366f1"); // //color for highilghted buttons
document.documentElement.style.setProperty("--accent-gradient-1", "#111129");
document.documentElement.style.setProperty("--accent-gradient-2", "#0451b8");
document.documentElement.style.setProperty("--accent-gradient-3", "#c7ddf2");
document.documentElement.style.setProperty("--color-background", "#111827"); // majority of the page's color
document.documentElement.style.setProperty("--color-text", "#dfeaed"); // color for majority of text
document.documentElement.style.setProperty("--color-title-text", "#1bbf41");
document.documentElement.style.setProperty("--color-text-accent", "#f3f4f6"); // color for text on highlighted buttons
document.documentElement.style.setProperty("--dark-mode", "true");


const isDarkTheme = ref(getComputedStyle(document.documentElement).getPropertyValue("--dark-mode") === "true");
isDarkTheme.value = true;


setNewTheme("dark");


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
