<script setup lang="ts">
import HeaderComponent from '../HeaderComponent.vue';
import ImageComponent from '../ImageComponent.vue';
import TextComponent from '../TextComponent.vue';


</script>

<template>
<section class="flex flex-wrap h-[500px] min-h-[500px]">
  <div class="w-full flex items-start shrink-0 grow-0 basis-auto md:w-2/12 lg:w-3/12">
      <ImageComponent></ImageComponent>
  </div>

  <div class="w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12">
    <HeaderComponent></HeaderComponent>
    <TextComponent></TextComponent>
  </div>
</section>
</template>

<style scoped lang="postcss">

</style>
