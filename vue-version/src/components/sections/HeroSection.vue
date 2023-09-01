<script setup lang="ts">
import ButtonComponent from "../editables/ButtonComponent.vue";
import HeaderComponent from "../editables/HeaderComponent.vue";
import ImageComponent from "../editables/ImageComponent.vue";
</script>

<template>
<section class="group relative h-[300px] min-h-[300px] overflow-hidden">
    <ImageComponent class="absolute inset-0 object-cover object-center opacity-40"></ImageComponent>
    <div class="absolute inset-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex h-full items-center justify-center">
            <div class="flex flex-col space-y-16 px-6 text-center text-white md:px-12">
                <HeaderComponent></HeaderComponent>
                <ButtonComponent></ButtonComponent>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped lang="postcss">

</style>
