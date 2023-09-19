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
<nav class=" bg-primary px-4 py-2">
    <div class="flex justify-center">

        <TextComponent
            :initial-text="'Github: https://github.io'"
            class="text-accent flex"
        ></TextComponent>

    </div>


</nav>
</template>

<style scoped lang="postcss">

</style>
