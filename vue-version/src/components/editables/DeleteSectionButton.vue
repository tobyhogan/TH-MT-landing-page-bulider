<script setup lang="ts">
const emits = defineEmits(["deleteSection"]);
</script>

<template>
<button
    class="button absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center p-1 text-white hover:bg-red-500 group-hover/section:flex"
    data-dont-export
    @click="emits('deleteSection')"
>
    <img
        src="https://api.iconify.design/mdi:delete-forever.svg?color=%23ffffff"
        alt="delete section button icon"
        class="h-6 w-6"
    >
</button>
</template>

<style scoped lang="postcss">

</style>
