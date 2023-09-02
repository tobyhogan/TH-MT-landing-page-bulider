<script setup lang="ts">
import { computed, ref } from "vue";
import NavbarComponent from "@/components/sections/NavbarComponent.vue";
import EditorBar from "@/components/EditorBar.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import SubscribeSection from "@/components/sections/SubscribeSection.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";

const sectionVisibility = ref({
    heroVisible: false,
    aboutVisible: false,
    subscribeVisible: false,
    featuresVisible: false
});
const addSectionVisible = computed(() => (
    !sectionVisibility.value.heroVisible ||
    !sectionVisibility.value.aboutVisible ||
    !sectionVisibility.value.subscribeVisible ||
    !sectionVisibility.value.featuresVisible
));

function addSection() {
    if (!sectionVisibility.value.heroVisible) {
        sectionVisibility.value.heroVisible = true;
    } else if (!sectionVisibility.value.aboutVisible) {
        sectionVisibility.value.aboutVisible = true;
    } else if (!sectionVisibility.value.subscribeVisible) {
        sectionVisibility.value.subscribeVisible = true;
    } else if (!sectionVisibility.value.featuresVisible) {
        sectionVisibility.value.featuresVisible = true;
    }
}
</script>

<template>
<EditorBar />
<div class="h-[calc(100vh-48px)] w-full overflow-y-auto">
    <NavbarComponent :section-visibility="sectionVisibility" />
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
            <HeroSection v-if="sectionVisibility.heroVisible"></HeroSection>
        </div>
        <FeaturesSection v-if="sectionVisibility.aboutVisible"></FeaturesSection>
        <SubscribeSection v-if="sectionVisibility.subscribeVisible"></SubscribeSection>
        <AboutSection v-if="sectionVisibility.featuresVisible"></AboutSection>
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
