<script setup lang="ts">
import { nextTick, ref } from 'vue';

const imageSrc = ref("https://picsum.photos/200");
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
        <img v-if="!editMode"
            @click="toggleEditMode()"
            :src="imageSrc">
        <input v-else
            ref="input"
            type="text"
            v-model="imageSrc"
            @blur="toggleEditMode()"
            @keyup.enter="toggleEditMode()">
    </div>
</template>

<style scoped lang="postcss">

</style>
