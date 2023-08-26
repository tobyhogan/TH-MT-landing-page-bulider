<script setup lang="ts">
import { ref } from 'vue';
import EditButton from './EditButton.vue';
import ImageSelectorModal from './modals/ImageSelectorModal.vue';

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
    <div class="group relative cursor-pointer">
        <div>
            <EditButton @toggleEditMode="openImageSelector()"></EditButton>
            <img
                @click="openImageSelector()"
                :src="imageSrc"
                class="object-cover">
        </div>
        <ImageSelectorModal v-if="isImageSelectorOpen"
                            @accept="accept"
                            @close="isImageSelectorOpen = false"></ImageSelectorModal>
    </div>
</template>

<style scoped lang="postcss">

</style>
