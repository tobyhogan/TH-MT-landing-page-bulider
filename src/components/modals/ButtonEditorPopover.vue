<script setup lang="ts">
import { computed, ref } from 'vue';

const { buttonText, buttonUrl, popoverPosition } = defineProps<{
  buttonText: String,
  buttonUrl: String,
  popoverPosition: { left: number, top: number }
}>();
const emits = defineEmits(['update', 'close']);

const editedText = ref(buttonText);
const editedUrl = ref(buttonUrl);
const positionStyle = computed(() => {
    return {
        left: `${popoverPosition.left}px`,
        top: `${popoverPosition.top}px`
    };
});

const saveChanges = () => {
  emits('update', { newButtonText: editedText.value, newButtonUrl: editedUrl.value });
};

const closePopover = () => {
    emits('close');
};
</script>

<template>
    <div @mousedown="closePopover"
         class="fixed inset-0 flex items-center justify-center z-50"
         data-dont-export>
      <div @mousedown.stop
           class="absolute bg-gray-400 p-6 rounded-lg shadow-md text-gray-900"
           :style="positionStyle">
        <!-- Speech bubble tip -->
        <div class="absolute w-4 h-4 bg-gray-400 transform rotate-45 -mb-2 bottom-full left-1/4 -translate-x-1/2"></div>
        
        <!-- Edit inputs -->
        <label class="block mb-2">Button Text</label>
        <input v-model="editedText" class="border rounded-md p-2 w-full mb-2">
        
        <label class="block mb-2">Navigate to URL</label>
        <input v-model="editedUrl" class="border rounded-md p-2 w-full mb-4">
        
        <div class=" h-full flex justify-center">
          <button @click="saveChanges" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Save</button>
        </div>
      </div>
    </div>
  </template>
  