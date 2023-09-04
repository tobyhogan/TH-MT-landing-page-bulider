<script setup lang="ts">
import { nextTick, ref } from "vue";
import EditButton from "./EditButton.vue";

const { initialText = "Header" } = defineProps<{
    initialText?: string,
}>();

const headerText = ref(initialText);
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
    });
}
</script>

<template>
<div class="group relative">
    <EditButton @toggle-edit-mode="edit()" />
    <h1
        ref="input"
        class="py-1 text-4xl font-bold leading-snug tracking-tight text-gray-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight"
        contentEditable="true"
        data-remove-before-export
    >
        {{ headerText }}
    </h1>
</div>
</template>

<style scoped lang="postcss">

</style>
