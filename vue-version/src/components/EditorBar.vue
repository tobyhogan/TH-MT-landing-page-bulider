<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import AccentColorPicker from "./AccentColorPicker.vue";
import ThemeChanger from "./ThemeChanger.vue";
import EditSiteDetails from "./EditSiteDetails.vue";
import {
    downloadPageAsHtml,
    openPreviewInNewTab,
    uploadPageToSupabase
} from "@/services/exportPage";

const pageName = ref(document.title);
const toast = useToast();

async function uploadPage() {
    const uploadSuccessful = await uploadPageToSupabase(pageName.value);

    if (uploadSuccessful === true) {
        toast.success("Page uploaded successfully!");
    } else {
        toast.success("Page upload failed!");
    }
}
</script>

<template>
<nav
    class="sticky left-0 top-0 z-20 flex h-12 w-full flex-row justify-between border-b-2 border-white px-4 py-1 text-sm text-white"
    style="background-color: rgb(27, 27, 27);"
    data-dont-export
>
    <div class="flex flex-row space-x-2">
        <EditSiteDetails></EditSiteDetails>
        <ThemeChanger></ThemeChanger>
        <AccentColorPicker></AccentColorPicker>
    </div>
    <div class="flex flex-row items-center justify-between space-x-2">
        <button
            class="button hover:bg-gray-400"
            @click="openPreviewInNewTab()"
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
            @click="uploadPage()"
        >
            Publish
        </button>
    </div>
</nav>
</template>

<style scoped lang="postcss">

</style>
