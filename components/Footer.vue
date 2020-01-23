<template>
  <footer class="bg-gray-900 border-t border-indigo-500">
    <div class="flex flex-col py-32 mx-auto my-container">
      <span class="pt-20 text-xl text-white lg:pt-0">Stephen Cook</span>
      <span class="text-xs text-white">© Copyright 2020</span>
      <a class="mt-3" target="_blank" href="https://www.linkedin.com/in/st-cook/">
        <svg class="w-5 h-5 text-white fill-current hover:text-indigo-300" viewBox="0 0 24 24">
          <defs/>
          <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
        </svg>
      </a>
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