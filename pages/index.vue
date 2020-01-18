<template>
  <div>
    <section class="mx-auto my-container">
      <div class="flex mt-32 xl:max-w-6xl sm:items-center lg:items-start">
        <div class="w-full sm:w-2/3 lg:w-3/4 sm:pr-4">
          <div class="w-1/6 border-2 border-b border-white"></div>
          <span class="block pt-8 text-4xl font-semibold leading-none text-white sm:text-6xl">Stephen Cook,
            <br>Front-End Developer</span>
          <div class="hidden xl:block">
            <p class="max-w-xl pt-8 font-semibold text-indigo-300 sm:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptas rerum, sit iure obcaecati magni est quibusdam impedit porro temporibus nulla voluptatum molestias aut distinctio vel nisi alias quas.</p>
            <div class="pt-12">
              <a class="mr-4 btn btn-primary" href="#">My Work</a>
              <a class="btn btn-secondary" href="#">Contact</a>
            </div>
          </div>
        </div>
        <div class="flex items-center hidden sm:block">
          <img class="h-auto bg-gray-900 rounded-full shadow-xl" src="~/assets/img/avatar.png" alt="Stephen Cook Avatar">
        </div>
      </div>
      <div class="xl:hidden">
        <p class="pt-8 text-lg font-semibold text-indigo-300 sm:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptas rerum, sit iure obcaecati magni est quibusdam impedit porro temporibus nulla voluptatum molestias aut distinctio vel nisi alias quas.</p>
        <div class="pt-8">
          <a class="mr-4 btn btn-primary" href="#">My Work</a>
          <a class="mt-4 btn btn-secondary sm:mt-0" href="#">Contact</a>
        </div>
      </div>
    </section>
    <section class="bg-gray-700">
      <div class="mx-auto my-container">
        <div class="flex flex-wrap justify-center mt-20 sm:mt-64 xl:-mx-3">
          <div v-for="(skill, index) in skillCards" :key="index" class="w-full max-w-sm px-2 py-8 xl:py-10 xl:w-1/3 xl:px-3 xl:-mt-32">
            <div class="relative flex justify-center h-full px-4 py-16 bg-white border-t-8 border-indigo-600 rounded shadow-xl">
              <div class="absolute flex items-center justify-center w-24 h-24 bg-indigo-600 rounded-full shadow-2xl -top-12">
                <img class="w-10 h-10" :src="require('~/assets/img/' + skill.icon + '.svg')">
              </div>
              <div class="flex flex-col items-center pt-2 text-center">
                <span class="text-2xl font-semibold text-gray-800">{{ skill.name }}</span>
                <p class="max-w-sm py-8 text-gray-700 lg:max-w-lg xl:max-w-xl">{{ skill.body }}</p>
                <span class="text-xs font-semibold text-center text-indigo-500 uppercase">{{ skill.technologies }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10 pb-20 bg-gray-700">
      <div class="pb-10 mx-auto my-container">
        <h1 class="pb-4 text-4xl font-semibold text-white">My Work</h1>
        <div v-for="(project, index) in projects" :key="index">
          <div class="relative flex items-center hidden pb-16 rounded xl:flex">
            <div class="z-10 w-3/5">
              <img class="object-cover w-full h-full rounded" :src="project.img" />
            </div>
            <div class="absolute z-40 w-3/5" style="right: 0">
              <div class="p-8 bg-gray-800 rounded shadow-xl">
                <span class="text-2xl font-semibold text-white">{{ project.title }}</span>
                <p class="pt-4 text-lg text-indigo-300">{{ project.description }}</p>
                <a v-if="project.link" class="block pt-3 font-semibold text-white cursor-pointer hover:text-indigo-200" :href="project.link" target="_blank">View Project &#8594;</a>
                <span class="block pt-6 text-xs font-semibold text-white uppercase">{{ project.technologies }}</span>
              </div>
            </div>
          </div>
          <div class="xl:hidden">
            <div class="w-auto h-full pb-6">
              <img class="rounded-t object-fit" :src="project.img" />
              <div class="flex flex-col justify-center w-full h-full p-8 rounded-b" style="top: 0; background-color: rgba(26, 32, 44, 0.75)">
                <span class="text-3xl font-semibold text-white">{{ project.title }}</span>
                <p class="pt-4 text-lg text-indigo-300">{{ project.description }}</p>
                <a v-if="project.link" class="block pt-3 font-semibold text-white cursor-pointer hover:text-indigo-200" :href="project.link" target="_blank">View Project &#8594;</a>
                <span class="block pt-6 text-xs font-semibold text-white uppercase">{{ project.technologies }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="" id="contact">
      <div class="flex flex-wrap justify-center py-12 mx-auto my-container">
        <div class="w-full lg:w-1/3 xl:w-1/2">
          <h1 class="text-4xl font-semibold text-white">Contact</h1>
          <p class="pt-4 pr-16 text-lg text-indigo-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta unde mollitia nostrum aspernatur, quod, nemo maxime provident, totam dicta reiciendis numquam aut blanditiis commodi dolore debitis aliquam odio incidunt perferendis!</p>
        </div>
        <div class="w-full py-8 lg:w-2/3 xl:w-1/2">
          <div class="-mb-48">
            <form netlify name="contact" class="max-w-2xl p-10 bg-gray-100 rounded shadow-xl">
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="name">
                  Full Name
                </label>
                <input class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" type="text">
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="text">
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="message">
                  Message
                </label>
                <textarea rows="5" class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="message" type="text"></textarea>
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
      ],
      projects: [
        { title: 'Software Developer @ InMobi', technologies: 'jQuery / Ruby on Rails / RSpec / Vue / MySQL', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=500&q=80', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit temporibus sed dolores consequuntur maxime reprehenderit illum omnis est dignissimos?' },
        { title: 'Warcraft Market', technologies: 'Vue / Nuxt / Bootstrap-Vue / MongoDB / Node / Express', link: 'https://www.warcraftmarket.com', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=500&q=80', description: 'Started as a passion project forged from my love of World of Warcraft, Warcraft Market is a middleman service that connects buyers of in-game items and services with teams of professional players that can fulfill the clients needs.' },
        { title: 'Weather Dash', technologies: 'React / Tailwind CSS / Netlify Functions / Mapquest & Darksky API', link: 'https://www.weatherdash.app', img: 'https://images.unsplash.com/photo-1553984840-ec965a23cddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=500&q=80', description: ' A better browser start page with a focus on the weather in your area. Weather data is provided by the wonderful DarkSky API, geolocation and location search ahead results courtesy of MapQuest’s API.' },
        { title: 'Trip Me', technologies: 'Vue / Tailwind CSS', link: 'https://trip-me.netlify.com', img: 'https://images.unsplash.com/photo-1553984840-ec965a23cddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=500&q=80', description: 'A landing page for a mock travel agency, Trip Me, that provides pre-packaged trip itineraries for clients. The page is fully responsive with design considerations taken into account for every screen size.' }
      ]
    }
  }
}
</script>

<style>
</style>
