<script setup lang="ts">
import { nextTick, ref } from 'vue';
import EditButton from './EditButton.vue';

const headerText = ref("Header");
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
    <div class="group relative">        
        <EditButton @toggleEditMode="edit()"></EditButton>
        <h1 class="py-1 text-4xl font-bold leading-snug tracking-tight text-gray-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight"
            ref="input"
            contentEditable="true"
            data-remove-before-export>
            {{ headerText }}
        </h1>
    </div>
</template>

<style scoped lang="postcss">

</style>
