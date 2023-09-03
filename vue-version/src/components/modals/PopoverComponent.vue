<script setup lang="ts">
import { computed, ref } from "vue";

const { position = "BOTTOM" } = defineProps<{
    position?: "BOTTOM" | "TOP",
}>();

const popover = ref<HTMLDivElement | null>(null);
const backdrop = ref<HTMLDivElement | null>(null);
const positionStyle = computed(() => {
    const parentRect = backdrop.value?.parentElement?.getBoundingClientRect();
    const childRect = popover.value?.getBoundingClientRect();

    if (!parentRect || !childRect) {
        return;
    }

    const left = parentRect.left + parentRect.width / 2 - childRect.width / 2;
    const top = position === "BOTTOM" ? `${parentRect.bottom + 12}px` : "auto";
    const bottom = position === "TOP" ? `${parentRect.top - childRect.height - 12}px` : "auto";

    return {
        left: `${left}px`,
        top: position === "BOTTOM" ? top : bottom,
    };
});
const bubblePosition = computed(() => {
    if (position === "BOTTOM") {
        return "bottom-full";
    } else {
        return "top-full -translate-y-1/2";
    }
});
const emits = defineEmits(["close"]);

const closePopover = () => {
    emits("close");
};
</script>

<template>
<div
    ref="backdrop"
    class="fixed inset-0 z-50 flex cursor-default items-center justify-center"
    data-dont-export
    @mousedown="closePopover"
>
    <div
        ref="popover"
        class="absolute rounded-lg bg-gray-400 p-6 text-gray-900 shadow-md"
        :style="positionStyle"
        @mousedown.stop
    >
        <!-- Speech bubble tip -->
        <div
            class="absolute left-1/2 -mb-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-gray-400"
            :class="bubblePosition"
        />
        <slot />
    </div>
</div>
</template>

<style scoped lang="postcss">

</style>
