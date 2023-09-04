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
const isAddSectionButtonVisible = computed(() => (
    visibleSections.value.length < 4
));
const visibleSections = ref<SectionType[]>([]);

function addSection(sectionType: SectionType) {
    switch (sectionType) {
    case SectionType.ABOUT:
        visibleSections.value.push(SectionType.ABOUT);
        break;
    case SectionType.FEATURES:
        visibleSections.value.push(SectionType.FEATURES);
        break;
    case SectionType.HERO:
        visibleSections.value.push(SectionType.HERO);
        break;
    case SectionType.SUBSCRIBE:
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
        visibleSections.value = visibleSections.value.filter(section => section !== SectionType.ABOUT);
        break;
    case SectionType.FEATURES:
        visibleSections.value = visibleSections.value.filter(section => section !== SectionType.FEATURES);
        break;
    case SectionType.HERO:
        visibleSections.value = visibleSections.value.filter(section => section !== SectionType.HERO);
        break;
    case SectionType.SUBSCRIBE:
        visibleSections.value = visibleSections.value.filter(section => section !== SectionType.SUBSCRIBE);
        break;
    default:
        break;
    }
}

function closeSectionModal() {
    isSectionModalOpen.value = false;
}

function getComponent(section: SectionType) {
    switch (section) {
    case SectionType.ABOUT:
        return AboutSection;
    case SectionType.FEATURES:
        return FeaturesSection;
    case SectionType.HERO:
        return HeroSection;
    case SectionType.SUBSCRIBE:
        return SubscribeSection;
    default:
        return "";
    }
}
</script>

<template>
<EditorBar />
<div class="h-[calc(100vh-48px)] w-full overflow-y-auto">
    <NavbarComponent
        :visible-sections="visibleSections"
    />
    <main class="container mx-auto my-16 space-y-16 md:px-6">
        <component
            :is="getComponent(section)"
            v-for="section in visibleSections"
            :key="getComponent(section)"
            class="rounded border-2 border-transparent p-1 hover:border-primary"
        >
            <DeleteSectionButton
                @delete-section="deleteSection(section)"
            ></DeleteSectionButton>
        </component>
        <section
            v-if="isAddSectionButtonVisible"
            data-dont-export
            class="flex justify-center py-10"
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
                    :visible-sections="visibleSections"
                    @accept="addSection($event)"
                    @close="closeSectionModal()"
                    @click.stop
                ></SectionSelectorModal>
            </button>
        </section>
    </main>
</div>
</template>
