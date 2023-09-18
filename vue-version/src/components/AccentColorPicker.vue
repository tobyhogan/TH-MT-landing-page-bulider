<script setup lang="ts">
import { ref } from "vue";
import PopoverComponent from "./modals/PopoverComponent.vue";
import { setNewAccentColor } from "@/services/theme";

const isPopoverOpen = ref(false);
const currentAccentColor = ref(getComputedStyle(document.documentElement).getPropertyValue("--color-accent"));
const currentFontAccentColor = ref(getComputedStyle(document.documentElement).getPropertyValue("--color-text-accent"));
const debounceTimer = ref<NodeJS.Timeout>();

function onColorChange(event: Event) {
    const newColor = (event.target as HTMLInputElement).value;
    setNewAccentColor(newColor);
    currentAccentColor.value = newColor;

    clearTimeout(debounceTimer.value);
    debounceTimer.value = setTimeout(() => {
        setTextColorFromCssVariable();
    }, 50);
}

function setTextColorFromCssVariable() {
    currentFontAccentColor.value = getComputedStyle(document.documentElement).getPropertyValue("--color-text-accent");
}
</script>

<template>
<button
    class="button bg-accent p-1.5 text-font-accent"
    @click="isPopoverOpen = true"
>
    <PopoverComponent
        v-if="isPopoverOpen"
        @close="isPopoverOpen = false"
    >
        <label>
            <h4 class="mb-2 text-lg font-semibold">Accent color</h4>
            <input
                id="colorPicker"
                type="color"
                name="colorPicker"
                :value="currentAccentColor"
                class="h-20 w-20 cursor-pointer rounded-lg border-0"
                @input="onColorChange($event)"
            >
        </label>
    </PopoverComponent>
    <img
        class="h-6 w-6"
        :src="'https://api.iconify.design/mdi:palette.svg?color=%23' + currentFontAccentColor.slice(1)"
        alt="palette button icon"
    >
</button>
</template>

<style scoped lang="postcss">

</style>
