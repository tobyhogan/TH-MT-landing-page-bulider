<script setup lang="ts">
import { computed } from "vue";
import ButtonComponent from "./editables/ButtonComponent.vue";
import ImageComponent from "./editables/ImageComponent.vue";
import TextComponent from "./editables/TextComponent.vue";

const { sectionVisibility } = defineProps<{
    sectionVisibility: {
        heroVisible: boolean,
        aboutVisible: boolean,
        subscribeVisible: boolean,
        featuresVisible: boolean
    },
}>();

const menuItems = computed(() => {
    const items: string[] = [];

    if (sectionVisibility.featuresVisible) {
        items.push("Features");
    }

    if (sectionVisibility.subscribeVisible) {
        items.push("Newsletter");
    }

    if (sectionVisibility.aboutVisible) {
        items.push("About");
    }

    return items;
});
</script>

<template>
<nav class="container relative mx-auto flex w-full flex-wrap items-center justify-between p-7 lg:justify-between xl:px-0">
    <div class="flex w-full flex-wrap items-center justify-between lg:w-auto">
        <a href="/">
            <span class="flex items-center space-x-2 text-2xl font-medium text-primary">
                <span class="w-14">
                    <ImageComponent></ImageComponent>
                </span>
                <span>
                    <TextComponent></TextComponent>
                </span>
            </span>
        </a>
        <button
            aria-label="Toggle Menu"
            class="ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none lg:hidden"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
        >
            <svg
                class="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
            </svg>
        </button>
    </div>
    <div class="hidden text-center lg:flex lg:items-center">
        <ul class="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            <li
                v-for="menuItem in menuItems"
                :key="menuItem"
                class="nav__item mr-3"
            >
                <a
                    class="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-200 no-underline hover:text-primary focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none"
                    href="/"
                >
                    {{ menuItem }}
                </a>
            </li>
        </ul>
    </div>
    <div class="nav__item mr-3 hidden space-x-4 lg:flex">
        <ButtonComponent></ButtonComponent>
    </div>
</nav>
</template>

<style scoped lang="postcss">

</style>
