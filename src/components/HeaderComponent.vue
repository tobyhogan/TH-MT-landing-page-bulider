<script setup lang="ts">
import { nextTick, ref } from 'vue';

const headerText = ref("Header");
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
        <h1 v-if="!editMode"
            @click="toggleEditMode()">
            {{ headerText }}
        </h1>
        <input v-else
            ref="input"
            type="text"
            v-model="headerText"
            @blur="toggleEditMode()"
            @keyup.enter="toggleEditMode()">
    </div>
</template>

<style scoped lang="postcss">

</style>
