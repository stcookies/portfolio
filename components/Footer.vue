<template>
  <footer class="bg-gray-900 border-t border-indigo-500">
    <div class="flex flex-col py-32 mx-auto my-container">
      <span class="pt-20 text-xl text-white lg:pt-0">Stephen Cook</span>
      <span class="text-xs text-white">© Copyright 2020</span>
      <div class="pt-5 mt-10 font-semibold text-white sm:pt-0 sm:flex">
        <a href="#" v-scroll-to="'#about'" class="block pr-4 hover:text-indigo-300">About</a>
        <span class="hidden cursor-default sm:block sm:px-1">/</span>
        <a href="#" v-scroll-to="'#experience'" class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300">Experience</a>
        <span class="hidden cursor-default sm:block sm:px-1">/</span>
        <a href="#" v-scroll-to="'#projects'" class="block pt-3 pr-4 sm:pt-0 sm:px-4 hover:text-indigo-300">Projects</a>
        <span class="hidden cursor-default sm:block sm:px-1">/</span>
        <a href="#" v-scroll-to="'#contact'" class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300">Contact</a>
      </div>
    </div>
    <div class="flex items-center justify-center px-4 py-2 text-xs font-semibold text-center text-white bg-black">
      <span>Built in 
        <a class="font-bold text-indigo-400 hover:text-indigo-300" href="https://cincinnatiusa.com/">Cincinnati, OH 📍</a> with
        <a class="font-bold text-indigo-400 hover:text-indigo-300" href="https://tailwindcss.com/">Tailwind CSS</a> &
        <a class="font-bold text-indigo-400 hover:text-indigo-300" href="https://nuxtjs.org/">NuxtJS</a>, hosted on
        <a class="font-bold text-indigo-400 hover:text-indigo-300" href="https://www.netlify.com/">Netlify</a> ❤️️
      </span>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
</style>