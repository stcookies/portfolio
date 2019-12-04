<template>
  <section class="h-screen">
    <div class="my-container xl:max-w-6xl flex mx-auto mt-56">
      <div class="px-8 w-full sm:w-3/4 md:w-1/2 lg:w-5/6">
        <div class="border-b border-2 border-white w-1/6"></div>
        <span class="block pt-8 text-white text-4xl sm:text-5xl md:text-6xl font-semibold leading-none">Full Stack Developer, Breakfast Enthusiast.</span>
        <div class="hidden xl:block">
          <p class="sm:text-xl pt-8 text-indigo-300 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptas rerum, sit iure obcaecati magni est quibusdam impedit porro temporibus nulla voluptatum molestias aut distinctio vel nisi alias quas.</p>
          <div class="pt-12">
            <a class="btn btn-primary mr-4" href="#">My Work</a>
            <a class="btn btn-secondary" href="#">Contact</a>
          </div>
        </div>
      </div>
      <div class="px-8 flex items-center hidden sm:block">
        <img class="h-auto bg-gray-900 rounded-full shadow-xl" src="~/assets/img/avatar.png" alt="Stephen Cook Avatar">
      </div>
    </div>
    <div class="my-container px-8 mx-auto xl:hidden">
      <p class="pt-8 text-indigo-300 font-semibold text-lg sm:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptas rerum, sit iure obcaecati magni est quibusdam impedit porro temporibus nulla voluptatum molestias aut distinctio vel nisi alias quas.</p>
      <div class="pt-8">
        <a class="btn btn-primary mr-4" href="#">My Work</a>
        <a class="btn btn-secondary mt-4 sm:mt-0" href="#">Contact</a>
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
