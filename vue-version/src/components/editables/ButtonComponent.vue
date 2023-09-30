<script setup lang="ts">
import { ref } from "vue";
import ButtonEditorPopover from "../modals/ButtonEditorPopover.vue";
import EditButton from "./EditButton.vue";

const { initialText = "Click me" } = defineProps<{
    initialText?: string,
    initialText1?: string,
}>();

const isPopoverOpen = ref(false);
const buttonText = ref(initialText);
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
<div class="group flex flex-row items-center justify-center">
    <a
        ref="button"
        class="button relative rounded-md bg-accent bg-gradient-to-tr from-gradient1 from-0% via-gradient2 via-50% to-gradient3 to-90% px-8 py-3 text-center text-lg font-medium text-font-accent hover:bg-gradient-to-bl"
        :href="buttonUrl"
        data-remove-before-export
        @click="edit($event)"
    >
        {{ buttonText }}
        <EditButton @toggle-edit-mode="edit()" />
        <ButtonEditorPopover
            v-if="isPopoverOpen"
            :button-text="buttonText"
            :button-url="buttonUrl"
            @update="updateButton"
            @close="isPopoverOpen = false"
        />
    </a>
</div>
</template>

<style scoped lang="postcss">
</style>
