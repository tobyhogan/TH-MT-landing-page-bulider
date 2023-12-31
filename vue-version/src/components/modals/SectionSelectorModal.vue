<script setup lang="ts">
import { computed } from "vue";
import PopoverComponent from "./PopoverComponent.vue";
import { SectionType } from "@/types/types";

const { visibleSections } = defineProps<{
    visibleSections: SectionType[]
}>();
const emits = defineEmits(["close", "accept"]);

const gridCols = computed(() => {
    const cols = 4 - visibleSections.length;

    return { "grid-template-columns": `repeat(${cols}, minmax(0, 1fr))` };
});

function closePopover() {
    emits("close");
}

function accept(sectionType: SectionType) {
    emits("accept", sectionType);
}
</script>

<template>
<PopoverComponent
    position="TOP"
    @close="closePopover()"
>
    <h3 class="mb-3 text-lg font-bold">
        Add section
    </h3>
    <div
        class="grid grid-cols-4 gap-x-4"
        :style="gridCols"
    >
        <button
            v-if="!visibleSections.includes(SectionType.ABOUT)"
            class="rounded bg-accent px-4 py-2 text-white focus:outline-none"
            @click="accept(SectionType.ABOUT)"
        >
            About
        </button>
        <button
            v-if="!visibleSections.includes(SectionType.FEATURES)"
            class="rounded bg-accent px-4 py-2 text-white focus:outline-none"
            @click="accept(SectionType.FEATURES)"
        >
            Features
        </button>
        <button
            v-if="!visibleSections.includes(SectionType.HERO)"
            class="rounded bg-accent px-4 py-2 text-white focus:outline-none"
            @click="accept(SectionType.HERO)"
        >
            Hero
        </button>
        <button
            v-if="!visibleSections.includes(SectionType.SUBSCRIBE)"
            class="rounded bg-accent px-4 py-2 text-white focus:outline-none"
            @click="accept(SectionType.SUBSCRIBE)"
        >
            Subscribe
        </button>
    </div>
</PopoverComponent>
</template>

  <style scoped lang="postcss">

  </style>
