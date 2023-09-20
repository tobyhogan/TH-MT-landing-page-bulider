<script setup lang="ts">
import { ref } from "vue";
import PopoverComponent from "./modals/PopoverComponent.vue";

const isPopoverOpen = ref(false);

const { buttonText, buttonUrl } = defineProps<{
  buttonText: string,
  buttonUrl: string,
}>();


const emits = defineEmits(["update", "close"]);

const editedText = ref(buttonText);
const editedUrl = ref(buttonUrl);

function updateButton({ newButtonText, newButtonUrl }: { newButtonText: string, newButtonUrl: string }) {

}


//const buttonText = ref(initialText);
//const buttonUrl = ref("https://www.google.com");


const button = ref<HTMLButtonElement | null>(null);

function edit(event?: MouseEvent) {
    event?.preventDefault();
    isPopoverOpen.value = true;
}



function saveChanges() {
    emits("update", {
        newButtonText: editedText.value,
        newButtonUrl: editedUrl.value
    });
}

function closePopover() {
    emits("close");
}




</script>

<template>
    <button
        class="button bg-grey p-1.5 text-font-accent"
        @click="isPopoverOpen = true"
    >Edit Site Details
    
        <PopoverComponent 
        
        v-if="isPopoverOpen"
            :button-text="buttonText"
            :button-url="buttonUrl"
            @update="updateButton"
            @close="isPopoverOpen = false"

        >
        
            <label class="mb-2 block">
                Site Name
                <input
                    v-model="editedText"
                    class="mb-2 w-full rounded-md border p-2"
                >
            </label>

            <label class="mb-2 block">
                Favicon
                <input
                    v-model="editedUrl"
                    class="mb-4 w-full rounded-md border p-2"
                >
            </label>

            <div class=" flex h-full justify-center">
                <button
                    class="rounded-md bg-accent px-4 py-2 text-font-accent hover:opacity-80"
                    @click="saveChanges()"
                >
                    Save
                </button>
            </div>
        </PopoverComponent>
    </button>
</template>

<style scoped lang="postcss">

</style>
