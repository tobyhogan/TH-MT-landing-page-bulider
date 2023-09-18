<script setup lang="ts">
import type { Basic } from "unsplash-js/dist/methods/photos/types";
import { computed, ref, watch } from "vue";
import type { Photos } from "unsplash-js/dist/methods/search/types/response";
import type { Orientation } from "unsplash-js";
import { searchPhotos } from "@/services/unsplash";

const { photos: propPhotos, searchQuery: propSearchQuery, orientation: propOrientation } = defineProps<{
    photos: Photos | undefined;
    searchQuery: string;
    orientation?: Orientation;
}>();
const emits = defineEmits(["selectResult", "back"]);
const searchQuery = ref(propSearchQuery);
const searchResults = ref(propPhotos?.results ?? []);
const photos = ref<Photos | undefined>(propPhotos);
const currentPage = ref(1);
const maxPages = computed(() => photos.value?.total_pages ?? 1);
const lastSearchTerm = ref(propSearchQuery);
const lastPage = ref(1);

// Watch for changes in the prop value and update the ref accordingly
watch(() => photos, (newValue) => {
    searchResults.value = newValue.value?.results ?? [];
});

watch(() => propSearchQuery, (newValue) => {
    searchQuery.value = newValue;
});

function search() {
    if (lastSearchTerm.value === searchQuery.value && lastPage.value === currentPage.value) {
        return;
    }

    searchPhotos(searchQuery.value, currentPage.value, propOrientation).then((result: Photos) => {
        photos.value = result;

        if (lastSearchTerm.value !== searchQuery.value) {
            searchResults.value = result.results;
        } else {
            searchResults.value = [...searchResults.value, ...result.results];
        }

        lastSearchTerm.value = searchQuery.value;
        lastPage.value = currentPage.value;
    });
}

function selectResult(result: Basic) {
    emits("selectResult", result);
}

function loadMore() {
    currentPage.value += 1;
    search();
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
                    @keydown.enter="search()"
                >
                <button
                    class="rounded-md bg-accent px-4 py-2 text-font-accent hover:opacity-80"
                    @click="search()"
                >
                    Search
                </button>
            </div>
        </label>
    </div>

    <!-- Display Search Results -->
    <div
        v-if="searchResults?.length ?? 0 > 0"
        class="overflow-y-auto"
    >
        <div
            class="mb-6 mt-4 grid select-none grid-cols-2 space-y-4 text-center"
        >
            <div
                v-for="result in searchResults"
                :key="result.id"
                class="mb-2 flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-4 border-transparent p-1 hover:border-white"
                @click="selectResult(result)"
            >
                <img
                    :src="result.urls.small"
                    alt="Unsplash Photo"
                    class="h-auto max-w-full"
                >
            </div>
        </div>
        <div class="flex w-full flex-col">
            <button
                v-if="currentPage < maxPages"
                class="button !my-6 mx-auto bg-accent px-10 text-font-accent"
                @click="loadMore()"
            >
                Load More
            </button>
        </div>
    </div>
</div>
</template>
