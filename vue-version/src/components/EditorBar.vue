<script setup lang="ts">
import { downloadPageAsHtml, openPreviewInNewTab } from "@/services/exportPage";

function openColorPopup() {
    window.open(window.location.href + "?colorPopup=true", "_blank");
}

function openPreview() {
    openPreviewInNewTab();
}
</script>

<template>
    <nav class="sticky top-0 left-0 w-full h-12 py-1 z-20 text-white bg-gray-700 flex flex-row justify-between px-4 text-sm"
         data-dont-export>
        <div class="flex flex-row items-center justify-between space-x-2">
            <button class="button p-1.5 hover:bg-gray-400"
                    @click="openColorPopup">
                <img class="h-6 w-6"
                     src="https://api.iconify.design/mdi:palette.svg?color=%23ffffff">
            </button>
        </div>
        <div class="flex flex-row items-center justify-between space-x-2">
            <button class="button hover:bg-gray-400"
                    @click="openPreview">Preview</button>
            <button class="button bg-indigo-600"
                    @click="downloadPageAsHtml">Download</button>
        </div>
    </nav>
</template>

<style scoped lang="postcss">

</style>
