<script setup lang="ts">
import { nextTick, ref } from "vue";
import EditButton from "./EditButton.vue";

const text = ref("This is my glorious SaaS product! Please buy it!");
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
<div class="group relative py-5 text-xl leading-normal text-gray-400 lg:text-xl xl:text-2xl">
    <EditButton @toggle-edit-mode="edit()" />
    <p
        ref="input"
        contentEditable="true"
        class="pr-1"
        data-remove-before-export
    >
        {{ text }}
    </p>
</div>
</template>

<style scoped lang="postcss">

</style>
