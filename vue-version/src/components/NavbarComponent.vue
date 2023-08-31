<script setup lang="ts">
const menuItems = [
    "Product",
    "Features",
    "Pricing",
]
</script>

<template>
  <nav class="container relative flex flex-wrap items-center justify-between p-7 mx-auto lg:justify-between xl:px-0">
    <div class="flex flex-wrap items-center justify-between w-full lg:w-auto">
        <a href="/">
            <span class="flex items-center space-x-2 text-2xl font-medium text-primary">
                <span>
                    <img alt="N" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" class="w-14" style="color:transparent" src="/src/assets/images/logo.jpg">
                </span>
                <span>Cool Icon</span>
            </span>
        </a>
        <button aria-label="Toggle Menu"
                class="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none" id="headlessui-disclosure-button-:R956:"
                type="button"
                aria-expanded="false"
                data-headlessui-state="">
            <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
        </button>
    </div>
    <div class="hidden text-center lg:flex lg:items-center">
        <ul class="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li v-for="menuItem in menuItems"
                class="mr-3 nav__item">
                    <a class="inline-block px-4 py-2 text-lg font-normal text-gray-200 no-underline rounded-md hover:text-primary focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                    href="/">
                    {{ menuItem }}
                </a>
            </li>        
        </ul>
    </div>
    <div class="hidden mr-3 space-x-4 lg:flex nav__item">
        <button class="px-6 py-2 text-font bg-primary rounded-md md:ml-5 hover:opacity-80">
            Get Started
        </button>
    </div>
  </nav>
</template>

<style scoped lang="postcss">

</style>
