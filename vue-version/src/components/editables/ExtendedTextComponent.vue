<script setup lang="ts">
import { nextTick, ref } from "vue";
import EditButton from "./EditButton.vue";

const { initialText = "Type something here..." } = defineProps<{
    initialText?: string,
}>();

const text = ref(initialText);
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
<div class="group relative py-5 text-xl leading-normal text-font lg:text-xl xl:text-2xl">
    <EditButton @toggle-edit-mode="edit()" />
    <p
        ref="input"
        contentEditable="true"
        class="pr-1"
    >
        {{ text }}
    </p>
</div>
</template>

<style scoped lang="postcss">

</style>
