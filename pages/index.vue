<template>
  <section class="my-container mx-auto">
    <div class="xl:max-w-6xl flex mt-56">
      <div class="w-full sm:w-3/5">
        <div class="border-b border-2 border-white w-1/6"></div>
        <span class="block pt-8 text-white text-4xl sm:text-6xl font-semibold leading-none">Full Stack Developer, Breakfast Enthusiast.</span>
        <div class="hidden xl:block">
          <p class="sm:text-xl pt-8 text-indigo-300 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptas rerum, sit iure obcaecati magni est quibusdam impedit porro temporibus nulla voluptatum molestias aut distinctio vel nisi alias quas.</p>
          <div class="pt-12">
            <a class="btn btn-primary mr-4" href="#">My Work</a>
            <a class="btn btn-secondary" href="#">Contact</a>
          </div>
        </div>
      </div>
      <div class="flex items-center hidden sm:block">
        <img class="h-auto bg-gray-900 rounded-full shadow-xl" src="~/assets/img/avatar.png" alt="Stephen Cook Avatar">
      </div>
    </div>
    <div class="xl:hidden">
      <p class="pt-8 text-indigo-300 font-semibold text-lg sm:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptas rerum, sit iure obcaecati magni est quibusdam impedit porro temporibus nulla voluptatum molestias aut distinctio vel nisi alias quas.</p>
      <div class="pt-8">
        <a class="btn btn-primary mr-4" href="#">My Work</a>
        <a class="btn btn-secondary mt-4 sm:mt-0" href="#">Contact</a>
      </div>
    </div>
    <div class="flex flex-wrap my-24 xl:-mx-3">
      <div class="w-full py-3 xl:py-0 xl:w-1/3 xl:px-3">
        <div class="relative flex justify-center py-12 bg-gray-100 rounded-lg shadow-xl">
          <div class="absolute -top-12 rounded-full bg-white border-2 border-indigo-500 shadow-xl h-24 w-24">
          </div>
          <div class="flex flex-col items-center px-5 pt-2">
            <span class="font-bold text-gray-800 uppercase text-xl">UI Development</span>
            <p class="pt-4 font-semibold text-center text-indigo-500">I have a strong passion for crafting elegant and performant user interfaces with the latest UI technologies.</p>
            <span class="pt-6 text-gray-600 text-center uppercase font-semibold text-xs">Vue / Nuxt / React / HTML5 / CSS</span>
          </div>
        </div>
      </div>
      <div class="w-full py-3 xl:py-0 xl:w-1/3 xl:px-3">
        <div class="relative flex justify-center py-12 bg-gray-100 rounded-lg shadow-xl">
          <div class="absolute -top-12 self-center rounded-full bg-white border-2 border-indigo-500 shadow-xl h-24 w-24">
          </div>
          <div class="flex flex-col items-center px-5 pt-2">
            <span class="font-bold text-gray-800 uppercase text-xl">Back-End Development</span>
            <p class="pt-4 font-semibold text-center text-indigo-500">I have a strong passion for crafting elegant and performant user interfaces with the latest UI technologies.</p>
            <span class="pt-6 text-gray-600 text-center uppercase font-semibold text-xs">Node / Express / PHP / Laravel</span>
          </div>
        </div>
      </div>
      <div class="w-full py-3 xl:py-0 xl:w-1/3 xl:px-3">
        <div class="relative flex justify-center py-12 bg-gray-100 rounded-lg shadow-xl">
          <div class="absolute -top-12 self-center rounded-full bg-white border-2 border-indigo-500 shadow-xl h-24 w-24">
          </div>
          <div class="flex flex-col items-center px-5 pt-2">
            <span class="font-bold text-gray-800 uppercase text-xl">Nacho Slop Development</span>
            <p class="pt-4 font-semibold text-center text-indigo-500">I have a strong passion for crafting elegant and performant user interfaces with the latest UI technologies.</p>
            <span class="pt-6 text-gray-600 text-center uppercase font-semibold text-xs">Node / Express / PHP / Laravel</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
</style>
