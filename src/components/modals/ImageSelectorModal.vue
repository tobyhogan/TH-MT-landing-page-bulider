<script setup lang="ts">
import { computed, ref } from 'vue';
import { searchPhotos } from "@/services/unsplash";
import type { Basic } from 'unsplash-js/dist/methods/photos/types';
import ImageSearchResults from '../ImageSearchResults.vue';

const emits = defineEmits(['close', 'accept']);

const imageUrl = ref('');
const selectedImage = ref("");
const searchQuery = ref('');
const searchResults = ref<Basic[]>();
const showSearchResults = computed(() => {
    return searchResults.value?.length ?? 0 > 0;
});

const handleFileUpload = (event: any) => {
  const file = event.currentTarget?.files[0];
  if (file) {
    selectedImage.value = URL.createObjectURL(file);
  }
};

const search = () => {
    searchPhotos(searchQuery.value).then((result) => {
        if (result.type === "success") {
            searchResults.value = result.response.results;
        }
    });
};

const selectResult = (selectedResult: Basic) => {
  selectedImage.value = selectedResult.urls.regular;
  accept();
};

const accept = () => {
  emits('accept', selectedImage.value || imageUrl.value);
};

const closeModal = () => {
  emits('close');
};
</script>

<template>
  <Teleport to="#app">
    <div @click.self="closeModal" class="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
      <div @click.stop class="bg-gray-400 p-6 rounded-lg shadow-md text-gray-900">
        <div v-if="!showSearchResults">
          <h2 class="text-lg font-semibold mb-4">Image Uploader</h2>
          
          <!-- Enter Image URL -->
          <div class="mb-4">
              <label class="block font-medium mb-1">Enter Image URL:</label>
              <input v-model="imageUrl" type="text" class="border rounded-md p-2 w-full">
          </div>
          <h3 class="text-xl font-semibold mb-2">OR</h3>
          
          <!-- Upload Image from PC -->
          <div class="mb-4">
              <label class="block font-medium mb-1">Upload Image from PC:</label>
              <input @change="handleFileUpload" type="file" class="border rounded-md p-2 w-full">
          </div>
          <h3 class="text-xl font-semibold mb-2">OR</h3>
          
          <!-- Search Unsplash -->
          <div class="mb-4">
              <label class="block font-medium mb-1">Search Unsplash:</label>
              <input v-model="searchQuery" type="text" class="border rounded-md p-2 w-full">
              <button @click="search" class="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Search</button>
          </div>
          
          <!-- Footer -->
          <div class="flex flex-row justify-between">
            <button @click="closeModal" class="mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md">Close</button>
            <button @click="accept" class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md">Accept</button>
          </div>
        </div>
        <ImageSearchResults v-else
            :searchResults="searchResults"
            @selectResult="selectResult"
            @back="searchResults = []">
        </ImageSearchResults>
      </div>
    </div>
  </Teleport>
</template>
  