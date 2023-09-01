<script setup lang="ts">
import ButtonComponent from '../editables/ButtonComponent.vue';
import HeaderComponent from '../editables/HeaderComponent.vue';
import ImageComponent from '../editables/ImageComponent.vue';
</script>

<template>
  <section class="relative overflow-hidden h-[500px] min-h-[500px] group">
    <ImageComponent class="absolute inset-0 object-cover object-center opacity-40"></ImageComponent>
    <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12 flex flex-col space-y-16">
          <HeaderComponent></HeaderComponent>
          <ButtonComponent></ButtonComponent>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
