<script setup lang="ts">
import { ref } from 'vue';
import PopoverComponent from './PopoverComponent.vue';

const { buttonText, buttonUrl } = defineProps<{
  buttonText: String,
  buttonUrl: String,
}>();
const emits = defineEmits(['update', 'close']);

const editedText = ref(buttonText);
const editedUrl = ref(buttonUrl);

const saveChanges = () => {
  emits('update', { newButtonText: editedText.value, newButtonUrl: editedUrl.value });
};

const closePopover = () => {
    emits('close');
};
</script>

<template>
  <PopoverComponent @close="closePopover">
    <label class="block mb-2">Button Text</label>
    <input v-model="editedText" class="border rounded-md p-2 w-full mb-2">
    
    <label class="block mb-2">Navigate to URL</label>
    <input v-model="editedUrl" class="border rounded-md p-2 w-full mb-4">
    
    <div class=" h-full flex justify-center">
      <button @click="saveChanges" class="bg-primary hover:opacity-80 text-font px-4 py-2 rounded-md">Save</button>
    </div>
  </PopoverComponent>
  </template>
  