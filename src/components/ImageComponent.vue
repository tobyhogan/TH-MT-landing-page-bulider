<script setup lang="ts">
import { nextTick, ref } from 'vue';
import EditButton from './EditButton.vue';

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
    <div class="group relative">
        <div v-if="!editMode">
            <edit-button @toggleEditMode="toggleEditMode()"></edit-button>
            <img
                @click="toggleEditMode()"
                :src="imageSrc"
                class="object-cover">
        </div>
        <input v-else
            ref="input"
            type="text"
            class="text-black"
            v-model="imageSrc"
            @blur="toggleEditMode()"
            @keyup.enter="toggleEditMode()">
    </div>
</template>

<style scoped lang="postcss">

</style>
