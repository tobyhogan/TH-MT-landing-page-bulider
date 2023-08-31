<script setup lang="ts">
import { downloadPageAsHtml, openPreviewInNewTab } from "@/services/exportPage";
import PopoverComponent from "./modals/PopoverComponent.vue";
import { ref } from "vue";
import { setNewThemeColor } from "@/services/theme";

const isPopoverOpen = ref(false);
const currentAccentColor = ref(getComputedStyle(document.documentElement).getPropertyValue("--color-primary"))

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
    <nav class="sticky top-0 left-0 w-full h-12 py-1 z-20 text-white bg-gray-700 flex flex-row justify-between px-4 text-sm"
         data-dont-export>
        <div class="flex flex-row items-center justify-between space-x-2">
            <button class="button p-1.5 hover:bg-gray-400"
                    @click="isPopoverOpen = true">
                <PopoverComponent v-if="isPopoverOpen"
                                  @close="isPopoverOpen = false">
                    <label>
                        <h4 class="text-lg font-semibold mb-2">Accent color</h4>
                        <input type="color" id="colorPicker" name="colorPicker" :value="currentAccentColor"
                               @input="onColorChange($event)"
                               class="w-20 h-20 cursor-pointer rounded-lg border-0">                        
                    </label>
                </PopoverComponent>
                <img class="h-6 w-6"
                     src="https://api.iconify.design/mdi:palette.svg?color=%23ffffff">
            </button>
        </div>
        <div class="flex flex-row items-center justify-between space-x-2">
            <button class="button hover:bg-gray-400"
                    @click="openPreview()">Preview</button>
            <button class="button bg-primary hover:opacity-80 text-font"
                    @click="downloadPageAsHtml()">Download</button>
        </div>
    </nav>
</template>

<style scoped lang="postcss">

</style>
