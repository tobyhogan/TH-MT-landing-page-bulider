<script setup lang="ts">
import { ref } from "vue";
import PopoverComponent from "./modals/PopoverComponent.vue";
import { setNewTheme } from "@/services/theme";

const isPopoverOpen = ref(false);

function onToggleChange(event: Event) {
    if (event.target instanceof HTMLInputElement) {
        if (event.target.checked) {
            setNewTheme("dark");
        } else {
            setNewTheme("light");
        }
    }
}
</script>

<template>
<button
    class="button p-1.5 hover:bg-gray-400"
    @click="isPopoverOpen = true"
>
    <PopoverComponent
        v-if="isPopoverOpen"
        @close="isPopoverOpen = false"
    >
        <h4 class="mb-2 text-lg font-semibold">
            Dark theme
        </h4>
        <label class="switch">
            <input
                id="toggleButton"
                type="checkbox"
                :checked="true"
                @change="onToggleChange($event)"
            >
            <span class="slider round"></span>
        </label>
    </PopoverComponent>
    <img
        class="h-6 w-6"
        src="https://api.iconify.design/mdi:palette.svg?color=%23ffffff"
        alt="palette button icon"
    >
</button>
</template>

<style scoped lang="postcss">
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--color-accent);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-accent);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
