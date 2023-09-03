<script setup lang="ts">
import HeaderComponent from "../editables/HeaderComponent.vue";
import ImageComponent from "../editables/ImageComponent.vue";
import TextComponent from "../editables/TextComponent.vue";

</script>

<template>
<section class="group/section relative flex h-[500px] min-h-[500px] flex-wrap">
    <div class="flex w-full shrink-0 grow-0 basis-auto items-start md:w-2/12 lg:w-3/12">
        <ImageComponent></ImageComponent>
    </div>

    <div class="w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12">
        <HeaderComponent :initial-text="'Your Name'"></HeaderComponent>
        <TextComponent :initial-text="'Here you can tell everyone, how awesome you are...'"></TextComponent>
    </div>
    <slot />
</section>
</template>

<style scoped lang="postcss">

</style>
