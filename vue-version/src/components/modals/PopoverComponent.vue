<script setup lang="ts">
import { computed, ref } from 'vue';

const popover = ref<HTMLDivElement | null>(null);
const popoverPosition = computed(() => {
    const parent = popover.value?.parentElement?.getBoundingClientRect();
        
    return {
        left: parent?.left ?? 0,
        top: (parent?.bottom ?? 0) + 12
    };
});
const emits = defineEmits(['close']);

const positionStyle = computed(() => {
    return {
        left: `${popoverPosition.value.left}px`,
        top: `${popoverPosition.value.top}px`,
    };
});

const closePopover = () => {
    emits('close');
};
</script>

<template>
    <div ref="popover"
         @mousedown="closePopover"
         class="fixed inset-0 flex items-center justify-center z-50 cursor-default"
         data-dont-export>
      <div @mousedown.stop
           class="absolute bg-gray-400 p-6 rounded-lg shadow-md text-gray-900"
           :style="positionStyle">
        <!-- Speech bubble tip -->
        <div class="absolute w-4 h-4 bg-gray-400 transform rotate-45 -mb-2 bottom-full left-1/4 -translate-x-full"></div>
        <slot></slot>
    </div>
    </div>
</template>

<style scoped lang="postcss">

</style>
