<script setup lang="ts">
import { ref } from "vue";
import { setNewTheme } from "@/services/theme";

const isDarkTheme = ref(getComputedStyle(document.documentElement).getPropertyValue("--dark-mode") === "true");

function onToggleChange() {
    if (isDarkTheme.value) {
        setNewTheme("light");
        isDarkTheme.value = false;
    } else {
        setNewTheme("dark");
        isDarkTheme.value = true;
    }
}
</script>

<template>
<button
    class="button p-1.5"
    :class="isDarkTheme ? 'bg-gray-700' : 'bg-gray-300'"
    @click="onToggleChange()"
>
    <img
        v-if="isDarkTheme"
        class="h-6 w-6"
        src="https://api.iconify.design/mdi:weather-night.svg?color=%23ffffff"
        alt="palette button icon"
    >
    <img
        v-else
        class="h-6 w-6"
        src="https://api.iconify.design/mdi:white-balance-sunny.svg?color=%23000000"
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
