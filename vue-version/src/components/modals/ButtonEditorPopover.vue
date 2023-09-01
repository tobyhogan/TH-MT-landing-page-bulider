<script setup lang="ts">
import { ref } from "vue";
import PopoverComponent from "./PopoverComponent.vue";

const { buttonText, buttonUrl } = defineProps<{
  buttonText: string,
  buttonUrl: string,
}>();
const emits = defineEmits(["update", "close"]);

const editedText = ref(buttonText);
const editedUrl = ref(buttonUrl);

const saveChanges = () => {
    emits("update", {
        newButtonText: editedText.value,
        newButtonUrl: editedUrl.value
    });
};

const closePopover = () => {
    emits("close");
};
</script>

<template>
<PopoverComponent @close="closePopover">
    <label class="mb-2 block">
        Button Text
        <input
            v-model="editedText"
            class="mb-2 w-full rounded-md border p-2"
        >
    </label>

    <label class="mb-2 block">
        Navigate to URL
        <input
            v-model="editedUrl"
            class="mb-4 w-full rounded-md border p-2"
        >
    </label>

    <div class=" flex h-full justify-center">
        <button
            class="rounded-md bg-primary px-4 py-2 text-font hover:opacity-80"
            @click="saveChanges"
        >
            Save
        </button>
    </div>
</PopoverComponent>
</template>
