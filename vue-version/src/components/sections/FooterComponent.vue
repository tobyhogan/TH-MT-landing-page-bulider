<script setup lang="ts">
import { computed } from "vue";
import ButtonComponent from "../editables/ButtonComponent.vue";
import ImageComponent from "../editables/ImageComponent.vue";
import TextComponent from "../editables/TextComponent.vue";
import { SectionType } from "@/types/types";

const { visibleSections } = defineProps<{
    visibleSections: SectionType[]
}>();

const menuItems = computed(() => {
    const items: {key: number, name: string, href: string}[] = [];

    visibleSections.forEach((section, index) => {
        switch (section) {
        case SectionType.ABOUT:
            items.push({ key: index, name: "About", href: "#about" });
            break;
        case SectionType.FEATURES:
            items.push({ key: index, name: "Features", href: "#features" });
            break;
        case SectionType.HERO:
            items.push({ key: index, name: "Hero", href: "#hero" });
            break;
        case SectionType.SUBSCRIBE:
            items.push({ key: index, name: "Subscribe", href: "#subscribe" });
            break;

        default:
            break;
        }
    });

    return items;
});

function preventDefault(event?: MouseEvent) {
    event?.preventDefault();
}
</script>

<template>
<nav class="relative mx-0 flex w-full flex-wrap items-center justify-between bg-primary px-4 py-2 lg:justify-between xl:px-10">
    <div class="flex w-full flex-wrap items-center justify-between lg:w-auto">
        <a
            href="/"
            data-remove-before-export
            @click="preventDefault"
        >
            <span class="flex items-center space-x-6 text-2xl font-medium">
                <span class="w-14">
                    <ImageComponent></ImageComponent>
                </span>
                <span>
                    <TextComponent
                        :initial-text="'     Footer'"
                        class="text-primary"
                    ></TextComponent>
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
                :key="menuItem.key"
                class="nav__item mr-3"
            >
                <a
                    class="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-200 no-underline focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none"
                    :href="menuItem.href"
                    data-remove-before-export
                    @click="preventDefault($event)"
                >
                    <TextComponent
                        :initial-text="menuItem.name"
                        class="hover:text-primary"
                    ></TextComponent>
                </a>
            </li>
        </ul>
    </div>
    <div class="nav__item mr-3 hidden space-x-4 lg:flex">
        <ButtonComponent :initial-text="'Get Started'"></ButtonComponent>
    </div>
</nav>
</template>

<style scoped lang="postcss">

</style>
