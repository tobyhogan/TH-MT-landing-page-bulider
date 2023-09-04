<script setup lang="ts">
import ButtonComponent from "../editables/ButtonComponent.vue";
import HeaderComponent from "../editables/HeaderComponent.vue";
import TextComponent from "../editables/TextComponent.vue";

</script>

<template>
<section class="group/section relative flex min-h-[300px] text-center lg:flex-row lg:items-center lg:justify-center lg:text-left">
    <div class="flex flex-wrap justify-center">
        <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-full">
            <div class="grid items-center gap-x-6 lg:grid-cols-7">
                <div class="col-span-4 mb-10 lg:mb-0">
                    <HeaderComponent :initial-text="'For launch info, subscribe now!'"></HeaderComponent>
                </div>

                <div class="col-span-3 mb-6 flex-row md:mb-0 md:flex">
                    <div class="mb-3 w-full md:mb-0 md:mr-3 xl:w-96">
                        <!-- TODO -->
                        <!-- <InputComponent></InputComponent> -->
                        <TextComponent :initial-text="'Enter email here'"></TextComponent>
                    </div>
                    <ButtonComponent
                        class="mr-7 shrink-0"
                        :initial-text="'Subscribe'"
                    ></ButtonComponent>
                </div>
            </div>
        </div>
    </div>
    <slot />
</section>
</template>

<style scoped lang="postcss">

</style>
