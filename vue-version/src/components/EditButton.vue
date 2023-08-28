<script setup lang="ts">
const emits = defineEmits(["toggleEditMode"]);

function toggleEditMode() {
    emits("toggleEditMode");
}
</script>

<template>
    <button
        class="button p-1 absolute text-white z-10 right-0 top-0 hidden group-hover:block"
        data-dont-export
        @click="toggleEditMode()">
        <img src="https://api.iconify.design/mdi:pencil.svg?color=%23ffffff">
    </button>
</template>

<style scoped lang="postcss">

</style>
