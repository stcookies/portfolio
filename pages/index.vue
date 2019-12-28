<template>
  <div>
    <section class="my-container mx-auto">
      <div class="xl:max-w-6xl flex sm:items-center lg:items-start mt-32">
        <div class="w-full sm:w-2/3 lg:w-3/4 sm:pr-4">
          <div class="border-b border-2 border-white w-1/6"></div>
          <span class="block pt-8 text-white text-4xl sm:text-6xl font-semibold leading-none">Stephen Cook,
            <br> Full Stack Developer.</span>
          <div class="hidden xl:block">
            <p class="sm:text-xl max-w-xl pt-8 text-indigo-300 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptas rerum, sit iure obcaecati magni est quibusdam impedit porro temporibus nulla voluptatum molestias aut distinctio vel nisi alias quas.</p>
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
    </section>
    <section class="bg-gray-700">
      <div class="my-container mx-auto">
        <div class="flex justify-center flex-wrap mt-20 sm:mt-64 xl:-mx-3">
          <div v-for="(skill, index) in skillCards" :key="index" class="py-8 w-full xl:py-10 xl:w-1/3 xl:px-3 xl:-mt-32">
            <div class="relative flex h-full justify-center px-4 py-16 bg-white rounded shadow-xl border-t-8 border-indigo-600">
              <div class="absolute -top-12 flex items-center justify-center rounded-full bg-indigo-600 shadow-2xl h-24 w-24">
                <img class="h-10 w-10" :src="require('~/assets/img/' + skill.icon + '.svg')">
              </div>
              <div class="flex flex-col items-center text-center pt-2">
                <span class="font-bold text-gray-800 text-2xl">{{ skill.name }}</span>
                <p class="py-8 max-w-sm lg:max-w-lg xl:max-w-xl text-gray-700 font-semibold">{{ skill.body }}</p>
                <span class="text-indigo-500 text-center uppercase font-semibold text-xs">{{ skill.technologies }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-700 pt-24">
      <div class="py-32 my-container mx-auto">
        <h1 class="font-semibold text-white text-4xl">Work</h1>
        <div></div>
      </div>
    </section>
    <section class="" id="contact">
      <div class="py-12 flex flex-wrap justify-center my-container mx-auto">
        <div class="w-full md:w-1/2">
          <h1 class="font-semibold text-white text-4xl">Contact</h1>
          <p class="pt-4 pr-16 text-lg text-indigo-300 font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta unde mollitia nostrum aspernatur, quod, nemo maxime provident, totam dicta reiciendis numquam aut blanditiis commodi dolore debitis aliquam odio incidunt perferendis!</p>
        </div>
        <div class="w-full pt-8 md:w-1/2">
          <div style="margin-bottom: -11.2rem">
            <form netlify name="contact" class="max-w-xl p-10 bg-gray-100 shadow-xl rounded">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                  Full Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="name" type="text">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="email" type="text">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                  Message
                </label>
                <textarea rows="5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="message" type="text"></textarea>
              </div>
              <div class="pt-4">
                <a class="w-full text-center btn btn-primary" href="#">Submit</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      skillCards: [
        {
          icon: 'code',
          name: 'Front-End Development',
          body: 'I have a strong passion for crafting elegant, responsive, and performant user interfaces with the latest technologies.',
          technologies: 'JavaScript / Vue / Nuxt / React / HTML5 / CSS3'
        },
        {
          icon: 'cog',
          name: 'Back-End Development',
          body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quibusdam voluptates sapiente porro corporis.',
          technologies: 'Node / Express / Rails / MongoDB / MySQL'
        },
        {
          icon: 'heart',
          name: 'Well Tested Code',
          body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quibusdam voluptates sapiente porro.',
          technologies: 'Mocha / Chai / RSpec'
        }
      ]
    }
  }
}
</script>

<style>
</style>
