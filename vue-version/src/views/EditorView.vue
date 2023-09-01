<script setup lang="ts">
import { computed, ref } from "vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import EditorBar from "@/components/EditorBar.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import SubscribeSection from "@/components/sections/SubscribeSection.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";

const heroVisible = ref(false);
const aboutVisible = ref(false);
const subscribeVisible = ref(false);
const featuresVisible = ref(false);
const addSectionVisible = computed(() => (
    !heroVisible.value ||
    !aboutVisible.value ||
    !subscribeVisible.value ||
    !featuresVisible.value
));

function addSection() {
    if (!heroVisible.value) {
        heroVisible.value = true;
    } else if (!aboutVisible.value) {
        aboutVisible.value = true;
    } else if (!subscribeVisible.value) {
        subscribeVisible.value = true;
    } else if (!featuresVisible.value) {
        featuresVisible.value = true;
    }
}
</script>

<template>
<EditorBar />
<div class="h-[calc(100vh-48px)] w-full overflow-y-auto">
    <NavbarComponent />
    <main class="container mx-auto h-screen space-y-16 md:px-6">
        <div class="group relative">
            <button
                class="absolute left-4 top-0 hidden cursor-pointer group-hover:block"
                data-dont-export
            >
                <img
                    src="https://api.iconify.design/mdi:minus-box.svg?color=%23ffffff"
                    alt="delete section button icon"
                    class="inline-block h-4 w-4"
                />
            </button>
            <HeroSection v-if="heroVisible"></HeroSection>
        </div>
        <FeaturesSection v-if="aboutVisible"></FeaturesSection>
        <SubscribeSection v-if="subscribeVisible"></SubscribeSection>
        <AboutSection v-if="featuresVisible"></AboutSection>
        <section
            v-if="addSectionVisible"
            data-dont-export
            class="flex justify-center pb-10"
        >
            <button
                class="flex items-center justify-center rounded border border-font p-3 font-bold text-font hover:bg-primary"
                @click="addSection()"
            >
                <img
                    src="https://api.iconify.design/mdi:plus-box.svg?color=%23ffffff"
                    alt="add section button icon"
                    class="inline-block h-6 w-6"
                />
            </button>
        </section>
    </main>
</div>
</template>
