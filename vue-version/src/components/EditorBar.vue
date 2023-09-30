<script setup lang="ts">
import AccentColorPicker from "./AccentColorPicker.vue";
import ThemeChanger from "./ThemeChanger.vue";
import EditSiteDetails from "./EditSiteDetails.vue";
import launch from '@/functions/hosting-auth.ts';
import {
    downloadPageAsHtml,
    openPreviewInNewTab
} from "@/services/exportPage";

function openPreview() {
    openPreviewInNewTab();
}
</script>

<template>
<nav
    class="sticky left-0 top-0 z-20 flex h-12 w-full flex-row justify-between border-b-2 border-white px-4 py-1 text-sm text-white"
    style="background-color: rgb(27, 27, 27);"
    data-dont-export
>
    <EditSiteDetails
        :initial-text="'Get Started'"
    >
    </EditSiteDetails>
    <div class="flex flex-row items-center space-x-2">
        <!-- <a
            href="https://validator.m-winkler.at"
            class="button bg-transparent p-1.5 hover:bg-gray-500"
        >
            <img
                class="h-6 w-6"
                src="https://api.iconify.design/mdi:home.svg?color=%23ffffff"
                alt="home button icon"
            />
        </a>
        <a
            href="https://validator.m-winkler.at/profile"
            class="button bg-transparent p-1.5 hover:bg-gray-500"
        >
            <img
                class="h-6 w-6"
                src="https://api.iconify.design/mdi:account.svg?color=%23ffffff"
                alt="home button icon"
            />
        </a> -->
    </div>
    <div class="flex flex-row space-x-2">
        <ThemeChanger></ThemeChanger>
        <AccentColorPicker></AccentColorPicker>
    </div>
    <div class="flex flex-row items-center justify-between space-x-2">
        <button
            class="button hover:bg-gray-400"
            @click="openPreview()"
        >
            Preview
        </button>
        <button
            class="button bg-accent text-font-accent hover:opacity-80"
            @click="downloadPageAsHtml()"
        >
            Download
        </button>
        <button
            class="button bg-accent text-font-accent hover:opacity-80"
            @click="launch()"
        >
            Launch
        </button>
    </div>
</nav>
</template>

<style scoped lang="postcss">

</style>
