<script setup lang="ts">
import { searchPhotos } from '@/services/unsplash';
import type { Basic } from 'unsplash-js/dist/methods/photos/types';
import { ref, watch } from 'vue';

const { searchResults: propSearchResults, searchQuery: propSearchQuery } = defineProps<{
    searchResults: Basic[] | undefined;
    searchQuery: string;
}>();
const emits = defineEmits(['selectResult', 'back']);
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
        if (result.type === "success") {
            searchResults.value = result.response.results;
        }
    });
};

function selectResult(result: Basic) {
    emits('selectResult', result);
}
</script>

<template>
    <div class="flex flex-col space-y-4 h-full">
        <button class="w-16 bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded-md mt-2"
                @click="emits('back')">
            <img src="https://api.iconify.design/mdi:arrow-left-bold.svg?color=%23000000" alt="Back" class="inline-block w-6 h-6">
        </button>
        
        <!-- Search Unsplash -->
        <div class="mb-4">
            <label class="block font-medium mb-1">Search Unsplash:</label>
            <div class="flex flex-row space-x-4">
                <input v-model="searchQuery" type="text" class="border rounded-md p-2 w-1/2" @keydown.enter="search">
                <button @click="search" class="bg-primary hover:opacity-80 text-font px-4 py-2 rounded-md">Search</button>
            </div>
        </div>

        <!-- Display Search Results -->
        <div v-if="searchResults?.length ?? 0 > 0" class="mt-4 flex flex-row flex-wrap space-x-8 overflow-y-auto h-full">
            <div v-for="result in searchResults" :key="result.id"
                 @click="selectResult(result)"     
                 class="mb-2 cursor-pointer p-1 rounded-lg border-4 border-transparent hover:border-white overflow-hidden">
                <img :src="result.urls.small" alt="Unsplash Photo" class="max-w-full h-auto">
            </div>
        </div>
    </div>
</template>