<script setup lang="ts">
import { ref } from "vue";
import PopoverComponent from "./modals/PopoverComponent.vue";
import {
    downloadPageAsHtml,
    openPreviewInNewTab
} from "@/services/exportPage";
import { setNewThemeColor } from "@/services/theme";

const isPopoverOpen = ref(false);
const currentAccentColor = ref(getComputedStyle(document.documentElement).getPropertyValue("--color-primary"));

function openPreview() {
    openPreviewInNewTab();
}

function onColorChange(event: Event) {
    const newColor = (event.target as HTMLInputElement).value;
    setNewThemeColor(newColor);
    currentAccentColor.value = newColor;
}
</script>

<template>
<nav
    class="sticky left-0 top-0 z-20 flex h-12 w-full flex-row justify-between border-b-2 border-white bg-black px-4 py-1 text-sm text-white"
    data-dont-export
>
    
    <button
        class="button p-1.5 hover:bg-gray-400"
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
            src="https://api.iconify.design/mdi:palette.svg?color=%23ffffff"
            alt="palette button icon"
        >
    </button>
    <div class="flex flex-row items-center justify-between space-x-2">
        <button
            class="button hover:bg-gray-400"
            @click="openPreview()"
        >
            Preview
        </button>
        <button
            class="button bg-primary text-font hover:opacity-80"
            @click="downloadPageAsHtml()"
        >
            Download
        </button>
    </div>
</nav>
</template>

<style scoped lang="postcss">

</style>
