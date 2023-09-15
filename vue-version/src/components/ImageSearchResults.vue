<script setup lang="ts">



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
    
</div>
</template>
