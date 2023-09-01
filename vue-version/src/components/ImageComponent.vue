<script setup lang="ts">
import { ref } from "vue";
import EditButton from "./EditButton.vue";
import ImageSelectorModal from "./modals/ImageSelectorModal.vue";

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
        <EditButton @toggleEditMode="openImageSelector()" />
        <img
            :src="imageSrc"
            class="max-h-full max-w-full cursor-pointer object-cover"
            data-remove-before-export
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
