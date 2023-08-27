<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import EditButton from './EditButton.vue';
import ButtonEditorPopover from './modals/ButtonEditorPopover.vue';

const isPopoverOpen = ref(false);
const buttonText = ref("Header");
const buttonUrl = ref("https://www.google.com");
const button = ref<HTMLButtonElement | null>(null);
const popoverPosition = computed(() => {
    return {
        left: button.value?.getBoundingClientRect().left ?? 0,
        top: (button.value?.getBoundingClientRect().bottom ?? 0) + 12
    };
});

function edit() {
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
            <button ref="button"
                    class="button relative px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
                    @click="edit()">
                <EditButton @toggleEditMode="edit()"></EditButton>
                {{ buttonText }}
            </button>
        </div>

        <ButtonEditorPopover
            v-if="isPopoverOpen"
            :buttonText="buttonText"
            :buttonUrl="buttonUrl"
            :popoverPosition="popoverPosition"
            @update="updateButton"
            @close="isPopoverOpen = false"
        />
    </div>
</template>

<style scoped lang="postcss">

</style>
