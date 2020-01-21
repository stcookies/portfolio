<template>
  <div class="flex justify-center">
    <header class="px-1 py-4 bg-gray-900 shadow-2xl my-container sm:flex sm:justify-between sm:items-center sm:mt-8 sm:py-5 sm:rounded-full">
      <div class="flex items-center justify-between px-8">
        <a href="#" class="text-2xl font-semibold text-white sm:text-lg">Stephen Cook</a>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-8 py-4 sm:py-0 sm:block">
        <div class="font-semibold text-white sm:flex">
          <a href="#" v-scroll-to="'#about'" class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300">About</a>
          <span class="hidden cursor-default sm:block sm:px-1">/</span>
          <a href="#" v-scroll-to="'#experience'" class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300">Experience</a>
          <span class="hidden cursor-default sm:block sm:px-1">/</span>
          <a href="#" v-scroll-to="'#projects'" class="block pt-3 sm:pt-0 sm:py-0 sm:px-4 hover:text-indigo-300">Projects</a>
          <span class="hidden cursor-default sm:block sm:px-1">/</span>
          <a href="#" v-scroll-to="'#contact'" class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300">Contact</a>
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
    }
  }
}
</script>

<style>
</style>