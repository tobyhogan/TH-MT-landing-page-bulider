<script setup lang="ts">
import { ref } from "vue";
import PopoverComponent from "./modals/PopoverComponent.vue";
import ImageComponent from "./editables/ImageComponent.vue";

const isPopoverOpen = ref(false);

const { initialText } = defineProps<{
  initialText: string,
}>();

const editedText = ref(initialText);

function updateSiteDetails() {
    document.title = editedText.value;

    isPopoverOpen.value = false;
}

function updateFavicon(imageUrl: string) {
    const faviconLink = document.getElementById("favicon") as HTMLLinkElement;

    faviconLink.href = imageUrl;
}
</script>

<template>
<button
    class="button bg-grey p-1.5 text-font-accent"
    data-dont-export
    @click.self="isPopoverOpen = !isPopoverOpen"
>
    <img
        src="https://api.iconify.design/mdi:settings.svg?color=%23ffffff"
        alt="settings icon"
        class="h-6 w-6"
        @click.self="isPopoverOpen = !isPopoverOpen"
    >
    <PopoverComponent
        v-if="isPopoverOpen"
        class="ml-36"
        @close="isPopoverOpen = false"
    >
        <label class="mb-2 block">
            Site Name
            <input
                v-model="editedText"
                class="mb-2 w-full rounded-md border p-2"
            >
        </label>
        <label class="mb-2 block">
            Favicon
            <div>
                <label class="mb-1 block font-medium">
                    Upload Image (recommended 240x240px)

                </label>
                <ImageComponent @image-selected="updateFavicon"></ImageComponent>
            </div>
        </label>

        <div class=" flex h-full justify-center">
            <button
                class="rounded-md bg-accent px-4 py-2 text-font-accent hover:opacity-80"
                @click="updateSiteDetails()"
            >
                Save
            </button>
        </div>
    </PopoverComponent>
</button>
</template>

<style scoped lang="postcss">

</style>
