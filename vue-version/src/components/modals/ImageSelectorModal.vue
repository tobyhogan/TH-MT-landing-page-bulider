<script setup lang="ts">
import { computed, ref } from "vue";
import type { Basic } from "unsplash-js/dist/methods/photos/types";
import type { Photos } from "unsplash-js/dist/methods/search/types/response";
import ImageSearchResults from "../ImageSearchResults.vue";
import { searchPhotos } from "@/services/unsplash";

const emits = defineEmits(["close", "accept"]);

const imageUrl = ref("");
const selectedImage = ref("");
const searchQuery = ref("");
const searchResults = ref<Basic[]>();
const showSearchResults = computed(() => (searchResults.value?.length ?? 0) > 0);

const handleFileUpload = (event: Event) => {
    const files = (event.target as HTMLInputElement)?.files;

    if (files && files.length > 0 && files[0]) {
        selectedImage.value = URL.createObjectURL(files[0]);
    }
};

function search() {
    searchPhotos(searchQuery.value).then((result: Photos) => {
        searchResults.value = result.results;
    });
}

function selectResult(selectedResult: Basic) {
    selectedImage.value = selectedResult.urls.regular;
    accept();
}

function accept() {
    emits("accept", selectedImage.value || imageUrl.value);
}

function closeModal() {
    emits("close");
}
</script>

<template>
<Teleport to="#app">
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50"
        data-dont-export
        @mousedown="closeModal()"
    >
        <div
            class="m-10 rounded-lg bg-gray-400 p-6 text-gray-900 shadow-md"
            :class="showSearchResults ? 'h-[95%]' : ''"
            @mousedown.stop
        >
            <div
                v-if="!showSearchResults"
                class="flex flex-col space-y-4"
            >
                <h2 class="mb-4 text-xl font-bold">
                    Image Uploader
                </h2>

                <!-- Enter Image URL -->
                <div>
                    <label class="mb-1 block font-medium">
                        Enter Image URL
                        <input
                            v-model="imageUrl"
                            type="text"
                            class="w-full rounded-md border p-2"
                        >
                    </label>
                </div>

                <h3 class="mb-2 text-xl font-semibold">
                    OR
                </h3>

                <!-- Upload Image from PC -->
                <div>
                    <label class="mb-1 block font-medium">
                        Upload Image
                        <input
                            type="file"
                            class="w-full rounded-md border p-2"
                            @change="handleFileUpload"
                        >
                    </label>
                </div>

                <h3 class="mb-2 text-xl font-semibold">
                    OR
                </h3>

                <!-- Search Unsplash -->
                <div class="mb-4">
                    <label class="mb-1 block font-medium">
                        Search Stock Images
                        <div class="flex flex-row space-x-4">
                            <input
                                v-model="searchQuery"
                                type="text"
                                class="w-full rounded-md border p-2"
                                @keydown.enter="search()"
                            >
                            <button
                                class="rounded-md bg-primary px-4 py-2 text-font hover:opacity-80"
                                @click="search()"
                            >
                                Search
                            </button>
                        </div>
                    </label>
                </div>

                <!-- Footer -->
                <div class="flex flex-row justify-between">
                    <button
                        class="mt-4 rounded-md bg-gray-300 px-4 py-2 hover:bg-gray-400"
                        @click="closeModal()"
                    >
                        Close
                    </button>
                    <button
                        class="mt-4 rounded-md bg-primary px-4 py-2 text-font hover:opacity-80"
                        @click="accept()"
                    >
                        Accept
                    </button>
                </div>
            </div>

            <ImageSearchResults
                v-else
                :search-results="searchResults"
                :search-query="searchQuery"
                @select-result="selectResult"
                @back="searchResults = []"
            />
        </div>
    </div>
</Teleport>
</template>
