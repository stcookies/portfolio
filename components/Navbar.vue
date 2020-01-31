<template>
  <div class="flex justify-center">
    <header
      class="px-1 py-4 bg-gray-900 shadow-2xl my-container sm:flex sm:justify-between sm:items-center sm:mt-8 sm:rounded-full"
    >
      <div class="flex items-center justify-between px-8">
        <svg
          class="w-12 h-12"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 75.38 149.3"
        >
          <defs>
            <style>
              .cls-1 {
                fill: #faf7fb;
              }
              .cls-2 {
                fill: #c4c4c4;
              }
            </style>
          </defs>
          <title>logo-white</title>
          <path
            class="cls-1"
            d="M27.26,65.85,56.38,95,15.87,127.1a2.64,2.64,0,0,0-.9,1.71l-3.14,16.9a2.38,2.38,0,0,0,.27,1.67c.08.16.32.15.44.14s.35,0,.5-.19l52-42.1c7.23-5.77,9.18-16.24,4-21.54l-1.38-1.37L32,45.61c-.15-.41-.62-.39-.94,0a3.31,3.31,0,0,0-.88,1.63L27,64.18C26.83,65,27,65.61,27.26,65.85Z"
          />
          <path
            class="cls-2"
            d="M30.13,47.28,27,64.18c-.16.85,0,1.43.27,1.67L56.38,95s8.74-5.75,11.3-12.65L32,45.61c-.15-.41-.62-.39-.94,0A3.31,3.31,0,0,0,30.13,47.28Z"
          />
          <path
            class="cls-1"
            d="M60.53,20.62l3.14-16.9a2.14,2.14,0,0,0-.29-1.58c-.15-.41-.62-.39-.93,0L12.36,42.69,10.45,44.2c-7.25,5.85-9.2,16.33-4,21.55l37.09,38.16c.09.16.2.15.44.14a.63.63,0,0,0,.5-.19,3.55,3.55,0,0,0,.9-1.71l3.14-16.9c.16-.84,0-1.42-.27-1.66L19.11,54.54,59.63,22.33A2.61,2.61,0,0,0,60.53,20.62Z"
          />
          <path
            class="cls-2"
            d="M63.67,3.72l-3.14,16.9a2.61,2.61,0,0,1-.9,1.71L19.11,54.54s-6.74-5.06-6.75-11.85L62.45,2.18c.31-.43.78-.45.93,0A2.14,2.14,0,0,1,63.67,3.72Z"
          />
        </svg>
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="px-8 py-4 sm:py-0 sm:block"
      >
        <div class="font-semibold text-white sm:flex">
          <a
            href="#"
            v-scroll-to="'#about'"
            class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300"
            >About</a
          >
          <span class="hidden cursor-default sm:block sm:px-1">/</span>
          <a
            href="#"
            v-scroll-to="'#experience'"
            class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300"
            >Experience</a
          >
          <span class="hidden cursor-default sm:block sm:px-1">/</span>
          <a
            href="#"
            v-scroll-to="'#projects'"
            class="block pt-3 sm:pt-0 sm:py-0 sm:px-4 hover:text-indigo-300"
            >Projects</a
          >
          <span class="hidden cursor-default sm:block sm:px-1">/</span>
          <a
            href="#"
            v-scroll-to="'#contact'"
            class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300"
            >Contact</a
          >
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style></style>
