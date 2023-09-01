<script setup lang="ts">
import { computed, ref } from "vue";

const popover = ref<HTMLDivElement | null>(null);
const popoverPosition = computed(() => {
    const parent = popover.value?.parentElement?.getBoundingClientRect();

    return {
        left: parent?.left ?? 0,
        top: (parent?.bottom ?? 0) + 12
    };
});
const emits = defineEmits(["close"]);

const positionStyle = computed(() => ({
    left: `${popoverPosition.value.left}px`,
    top: `${popoverPosition.value.top}px`,
}));

const closePopover = () => {
    emits("close");
};
</script>

<template>
<div
    ref="popover"
    class="fixed inset-0 z-50 flex cursor-default items-center justify-center"
    data-dont-export
    @mousedown="closePopover"
>
    <div
        class="absolute rounded-lg bg-gray-400 p-6 text-gray-900 shadow-md"
        :style="positionStyle"
        @mousedown.stop
    >
        <!-- Speech bubble tip -->
        <div class="absolute bottom-full left-1/4 -mb-2 h-4 w-4 -translate-x-full rotate-45 bg-gray-400" />
        <slot />
    </div>
</div>
</template>

<style scoped lang="postcss">

</style>
