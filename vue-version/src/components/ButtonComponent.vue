<script setup lang="ts">
import { ref } from "vue";
import EditButton from "./EditButton.vue";
import ButtonEditorPopover from "./modals/ButtonEditorPopover.vue";

const isPopoverOpen = ref(false);
const buttonText = ref("Header");
const buttonUrl = ref("https://www.google.com");
const button = ref<HTMLButtonElement | null>(null);

function edit(event?: MouseEvent) {
    event?.preventDefault();
    isPopoverOpen.value = true;
}

function updateButton({ newButtonText, newButtonUrl }: { newButtonText: string, newButtonUrl: string }) {
    buttonText.value = newButtonText;
    buttonUrl.value = newButtonUrl;
    isPopoverOpen.value = false;
}
</script>

<template>
<div>
    <div class="group">
        <a
            ref="button"
            class="button relative rounded-md bg-primary px-8 py-4 text-center text-lg font-medium text-font hover:opacity-80"
            :href="buttonUrl"
            data-remove-before-export
            @click="edit($event)"
        >
            {{ buttonText }}
            <EditButton @toggleEditMode="edit()" />
            <ButtonEditorPopover
                v-if="isPopoverOpen"
                :button-text="buttonText"
                :button-url="buttonUrl"
                @update="updateButton"
                @close="isPopoverOpen = false"
            />
        </a>
    </div>
</div>
</template>

<style scoped lang="postcss">
</style>
