<script setup lang="ts">
import { nextTick, ref } from 'vue';
import EditButton from './EditButton.vue';

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
    <div class="group">        
        <h1 v-if="!editMode"
            class="relative"
            @click="toggleEditMode()">
            {{ headerText }}
            <edit-button @toggleEditMode="toggleEditMode()"></edit-button>
        </h1>
        <input v-else
            ref="input"
            type="text"
            class="text-black"
            v-model="headerText"
            @blur="toggleEditMode()"
            @keyup.enter="toggleEditMode()">
    </div>
</template>

<style scoped lang="postcss">

</style>
