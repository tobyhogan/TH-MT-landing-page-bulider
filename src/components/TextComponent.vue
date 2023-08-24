<script setup lang="ts">
import { nextTick, ref } from 'vue';

const text = ref("This is my glorious SaaS product! Please buy it!");
const editMode = ref(false);
const input = ref<HTMLElement | null>(null);

function toggleEditMode() {
    editMode.value = !editMode.value;

    if (editMode.value) {
        nextTick(() => {
            input.value?.focus();
        })
    }
}
</script>

<template>
    <div>
        <div v-if="!editMode"
            @click="toggleEditMode()">
            {{ text }}
        </div>
        <input v-else
            ref="input"
            type="text"
            v-model="text"
            @blur="toggleEditMode()"
            @keyup.enter="toggleEditMode()">
    </div>
</template>

<style scoped lang="postcss">

</style>
