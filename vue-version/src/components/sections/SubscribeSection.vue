<script setup lang="ts">
import ButtonComponent from "../editables/ButtonComponent.vue";
import HeaderComponent from "../editables/HeaderComponent.vue";
import TextComponent from "../editables/TextComponent.vue";

</script>

<template>
<section class="h-[300px] min-h-[300px] text-center lg:text-left">
    <div class="flex flex-wrap justify-center">
        <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
            <div class="grid items-center gap-x-6 lg:grid-cols-2">
                <div class="mb-10 lg:mb-0">
                    <HeaderComponent></HeaderComponent>
                </div>

                <div class="mb-6 flex-row md:mb-0 md:flex">
                    <div class="relative mb-3 w-full md:mb-0 md:mr-3 xl:w-96">
                        <!-- TODO -->
                        <!-- <InputComponent></InputComponent> -->
                        <TextComponent></TextComponent>
                    </div>
                    <ButtonComponent></ButtonComponent>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped lang="postcss">

</style>
