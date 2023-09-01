<script setup lang="ts">
import HeaderComponent from "../editables/HeaderComponent.vue";
import ImageComponent from "../editables/ImageComponent.vue";
import TextComponent from "../editables/TextComponent.vue";

</script>

<template>
<section class="h-[500px] min-h-[500px]">
    <div class="flex flex-wrap items-center">
        <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-3/12">
            <ImageComponent></ImageComponent>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
                <HeaderComponent></HeaderComponent>
                <TextComponent></TextComponent>

                <ul class="grid gap-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    <li class="flex h-40 justify-center">
                        <p class="flex h-full items-center space-x-2">
                            <img src="https://api.iconify.design/mdi:check-bold.svg?color=%23ffffff" alt="list bullet icon">
                            <TextComponent></TextComponent>
                        </p>
                    </li>

                    <li>
                        <p class="flex h-40 items-center space-x-2">
                            <img src="https://api.iconify.design/mdi:check-bold.svg?color=%23ffffff" alt="list bullet icon">
                            <TextComponent></TextComponent>
                        </p>
                    </li>

                    <li>
                        <p class="flex h-40 items-center justify-center space-x-2">
                            <img src="https://api.iconify.design/mdi:check-bold.svg?color=%23ffffff" alt="list bullet icon">
                            <TextComponent></TextComponent>
                        </p>
                    </li>
                    <li>
                        <p class="flex h-40 items-center space-x-2">
                            <img src="https://api.iconify.design/mdi:check-bold.svg?color=%23ffffff" alt="list bullet icon">
                            <TextComponent></TextComponent>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped lang="postcss">

</style>
