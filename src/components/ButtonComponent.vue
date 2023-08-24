<script setup lang="ts">
import { nextTick, ref } from 'vue';

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
    <div>
        <button v-if="!editMode"
            @click="toggleEditMode()">
            {{ buttonText }}
        </button>
        <button v-else>
            <input
                ref="input"
                type="text"
                v-model="buttonText"
                @blur="toggleEditMode()"
                @keyup.enter="toggleEditMode()">
        </button>
    </div>
</template>

<style scoped lang="postcss">

</style>
