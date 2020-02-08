<template>
  <footer class="bg-gray-900 border-t border-indigo-500">
    <div class="flex flex-col py-32 mx-auto my-container">
      <div class="mt-32 lg:mt-0">
        <img class="w-name-logo" src="~/assets/img/name-logo.png" />
      </div>
      <div class="mt-5 font-semibold text-white sm:pt-0 sm:flex">
        <a href="#" v-scroll-to="'#about'" class="block pr-4 hover:text-indigo-300">About</a>
        <span class="hidden cursor-default sm:block sm:px-1">/</span>
        <a
          href="#"
          v-scroll-to="'#experience'"
          class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300"
        >Experience</a>
        <span class="hidden cursor-default sm:block sm:px-1">/</span>
        <a
          href="#"
          v-scroll-to="'#projects'"
          class="block pt-3 pr-4 sm:pt-0 sm:px-4 hover:text-indigo-300"
        >Projects</a>
        <span class="hidden cursor-default sm:block sm:px-1">/</span>
        <a
          href="#"
          v-scroll-to="'#contact'"
          class="block pt-3 sm:pt-0 sm:px-4 hover:text-indigo-300"
        >Contact</a>
      </div>

      <div class="flex items-center mt-3">
        <a href="https://www.github.com/Stefarian" target="_blank">
          <svg
            class="w-5 h-5 mr-3 text-white fill-current hover:text-indigo-300"
            viewBox="0 0 24 24"
          >
            <defs />
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
        <a class="cursor-pointer" href="https://www.linkedin.com/in/st-cook/" target="_blank">
          <svg class="w-5 h-5 text-white fill-current hover:text-indigo-300" viewBox="0 0 24 24">
            <defs />
            <path
              d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      class="flex items-center justify-center px-4 py-2 text-xs font-semibold text-center text-white bg-black"
    >
      <span>
        Built in
        <a
          class="font-bold text-indigo-400 hover:text-indigo-300"
          href="https://cincinnatiusa.com/"
        >Cincinnati, OH 📍</a>
        with
        <a
          class="font-bold text-indigo-400 hover:text-indigo-300"
          href="https://tailwindcss.com/"
        >Tailwind CSS</a>
        &
        <a
          class="font-bold text-indigo-400 hover:text-indigo-300"
          href="https://nuxtjs.org/"
        >NuxtJS</a>, hosted on
        <a
          class="font-bold text-indigo-400 hover:text-indigo-300"
          href="https://www.netlify.com/"
        >Netlify</a>
        ❤️️
        <span class="block text-xs text-white">© Copyright 2020</span>
      </span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
