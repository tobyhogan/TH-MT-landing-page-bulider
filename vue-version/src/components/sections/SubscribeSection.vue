<script setup lang="ts">
import ButtonComponent from '../ButtonComponent.vue';
import HeaderComponent from '../HeaderComponent.vue';
import TextComponent from '../TextComponent.vue';


</script>

<template>
<section class="mb-32 text-center lg:text-left">
    <div class="flex flex-wrap justify-center">
      <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
        <div class="grid items-center gap-x-6 lg:grid-cols-2">
          <div class="mb-10 lg:mb-0">
            <HeaderComponent></HeaderComponent>
          </div>

          <div class="mb-6 flex-row md:mb-0 md:flex">
            <div class="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96">
                <!-- TODO -->
                <!-- <InputComponent></InputComponent> -->
                <TextComponent></TextComponent>
            </div>
            <ButtonComponent></ButtonComponent>
            <!-- <button type="submit"
              class="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init data-te-ripple-color="light">
              Subscribe
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
