<script setup lang="ts">
import PopoverComponent from "./PopoverComponent.vue";
import { SectionType } from "@/types/types";

const emits = defineEmits(["close", "accept"]);

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
    <div class="grid grid-cols-4 gap-x-4">
        <button
            class="rounded bg-primary px-4 py-2 text-white focus:outline-none"
            @click="accept(SectionType.ABOUT)"
        >
            About
        </button>
        <button
            class="rounded bg-primary px-4 py-2 text-white focus:outline-none"
            @click="accept(SectionType.FEATURES)"
        >
            Features
        </button>
        <button
            class="rounded bg-primary px-4 py-2 text-white focus:outline-none"
            @click="accept(SectionType.HERO)"
        >
            Hero
        </button>
        <button
            class="rounded bg-primary px-4 py-2 text-white focus:outline-none"
            @click="accept(SectionType.SUBSCRIBE)"
        >
            Subscribe
        </button>
    </div>
</PopoverComponent>
</template>

  <style scoped lang="postcss">

  </style>
