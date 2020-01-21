<template>
  <div>
    <section class="py-20 mx-auto xl:py-32 my-container" id="about">
      <div class="flex xl:max-w-6xl sm:items-center lg:items-start">
        <div class="w-full sm:w-2/3 lg:w-3/4 sm:pr-4">
          <div class="w-16 border-4 border-b border-white"></div>
          <span class="block pt-8 text-4xl font-semibold leading-none text-white sm:text-6xl">Stephen Cook,<br>Front-End Developer</span>
          <div class="hidden xl:block">
            <p class="max-w-xl pt-8 font-semibold text-indigo-300 sm:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptas rerum, sit iure obcaecati magni est quibusdam impedit porro temporibus nulla voluptatum molestias aut distinctio vel nisi alias quas.</p>
            <div class="pt-12">
              <a class="mr-4 btn btn-primary" href="#" v-scroll-to="'#projects'">My Work</a>
              <a class="btn btn-secondary" href="#" v-scroll-to="'#contact'">Contact</a>
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
    <section class="pt-10 bg-gray-700 sm:mt-24">
      <div class="mx-auto my-container">
        <div class="flex flex-wrap justify-center xl:-mx-3">
          <div class="w-full py-3 lg:px-2 sm:-mt-40 xl:py-10 xl:w-1/3 xl:px-3">
            <div class="relative overflow-hidden bg-gray-800 border-2 border-indigo-500 rounded shadow-xl">
              <svg class="absolute z-0 h-56 text-gray-600 opacity-25 fill-current" style="bottom:0; right:0;" viewBox="0 0 24 24">
                <defs/>
                <path d="M20.59 12l-3.3-3.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4A1 1 0 016.7 8.7L3.4 12zm7.56 8.24a1 1 0 01-1.94-.48l4-16a1 1 0 111.94.48l-4 16z" class="heroicon-ui"/>
              </svg>
              <div class="relative z-50 flex flex-col items-center justify-between h-full px-4 py-12 text-center">
                <span class="text-xl font-semibold tracking-wide text-white uppercase">Front-End Development</span>
                <p class="max-w-lg pt-6 pb-12 font-semibold text-indigo-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus optio itaque cum ab impedit voluptatibus vitae vero repudiandae. Dignissimos voluptate cumque maxime veniam exercitationem odio placeat nobis aspernatur dicta?</p>
                <span class="text-xs font-bold text-center text-white uppercase">JavaScript / Vue / Nuxt / React / HTML5 / CSS3</span>
              </div>
            </div>
          </div>
          <div class="w-full py-3 lg:px-2 xl:py-10 xl:w-1/3 xl:px-3 xl:-mt-40">
            <div class="relative overflow-hidden bg-gray-800 border-2 border-indigo-500 rounded shadow-xl">
              <svg class="absolute z-0 h-56 text-gray-600 opacity-25 fill-current" style="bottom:0; right:0;" viewBox="0 0 24 24">
                <defs/>
                <path d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 012 2v.58a8 8 0 011.92 1.11l.5-.29a2 2 0 012.74.73l1 1.74a2 2 0 01-.73 2.73l-.5.29a8.06 8.06 0 010 2.22l.5.3a2 2 0 01.73 2.72l-1 1.74a2 2 0 01-2.73.73l-.5-.3A8 8 0 0115 19.43V20a2 2 0 01-2 2h-2a2 2 0 01-2-2v-.58a8 8 0 01-1.92-1.11l-.5.29a2 2 0 01-2.74-.73l-1-1.74a2 2 0 01.73-2.73l.5-.29a8.06 8.06 0 010-2.22l-.5-.3a2 2 0 01-.73-2.72l1-1.74a2 2 0 012.73-.73l.5.3A8 8 0 019 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 000 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 002.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 002.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 000-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 00-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 00-2.41 1.4zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" class="heroicon-ui"/>
              </svg>
              <div class="relative z-50 flex flex-col items-center justify-between h-full px-4 py-12 text-center">
                <span class="text-xl font-semibold tracking-wide text-white uppercase">Back-End Development</span>
                <p class="max-w-lg pt-6 pb-12 font-semibold text-gray-800 text-indigo-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus optio itaque cum ab impedit voluptatibus vitae vero repudiandae. Dignissimos voluptate cumque maxime veniam exercitationem odio placeat nobis aspernatur dicta?</p>
                <span class="text-xs font-bold text-center text-white uppercase">Node / Express / Rails / MongoDB / MySQL</span>
              </div>
            </div>
          </div>
          <div class="w-full py-3 lg:px-2 xl:py-10 xl:w-1/3 xl:px-3 xl:-mt-40">
            <div class="relative overflow-hidden bg-gray-800 border-2 border-indigo-500 rounded shadow-xl">
              <svg class="absolute z-0 h-56 text-gray-600 opacity-25 fill-current" style="bottom:0; right:0;" viewBox="0 0 24 24">
                <defs/>
                <path d="M12.76 3.76a6 6 0 018.48 8.48l-8.53 8.54a1 1 0 01-1.42 0l-8.53-8.54a6 6 0 018.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 10-5.66-5.66l-1.46 1.47a1 1 0 01-1.42 0L9.83 5.17a4 4 0 10-5.66 5.66L12 18.66l7.83-7.83z" class="heroicon-ui"/>
              </svg>
              <div class="relative z-50 flex flex-col items-center justify-between h-full px-4 py-12 text-center">
                <span class="text-xl font-semibold tracking-wide text-white uppercase">Well Tested Code</span>
                <p class="max-w-lg pt-6 pb-12 font-semibold text-indigo-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in autem ad quaerat similique cupiditate voluptates, harum voluptate perspiciatis nisi eaque eius facere, ex laborum quas ratione natus corporis excepturi!</p>
                <span class="text-xs font-bold text-center text-white uppercase">Mocha / Chai / RSpec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10 bg-gray-700" id="experience">
      <div class="mx-auto my-container">
        <h1 class="text-3xl font-semibold tracking-widest text-white uppercase">Experience</h1>
        <div class="mt-6 border-2 border-indigo-500 rounded shadow-xl">
          <div class="px-12 py-16 bg-gray-800">
            <div>
              <span class="block text-xl font-semibold text-white uppercase">Warcraft Market - Founder & Developer</span>
              <span class="block text-lg text-white uppercase">2013 - Present</span>
              <p class="pt-4 text-lg text-indigo-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit culpa maiores voluptatum veniam suscipit quidem et quod iure labore magni quae dolor sint, nobis doloribus dolorem accusamus consectetur minima quia numquam dignissimos, voluptates minus! Aspernatur accusamus eaque minus esse nam officiis itaque animi. Beatae, non. Accusantium, magni corporis exercitationem nemo adipisci iusto ipsum expedita sequi magnam inventore in suscipit.</p>
            </div>
            <div class="mt-20">
              <span class="block text-xl font-semibold text-white uppercase">InMobi - Software Developer</span>
              <span class="block text-lg text-white uppercase">June 2018 - June 2019</span>
              <p class="pt-4 text-lg text-indigo-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam officia sit esse amet quas vel quis consequatur vitae alias ipsam nemo placeat doloremque, iusto, inventore odit rem officiis atque. Obcaecati reprehenderit numquam ut quo non facere magni, excepturi consequuntur aliquid, repellendus, exercitationem totam minus recusandae quos dolore cupiditate dolorum laboriosam quisquam commodi porro laborum nobis hic eligendi harum? Corrupti fuga est quis, ab soluta numquam voluptatum quibusdam minima. Sit, blanditiis!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 bg-gray-700" id="projects">
      <div class="mx-auto my-container">
        <h1 class="mb-6 text-3xl font-semibold tracking-widest text-white uppercase">Projects</h1>
        <div v-for="(project, index) in projects" :key="index" :class="{ 'mt-16': index > 0 }">
          <div class="relative flex items-center hidden rounded xl:flex">
            <div class="z-10 w-3/5">
              <img class="rounded-t object-fit" :src="require('~/assets/img/' + project.img + '-xl.jpg')" />
            </div>
            <div class="absolute z-40 w-3/5 pl-16" style="right: 0">
              <div class="p-8 bg-gray-800 border-2 border-indigo-500 rounded shadow-xl">
                <span class="text-xl font-semibold text-white uppercase">{{ project.title }}</span>
                <p class="pt-4 text-lg text-indigo-300">{{ project.description }}</p>
                <a v-if="project.link" class="block pt-3 font-semibold text-white cursor-pointer hover:text-indigo-200" :href="project.link" target="_blank">View Project &#8594;</a>
                <span class="block pt-6 text-xs font-semibold text-white uppercase">{{ project.technologies }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center xl:hidden">
            <div class="overflow-hidden bg-gray-800 rounded">
              <img class="object-cover w-full" :src="require('~/assets/img/' + project.img + '.jpg')" />
              <div class="flex flex-col justify-center px-10 pt-5 pb-10">
                <span class="text-2xl font-semibold text-white uppercase">{{ project.title }}</span>
                <p class="pt-4 text-lg text-indigo-300">{{ project.description }}</p>
                <a v-if="project.link" class="block pt-3 font-semibold text-white cursor-pointer hover:text-indigo-200" :href="project.link" target="_blank">View Project &#8594;</a>
                <span class="block pt-6 text-xs font-semibold text-white uppercase">{{ project.technologies }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="flex flex-wrap justify-center py-12 mx-auto my-container">
        <div class="w-full lg:w-1/3 xl:w-1/2">
          <h1 class="text-3xl font-semibold tracking-widest text-white uppercase">Contact</h1>
          <p class="pr-16 mt-6 text-lg text-indigo-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta unde mollitia nostrum aspernatur, quod, nemo maxime provident, totam dicta reiciendis numquam aut blanditiis commodi dolore debitis aliquam odio incidunt perferendis!</p>
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
  data() {
    return {
      projects: [
        { title: 'Warcraft Market', technologies: 'Vue / Nuxt / Bootstrap-Vue / MongoDB / Node / Express', link: 'https://www.warcraftmarket.com', img: 'warcraftmarket', description: 'Started as a passion project forged from my love of World of Warcraft, Warcraft Market is a middleman service that connects buyers of in-game items and services with teams of professional players that can fulfill the clients needs.' },
        { title: 'Weather Dash', technologies: 'React / Tailwind CSS / Netlify Functions / Mapquest & Darksky API', link: 'https://www.weatherdash.app', img: 'weatherdash', description: ' A better browser start page with a focus on the weather in your area. Weather data is provided by the wonderful DarkSky API, geolocation and location search ahead results courtesy of MapQuest’s API.' },
        { title: 'Trip Me', technologies: 'Vue / Tailwind CSS', link: 'https://trip-me.netlify.com', img: 'tripme', description: 'A landing page for a mock travel agency, Trip Me, that provides pre-packaged trip itineraries for clients. The page is fully responsive with design considerations taken into account for every screen size.' }
      ]
    }
  }
}
</script>

<style>
</style>
