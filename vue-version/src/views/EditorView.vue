<script setup lang="ts">
import { computed, ref } from "vue";
import NavbarComponent from "@/components/sections/NavbarComponent.vue";
import EditorBar from "@/components/EditorBar.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import SubscribeSection from "@/components/sections/SubscribeSection.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";
import SectionSelectorModal from "@/components/modals/SectionSelectorModal.vue";
import DeleteSectionButton from "@/components/editables/DeleteSectionButton.vue";
import { SectionType } from "@/types/types";

const isSectionModalOpen = ref(false);
const sectionVisibility = ref({
    heroVisible: false,
    aboutVisible: false,
    subscribeVisible: false,
    featuresVisible: false
});
const isAddSectionButtonVisible = computed(() => (
    !sectionVisibility.value.heroVisible ||
    !sectionVisibility.value.aboutVisible ||
    !sectionVisibility.value.subscribeVisible ||
    !sectionVisibility.value.featuresVisible
));
const visibleSections = ref<SectionType[]>([]);

function addSection(sectionType: SectionType) {
    switch (sectionType) {
    case SectionType.ABOUT:
        sectionVisibility.value.aboutVisible = true;
        visibleSections.value.push(SectionType.ABOUT);
        break;
    case SectionType.FEATURES:
        sectionVisibility.value.featuresVisible = true;
        visibleSections.value.push(SectionType.FEATURES);
        break;
    case SectionType.HERO:
        sectionVisibility.value.heroVisible = true;
        visibleSections.value.push(SectionType.HERO);
        break;
    case SectionType.SUBSCRIBE:
        sectionVisibility.value.subscribeVisible = true;
        visibleSections.value.push(SectionType.SUBSCRIBE);
        break;
    default:
        break;
    }

    closeSectionModal();
}

function deleteSection(sectionType: SectionType) {
    switch (sectionType) {
    case SectionType.ABOUT:
        sectionVisibility.value.aboutVisible = false;
        visibleSections.value.filter(section => section !== SectionType.ABOUT);
        break;
    case SectionType.FEATURES:
        sectionVisibility.value.featuresVisible = false;
        visibleSections.value.filter(section => section !== SectionType.FEATURES);
        break;
    case SectionType.HERO:
        sectionVisibility.value.heroVisible = false;
        visibleSections.value.filter(section => section !== SectionType.HERO);
        break;
    case SectionType.SUBSCRIBE:
        sectionVisibility.value.subscribeVisible = false;
        visibleSections.value.filter(section => section !== SectionType.SUBSCRIBE);
        break;
    default:
        break;
    }
}

function closeSectionModal() {
    isSectionModalOpen.value = false;
}
</script>

<template>
<EditorBar />
<div class="h-[calc(100vh-48px)] w-full overflow-y-auto">
    <NavbarComponent
        :visible-sections="visibleSections"
    />
    <main class="container mx-auto h-screen space-y-16 md:px-6">
        <div class="group relative">
            <HeroSection
                v-if="sectionVisibility.heroVisible"
                id="hero"
            >
                <DeleteSectionButton
                    @delete-section="deleteSection(SectionType.HERO)"
                ></DeleteSectionButton>
            </HeroSection>
        </div>
        <FeaturesSection
            v-if="sectionVisibility.featuresVisible"
            id="features"
        >
            <DeleteSectionButton
                @delete-section="deleteSection(SectionType.FEATURES)"
            ></DeleteSectionButton>
        </FeaturesSection>
        <SubscribeSection
            v-if="sectionVisibility.subscribeVisible"
            id="subscribe"
        >
            <DeleteSectionButton
                @delete-section="deleteSection(SectionType.SUBSCRIBE)"
            ></DeleteSectionButton>
        </SubscribeSection>
        <AboutSection
            v-if="sectionVisibility.aboutVisible"
            id="about"
        >
            <DeleteSectionButton
                @delete-section="deleteSection(SectionType.ABOUT)"
            ></DeleteSectionButton>
        </AboutSection>
        <section
            v-if="isAddSectionButtonVisible"
            data-dont-export
            class="flex justify-center pb-10"
        >
            <button
                class="flex items-center justify-center rounded border border-font p-3 font-bold text-font hover:bg-primary"
                @click="isSectionModalOpen = true"
            >
                <img
                    src="https://api.iconify.design/mdi:plus-box.svg?color=%23ffffff"
                    alt="add section button icon"
                    class="inline-block h-6 w-6"
                />
                <SectionSelectorModal
                    v-if="isSectionModalOpen"
                    @accept="addSection($event)"
                    @close="closeSectionModal()"
                    @click.stop
                ></SectionSelectorModal>
            </button>
        </section>
    </main>
</div>
</template>
