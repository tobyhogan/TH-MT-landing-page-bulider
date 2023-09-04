<script setup lang="ts">
import { ref, watchEffect } from "vue";
import ImageSelectorModal from "../modals/ImageSelectorModal.vue";
import EditButton from "./EditButton.vue";

const { initialImageUrl = "https://picsum.photos/200", alignment = "center", edit = false } = defineProps<{
    initialImageUrl?: string,
    alignment?: "start" | "center" | "end",
    edit?: boolean,
}>();

const imageSrc = ref(initialImageUrl);
const isImageSelectorOpen = ref(false);
const imageStyle = ref({
    "align-items": alignment === "center" ? alignment : "flex-" + alignment,
});

watchEffect(() => {
    if (edit === true) {
        openImageSelector();
    }
});

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
    <div
        class="items flex h-full w-full justify-center"
        :style="imageStyle"
    >
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
