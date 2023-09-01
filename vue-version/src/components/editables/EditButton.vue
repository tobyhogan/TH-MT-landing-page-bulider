<script setup lang="ts">
const emits = defineEmits(["toggleEditMode"]);

function toggleEditMode() {
    emits("toggleEditMode");
}
</script>

<template>
<button
    class="button absolute right-0 top-0 z-10 hidden p-1 text-white group-hover:block"
    data-dont-export
    @click="toggle - edit - mode()"
>
    <img
        src="https://api.iconify.design/mdi:pencil.svg?color=%23ffffff"
        alt="edit button icon"
    >
</button>
</template>

<style scoped lang="postcss">

</style>
