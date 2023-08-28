<script setup lang="ts">
<<<<<<< HEAD
import { computed, nextTick, ref } from 'vue';
import EditButton from './EditButton.vue';
import ButtonEditorPopover from './modals/ButtonEditorPopover.vue';

const isPopoverOpen = ref(false);
const buttonText = ref("Header");
const buttonUrl = ref("https://www.google.com");
const button = ref<HTMLButtonElement | null>(null);
const popoverPosition = computed(() => {
    return {
        left: button.value?.getBoundingClientRect().left ?? 0,
        top: (button.value?.getBoundingClientRect().bottom ?? 0) + 12
    };
});

function edit(event?: MouseEvent) {
    event?.preventDefault();
    isPopoverOpen.value = true;
}

function updateButton({ newButtonText, newButtonUrl }: { newButtonText: string, newButtonUrl: string }) {
    buttonText.value = newButtonText;
    buttonUrl.value = newButtonUrl;
    isPopoverOpen.value = false;
=======
import { nextTick, ref } from 'vue';
import EditButton from './EditButton.vue';

const buttonText = ref("Header");
const input = ref<HTMLElement | null>(null);

function edit() {
    nextTick(() => {
        if (!input.value) {
            return;
        }

        input.value?.focus();
        const range = document.createRange();
        const sel = window.getSelection();

        range.selectNodeContents(input.value);
        range.collapse(false);

        sel?.removeAllRanges();
        sel?.addRange(range);
    })
>>>>>>> a9347fc (vue-version)
}
</script>

<template>
<<<<<<< HEAD
    <div>
        <div class="group">
            <a ref="button"
               class="button relative px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
               @click="edit($event)"
               :href="buttonUrl"
               data-remove-before-export>
                <EditButton @toggleEditMode="edit()"></EditButton>
                {{ buttonText }}
            </a>
        </div>

        <ButtonEditorPopover
            v-if="isPopoverOpen"
            :buttonText="buttonText"
            :buttonUrl="buttonUrl"
            :popoverPosition="popoverPosition"
            @update="updateButton"
            @close="isPopoverOpen = false"
        />
=======
    <div class="group">
        <button class="button relative px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
                @click="edit()">
            <edit-button @toggleEditMode="edit()"></edit-button>
            <div ref="input"
                 contentEditable="true">{{ buttonText }}</div>
        </button>
>>>>>>> a9347fc (vue-version)
    </div>
</template>

<style scoped lang="postcss">
<<<<<<< HEAD

=======
input {
    border: none;
    margin: 0;
    padding: 0;
    background: none;
    font: inherit;
    color: inherit;
    appearance: none;
    outline: none;
}
>>>>>>> a9347fc (vue-version)
</style>
