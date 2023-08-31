<script setup lang="ts">
import { computed, ref } from 'vue';
import EditButton from './EditButton.vue';
import ButtonEditorPopover from './modals/ButtonEditorPopover.vue';

const isPopoverOpen = ref(false);
const buttonText = ref("Header");
const buttonUrl = ref("https://www.google.com");
const button = ref<HTMLButtonElement | null>(null);

function edit(event?: MouseEvent) {
    event?.preventDefault();
    isPopoverOpen.value = true;
}

function updateButton({ newButtonText, newButtonUrl }: { newButtonText: string, newButtonUrl: string }) {
    buttonText.value = newButtonText;
    buttonUrl.value = newButtonUrl;
    isPopoverOpen.value = false;
}
</script>

<template>
    <div>
        <div class="group">
            <a ref="button"
               class="button relative px-8 py-4 text-lg font-medium text-center text-font bg-primary rounded-md"
               @click="edit($event)"
               :href="buttonUrl"
               data-remove-before-export>
               {{ buttonText }}
               <EditButton @toggleEditMode="edit()"></EditButton>
               <ButtonEditorPopover
                    v-if="isPopoverOpen"
                    :buttonText="buttonText"
                    :buttonUrl="buttonUrl"
                    @update="updateButton"
                    @close="isPopoverOpen = false"
                />
            </a>
        </div>        
    </div>
</template>

<style scoped lang="postcss">
</style>
