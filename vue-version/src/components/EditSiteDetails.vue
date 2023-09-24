<script setup lang="ts">
import { ref } from "vue";
import PopoverComponent from "./modals/PopoverComponent.vue";

const isPopoverOpen = ref(false);

const { initialText } = defineProps<{
  initialText: string,
}>();

const editedText = ref(initialText);

function closePopover() {
    isPopoverOpen.value = false;
}

function updateSiteDetails() {
    document.title = editedText.value;

    closePopover();
}

function handleFileUpload() {}
</script>

<template>
<button
    class="button bg-grey p-1.5 text-font-accent"
    data-dont-export
    @click="isPopoverOpen = true"
>
    Edit Site Details
    <PopoverComponent
        v-if="isPopoverOpen"
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
                <input
                    type="file"
                    class="rounded-md border p-2"
                    @change="handleFileUpload()"
                >
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
