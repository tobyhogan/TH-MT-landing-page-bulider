<script setup lang="ts">
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
}
</script>

<template>
    <div class="group">
        <button class="button relative px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
                @click="edit()">
            <edit-button @toggleEditMode="edit()"></edit-button>
            <div ref="input"
                 contentEditable="true">{{ buttonText }}</div>
        </button>
    </div>
</template>

<style scoped lang="postcss">
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
</style>
