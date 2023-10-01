<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import supabase from "@/supabaseClient";

const htmlContent = ref("");
const route = useRoute();
const pageName = ref(route.params.pageName.toString().toLowerCase());

onMounted(() => {
    const { data } = supabase.storage.from("landing-pages").getPublicUrl(pageName.value + ".html");

    htmlContent.value = data.publicUrl;
});
</script>

<template>
<div class="h-screen w-screen">
    <div v-html="htmlContent"></div>
</div>
</template>

<style scoped lang="postcss">
</style>
