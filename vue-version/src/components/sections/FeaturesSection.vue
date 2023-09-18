<script setup lang="ts">
import HeaderComponent from "../editables/HeaderComponent.vue";
import ImageComponent from "../editables/ImageComponent.vue";
import TextComponent from "../editables/TextComponent.vue";

</script>

<template>
<section
    id="features"
    class="group/section relative h-[600px] min-h-[500px]"
>
    <div class="flex h-full flex-wrap items-start justify-center">
        <div class="block w-full shrink-0 grow-0 basis-auto pt-6 lg:flex lg:h-full lg:w-6/12 xl:w-3/12">
            <ImageComponent alignment="start"></ImageComponent>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto px-6 md:px-12 lg:w-6/12 xl:w-8/12">
            <HeaderComponent :initial-text="'Why my idea is the best'"></HeaderComponent>
            <!-- <TextComponent :initial-text="'More description'"></TextComponent> -->

            <ul class="mt-6 flex flex-col flex-wrap">
                <li class="flex justify-start">
                    <p class="flex items-center space-x-2">
                        <img
                            src="https://api.iconify.design/mdi:checkbox-marked.svg?color=%23ffffff"
                            alt="list bullet icon"
                        >
                        <TextComponent :initial-text="'Looks good'"></TextComponent>
                    </p>
                </li>
                <li class="flex justify-start">
                    <p class="flex items-center space-x-2">
                        <img
                            src="https://api.iconify.design/mdi:checkbox-marked.svg?color=%23ffffff"
                            alt="list bullet icon"
                        >
                        <TextComponent :initial-text="'Works well'"></TextComponent>
                    </p>
                </li>
                <li class="flex justify-start">
                    <p class="flex items-center space-x-2">
                        <img
                            src="https://api.iconify.design/mdi:checkbox-marked.svg?color=%23ffffff"
                            alt="list bullet icon"
                        >
                        <TextComponent :initial-text="'Reads your mind'"></TextComponent>
                    </p>
                </li>
                <li class="flex justify-start">
                    <p class="flex items-center space-x-2">
                        <img
                            src="https://api.iconify.design/mdi:checkbox-marked.svg?color=%23ffffff"
                            alt="list bullet icon"
                        >
                        <TextComponent :initial-text="'Can predict the future'"></TextComponent>
                    </p>
                </li>
            </ul>
        </div>
    </div>
    <slot />
</section>
</template>

<style scoped lang="postcss">

</style>
