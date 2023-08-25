<script setup lang="ts">
import { nextTick, ref } from 'vue';
import EditButton from './EditButton.vue';

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
    <div class="group relative py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        <div v-if="!editMode"
                @click="toggleEditMode()">
            {{ text }}
            <edit-button @toggleEditMode="toggleEditMode()"></edit-button>
        </div>
        <input v-else
            ref="input"
            type="text"
            class="text-black"
            v-model="text"
            @blur="toggleEditMode()"
            @keyup.enter="toggleEditMode()">
    </div>
</template>

<style scoped lang="postcss">

</style>
