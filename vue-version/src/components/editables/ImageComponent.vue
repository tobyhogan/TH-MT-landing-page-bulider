<script setup lang="ts">
import { ref } from "vue";
import ImageSelectorModal from "../modals/ImageSelectorModal.vue";
import EditButton from "./EditButton.vue";

const imageSrc = ref("https://picsum.photos/200");
const isImageSelectorOpen = ref(false);

function openImageSelector() {
    isImageSelectorOpen.value = true;
}

function accept(imageUrl: string) {
    imageSrc.value = imageUrl;
    isImageSelectorOpen.value = false;
}
</script>

<template>
<div class="group relative h-full w-full">
    <div class="flex h-full w-full items-center justify-center">
        <EditButton @toggle-edit-mode="openImageSelector()" />
        <img
            :src="imageSrc"
            class="max-h-full max-w-full cursor-pointer object-cover"
            data-remove-before-export
            alt="Image"
            @click="openImageSelector()"
        >
    </div>
    <ImageSelectorModal
        v-if="isImageSelectorOpen"
        @accept="accept"
        @close="isImageSelectorOpen = false"
    />
</div>
</template>

<style scoped lang="postcss">

</style>
