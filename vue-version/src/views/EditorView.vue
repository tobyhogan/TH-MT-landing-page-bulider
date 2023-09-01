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
import FeaturesSection from "@/components/sections/FeaturesSection.vue";
</script>

<template>
<EditorBar />
<div class="h-[calc(100vh-48px)] w-full overflow-y-auto">
    <NavbarComponent />
    <main class="container h-screen mx-auto md:px-6 space-y-16">
        <HeroSection></HeroSection>
        <FeaturesSection></FeaturesSection>
        <SubscribeSection></SubscribeSection>
        <AboutSection></AboutSection>       
    </main>
</div>
</template>
