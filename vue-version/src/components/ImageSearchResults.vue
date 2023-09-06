<script setup lang="ts">
import type { Basic } from "unsplash-js/dist/methods/photos/types";
import { ref, watch } from "vue";
import { searchPhotos } from "@/services/unsplash";

const { searchResults: propSearchResults, searchQuery: propSearchQuery } = defineProps<{
    searchResults: Basic[] | undefined;
    searchQuery: string;
}>();
const emits = defineEmits(["selectResult", "back"]);
const searchQuery = ref(propSearchQuery);
const searchResults = ref(propSearchResults);

// Watch for changes in the prop value and update the ref accordingly
watch(() => propSearchResults, (newValue) => {
    searchResults.value = newValue;
});

watch(() => propSearchQuery, (newValue) => {
    searchQuery.value = newValue;
});

const search = () => {
    searchPhotos(searchQuery.value).then((result) => {
        searchResults.value = result.results;
    });
};

function selectResult(result: Basic) {
    emits("selectResult", result);
}
</script>

<template>
<div class="flex h-full flex-col space-y-4">
    <button
        class="mt-2 w-16 rounded-md bg-gray-300 px-4 py-1 hover:bg-gray-400"
        @click="emits('back')"
    >
        <img
            src="https://api.iconify.design/mdi:arrow-left-bold.svg?color=%23000000"
            alt="Back"
            class="inline-block h-6 w-6"
        >
    </button>

    <!-- Search Unsplash -->
    <div class="mb-4">
        <label class="mb-1 block font-medium">
            Search Unsplash:
            <div class="flex flex-row space-x-4">
                <input
                    v-model="searchQuery"
                    type="text"
                    class="w-1/2 rounded-md border p-2"
                    @keydown.enter="search"
                >
                <button
                    class="rounded-md bg-primary px-4 py-2 text-font hover:opacity-80"
                    @click="search"
                >
                    Search
                </button>
            </div>
        </label>
    </div>

    <!-- Display Search Results -->
    <div
        v-if="searchResults?.length ?? 0 > 0"
        class="mt-4 flex h-full flex-row flex-wrap space-x-8 overflow-y-auto"
    >
        <div
            v-for="result in searchResults"
            :key="result.id"
            class="mb-2 cursor-pointer overflow-hidden rounded-lg border-4 border-transparent p-1 hover:border-white"
            @click="selectResult(result)"
        >
            <img
                :src="result.urls.small"
                alt="Unsplash Photo"
                class="h-auto max-w-full"
            >
        </div>
    </div>
</div>
</template>
