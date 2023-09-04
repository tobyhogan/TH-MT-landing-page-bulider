<script setup lang="ts">
import { ref } from "vue";
import ButtonComponent from "../editables/ButtonComponent.vue";
import HeaderComponent from "../editables/HeaderComponent.vue";
import ImageComponent from "../editables/ImageComponent.vue";
import EditButton from "../editables/EditButton.vue";

const edit = ref(false);

function triggerBackgroundImageEdit() {
    edit.value = true;

    setTimeout(() => {
        edit.value = false;
    }, 1000);
}
</script>

<template>
<section class="group/section relative min-h-[500px]">
    <ImageComponent
        initial-image-url="https://mdbcdn.b-cdn.net/img/new/slides/146.webp"
        class="absolute inset-0 object-cover object-center opacity-40"
        :edit="edit"
    ></ImageComponent>
    <div class="group absolute inset-0 h-full w-full bg-fixed">
        <div class="flex h-full items-center justify-center">
            <div class="flex flex-col space-y-16 px-6 text-center text-white md:px-12">
                <HeaderComponent :initial-text="'My Cool Idea'"></HeaderComponent>
                <ButtonComponent :initial-text="'Get Started'"></ButtonComponent>
                <EditButton @toggle-edit-mode="triggerBackgroundImageEdit()"></EditButton>
            </div>
        </div>
    </div>
    <slot />
</section>
</template>

<style scoped lang="postcss">

</style>
