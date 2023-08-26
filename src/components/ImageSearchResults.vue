<script setup lang="ts">
import { searchPhotos } from '@/services/unsplash';
import type { Basic } from 'unsplash-js/dist/methods/photos/types';
import { ref, watch } from 'vue';

const { searchResults: propSearchResults } = defineProps<{
    searchResults: Basic[] | undefined;
}>();
const emits = defineEmits(['selectResult', 'back']);
const searchQuery = ref('');
const searchResults = ref(propSearchResults);

// Watch for changes in the prop value and update the ref accordingly
watch(() => propSearchResults, (newValue) => {
  searchResults.value = newValue;
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
    <div class="relative">
        <button class="absolute top-0 left-0 bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-md mt-2"
                @click="emits('back')">&lt;=</button>
        
        <!-- Search Unsplash -->
        <div class="mb-4">
            <label class="block font-medium mb-1">Search Unsplash:</label>
            <input v-model="searchQuery" type="text" class="border rounded-md p-2 w-full">
            <button @click="search" class="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Search</button>
        </div>

        <!-- Display Search Results -->
        <div v-if="searchResults?.length ?? 0 > 0" class="mt-4">
            <h3 class="text-md font-semibold mb-2">Search Results:</h3>
            <div v-for="result in searchResults" :key="result.id" class="mb-2">
            <img :src="result.urls.small" alt="Unsplash Photo" class="max-w-full h-auto">
            <button @click="selectResult(result)" class="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-md mt-2">Select</button>
            </div>
        </div>
    </div>
</template>