<template>
  <div class="flex justify-center">
    <header class="my-container fixed z-30 left-0 right-0 sm:inset-auto bg-gray-900 py-4 px-1 shadow-2xl sm:flex sm:justify-between sm:items-center sm:mt-8 sm:py-5 sm:rounded-full">
      <div class="px-8 flex items-center justify-between">
        <a href="#" class="text-2xl sm:text-lg text-white font-semibold">Stephen Cook</a>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="py-4 px-8 sm:py-0 sm:block">
        <div class="text-white font-semibold sm:flex">
          <a href="#" class="block sm:px-4 hover:text-indigo-300">About Me</a>
          <span class="hidden sm:block sm:px-1 cursor-default">/</span>
          <a href="#" class="block py-3 sm:py-0 sm:px-4 hover:text-indigo-300">My Work</a>
          <span class="hidden sm:block sm:px-1 cursor-default">/</span>
          <a href="#" class="block sm:px-4 hover:text-indigo-300">Contact</a>
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