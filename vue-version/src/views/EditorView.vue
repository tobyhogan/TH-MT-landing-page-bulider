<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import EditorBar from "@/components/EditorBar.vue";
</script>

<template>
  <EditorBar></EditorBar>
  <div class="w-full h-[calc(100vh-48px)] overflow-y-auto">
    <NavbarComponent></NavbarComponent>
    <main class="h-screen">
      <div class="container flex flex-wrap p-8 mx-auto xl:px-0">
          <div class="flex items-center w-full lg:w-1/2">
            <div class="max-w-2xl mb-8">
              <HeaderComponent></HeaderComponent>
              <p>
                <TextComponent></TextComponent>
              </p>
              <div class="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <ButtonComponent></ButtonComponent>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center w-full lg:w-1/2 h-[500px]">
            <ImageComponent></ImageComponent>
          </div>
        </div>
    </main>
  </div>
</template>
