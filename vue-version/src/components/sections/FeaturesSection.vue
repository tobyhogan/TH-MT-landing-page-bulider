<script setup lang="ts">
import HeaderComponent from '../HeaderComponent.vue';
import ImageComponent from '../ImageComponent.vue';
import TextComponent from '../TextComponent.vue';

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
                <li class="h-40 flex justify-center">
                    <p class="h-full flex items-center space-x-2">
                        <img src="https://api.iconify.design/mdi:check-bold.svg?color=%23ffffff">
                        <TextComponent></TextComponent>
                    </p>
                </li>

                <li>
                    <p class="h-40 flex items-center space-x-2">
                        <img src="https://api.iconify.design/mdi:check-bold.svg?color=%23ffffff">
                        <TextComponent></TextComponent>
                    </p>
                </li>

                <li>
                    <p class="h-40 flex justify-center items-center space-x-2">
                        <img src="https://api.iconify.design/mdi:check-bold.svg?color=%23ffffff">
                        <TextComponent></TextComponent>
                    </p>
                </li>
                <li>
                    <p class="h-40 flex items-center space-x-2">
                        <img src="https://api.iconify.design/mdi:check-bold.svg?color=%23ffffff">
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
