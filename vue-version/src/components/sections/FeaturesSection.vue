<script setup lang="ts">
import HeaderComponent from "../editables/HeaderComponent.vue";
import ImageComponent from "../editables/ImageComponent.vue";
import TextComponent from "../editables/TextComponent.vue";
import ExtendedTextComponent from "../editables/ExtendedTextComponent.vue";

</script>

<template>
<section
    id="features"
    class="group/section relative h-[600px] min-h-[500px]"
>
    <div class="flex h-full flex-wrap items-start justify-center">
        <div class="block w-full shrink-0 grow-0 basis-auto pt-6 lg:flex lg:h-full lg:w-6/12 xl:w-3/12">
            <ImageComponent alignment="start"></ImageComponent>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto px-6 md:px-12 lg:w-6/12 xl:w-8/12">
            <HeaderComponent :initial-text="'Why my idea is the best'"></HeaderComponent>
            <!-- <TextComponent :initial-text="'More description'"></TextComponent> -->

            <ExtendedTextComponent :initial-text="'&bull; It\'s the best;'"></ExtendedTextComponent>
        </div>
    </div>
    <slot />
</section>
</template>

<style scoped lang="postcss">

</style>
