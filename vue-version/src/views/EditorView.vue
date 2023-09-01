<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import EditorBar from "@/components/EditorBar.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import SubscribeSection from "@/components/sections/SubscribeSection.vue";
</script>

<template>
<EditorBar />
<div class="h-[calc(100vh-48px)] w-full overflow-y-auto">
    <NavbarComponent />
    <main class="container h-screen my-24 mx-auto md:px-6">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SubscribeSection></SubscribeSection>
        <div class="container mx-auto flex flex-wrap p-8 xl:px-0">
            <div class="flex w-full items-center lg:w-1/2">
                <div class="mb-8 max-w-2xl">
                    <HeaderComponent />
                    <p>
                        <TextComponent />
                    </p>
                    <div class="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                        <ButtonComponent />
                    </div>
                </div>
            </div>
            <div class="flex h-[500px] w-full items-center justify-center lg:w-1/2">
                <ImageComponent />
            </div>
        </div>
    </main>
</div>
</template>
