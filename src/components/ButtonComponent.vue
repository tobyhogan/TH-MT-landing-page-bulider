<script setup lang="ts">
import { nextTick, ref } from 'vue';
import EditButton from './EditButton.vue';

const buttonText = ref("Header");
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
        <button v-if="!editMode"
                class="button relative px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
                @click="toggleEditMode()">
            {{ buttonText }}
            <edit-button @toggleEditMode="toggleEditMode()"></edit-button>
        </button>
        <button v-else>
            <input
                ref="input"
                type="text"
                class="text-black"
                v-model="buttonText"
                @blur="toggleEditMode()"
                @keyup.enter="toggleEditMode()">
        </button>
    </div>
</template>

<style scoped lang="postcss">

</style>
