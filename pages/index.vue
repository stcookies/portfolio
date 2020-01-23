<template>
  <div>
    <section class="py-20 mx-auto xl:py-32 my-container" id="about">
      <div class="flex xl:max-w-6xl sm:items-center lg:items-start">
        <div class="w-full sm:w-2/3 lg:w-3/4 sm:pr-4">
          <div class="w-16 border-4 border-b border-white"></div>
          <span class="block pt-8 text-4xl font-semibold leading-none text-white sm:text-6xl">Stephen Cook,<br>Web Developer</span>
          <div class="hidden xl:block">
            <p class="max-w-xl pt-8 font-semibold text-indigo-300 sm:text-xl">I’m a Cincinnati, OH based developer passionate about creating everything from static sites to dynamic web apps. I received my BS in Computer Science from UC Irvine in 2016, and since then have founded my own business, Warcraft Market, and worked as a Software Developer at InMobi. I have extensive experience building apps with Vue and Node, and am always eager to learn more about emerging technologies.</p>
            <div class="pt-12">
              <button class="mr-4 btn btn-primary" v-scroll-to="'#projects'">My Work</button>
              <button class="btn btn-secondary" v-scroll-to="'#contact'">Contact</button>
            </div>
          </div>
        </div>
        <div class="flex items-center hidden sm:block">
          <img class="h-auto bg-gray-900 rounded-full shadow-xl" src="~/assets/img/avatar.png" alt="Stephen Cook Avatar">
        </div>
      </div>
      <div class="xl:hidden">
        <p class="pt-8 text-lg font-semibold text-indigo-300 sm:text-xl">I’m a Cincinnati, OH based developer passionate about creating everything from static sites to dynamic web apps. I received my BS in Computer Science from UC Irvine in 2016, and since then have founded my own business, Warcraft Market, and worked as a Software Developer at InMobi. I have extensive experience building apps with Vue and Node, and am always eager to learn more about emerging technologies.</p>
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
            <div class="relative overflow-hidden bg-gray-800 border-2 border-indigo-500 rounded shadow-xl h-skill-card">
              <svg class="absolute z-0 h-56 text-gray-600 opacity-25 fill-current" style="bottom:0; right:0;" viewBox="0 0 24 24">
                <defs/>
                <path d="M20.59 12l-3.3-3.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4A1 1 0 016.7 8.7L3.4 12zm7.56 8.24a1 1 0 01-1.94-.48l4-16a1 1 0 111.94.48l-4 16z" class="heroicon-ui"/>
              </svg>
              <div class="relative z-50 flex flex-col items-center h-full px-4 py-12 text-center">
                <span class="text-xl font-semibold tracking-wide text-white uppercase">Front-End Development</span>
                <p class="max-w-lg my-auto font-semibold text-indigo-300">I transform any design into a pixel-perfect, responsive, and performant interface that users will love.</p>
                <span class="block mt-auto text-xs font-bold text-center text-white uppercase">JavaScript / Vue / Nuxt / React / HTML5 / CSS3</span>
              </div>
            </div>
          </div>
          <div class="w-full py-3 lg:px-2 xl:py-10 xl:w-1/3 xl:px-3 xl:-mt-40">
            <div class="relative overflow-hidden bg-gray-800 border-2 border-indigo-500 rounded shadow-xl h-skill-card">
              <svg class="absolute z-0 h-56 text-gray-600 opacity-25 fill-current" style="bottom:0; right:0;" viewBox="0 0 24 24">
                <defs/>
                <path d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 012 2v.58a8 8 0 011.92 1.11l.5-.29a2 2 0 012.74.73l1 1.74a2 2 0 01-.73 2.73l-.5.29a8.06 8.06 0 010 2.22l.5.3a2 2 0 01.73 2.72l-1 1.74a2 2 0 01-2.73.73l-.5-.3A8 8 0 0115 19.43V20a2 2 0 01-2 2h-2a2 2 0 01-2-2v-.58a8 8 0 01-1.92-1.11l-.5.29a2 2 0 01-2.74-.73l-1-1.74a2 2 0 01.73-2.73l.5-.29a8.06 8.06 0 010-2.22l-.5-.3a2 2 0 01-.73-2.72l1-1.74a2 2 0 012.73-.73l.5.3A8 8 0 019 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 000 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 002.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 002.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 000-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 00-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 00-2.41 1.4zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" class="heroicon-ui"/>
              </svg>
              <div class="relative z-50 flex flex-col items-center h-full px-4 py-12 text-center">
                <span class="text-xl font-semibold tracking-wide text-white uppercase">Back-End Development</span>
                <p class="max-w-lg my-auto font-semibold text-gray-800 text-indigo-300">I build restful APIs, as well as work with 3rd party APIs and services to create a fast and maintainable back-end for any app.</p>
                <span class="block mt-auto text-xs font-bold text-center text-white uppercase">Node / Express / Rails / MongoDB / MySQL</span>
              </div>
            </div>
          </div>
          <div class="w-full py-3 lg:px-2 xl:py-10 xl:w-1/3 xl:px-3 xl:-mt-40">
            <div class="relative overflow-hidden bg-gray-800 border-2 border-indigo-500 rounded shadow-xl h-skill-card">
              <svg class="absolute z-0 h-56 text-gray-600 opacity-25 fill-current" style="bottom:0; right:0;" viewBox="0 0 24 24">
                <defs/>
                <path d="M12.76 3.76a6 6 0 018.48 8.48l-8.53 8.54a1 1 0 01-1.42 0l-8.53-8.54a6 6 0 018.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 10-5.66-5.66l-1.46 1.47a1 1 0 01-1.42 0L9.83 5.17a4 4 0 10-5.66 5.66L12 18.66l7.83-7.83z" class="heroicon-ui"/>
              </svg>
              <div class="relative z-50 flex flex-col items-center h-full px-4 py-12 text-center">
                <span class="text-xl font-semibold tracking-wide text-white uppercase">Well Tested Code</span>
                <p class="max-w-lg my-auto font-semibold text-indigo-300">Code confidence is extremely important. That’s why I always build a robust suite of unit tests for any new feature added to a code base.</p>
                <span class="block mt-auto text-xs font-bold text-center text-white uppercase">Mocha / Chai / RSpec</span>
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
              <div class="pt-4 text-lg text-indigo-300">
                <p>I founded Warcraft Market in 2013 to be the go-to site for any in-game item or service. The site is built with Vue / Nuxt / Bootstrap-vue on the front-end, and Node / Express on the back-end. I’m constantly working to improve the site by adding new features, and am currently working on a client login portal and rewards system.</p>
                <p class="pt-3"> On the business side, my team and I service clients from around the globe, including North America, Europe, and Australia. We have serviced over ten-thousand customers since 2013 and continue to grow year after year.</p>
              </div>
            </div>
            <div class="w-full my-10 border-b border-indigo-300 opacity-25"></div>
            <div>
              <span class="block text-xl font-semibold text-white uppercase">InMobi - Software Developer</span>
              <span class="block text-lg text-white uppercase">June 2018 - June 2019</span>
              <div class="pt-4 text-lg text-indigo-300">
                <p>InMobi is a global provider of enterprise platforms for marketers. The platform enables consumers to discover new products and services by providing contextual, relevant, and curated recommendations on mobile apps and devices. At InMobi, I was responsible for maintaining and adding features to the existing platform built with Ruby on Rails and jQuery.</p>
                <p class="pt-3">Additionally, my team and I worked closely with UX/UI designers to build a newer and more modern platform using Vue / Node, and built out unit-tests for each feature using Mocha. Other responsibilities included assigning tickets to developers on my team, giving feedback to more junior developers, and ensuring the code being written was clean and consistent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 bg-gray-700" id="projects">
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
          <p class="pr-16 mt-6 text-lg text-indigo-300">Have a project or position you think I’d be a good fit for? Just want to say hello? Please reach out!</p>
        </div>
        <div class="w-full py-8 lg:w-2/3 xl:w-1/2">
          <div class="-mb-48">
            <form @submit.prevent="handleSubmit" v-if="!submitting" data-netlify="true" method="post" data-netlify-honeypot="bot-field" name="contact" class="max-w-2xl p-10 bg-gray-100 rounded shadow-xl">
              <input type="hidden" name="form-name" value="contact" />
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="name">
                  Full Name
                </label>
                <input v-model="form.name" class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" type="text">
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input v-model="form.email" class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="text">
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="message">
                  Message
                </label>
                <textarea v-model="form.message" rows="5" class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="message" type="text"></textarea>
              </div>
              <div class="pt-4">
                <button type="submit" class="w-full text-center btn btn-primary">Submit</button>
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
      form: {
        name: null,
        email: null,
        message: null
      },
      submitting: false,
      submitSuccess: false,
      skills: [
        { title : 'Front-End Development', description: 'I transform any design into a pixel-perfect, responsive, and performant interface that users will love.', tech: ' JavaScript / Vue / Nuxt / React', icon: 'code' },
        { title : 'Back-End Development', description: 'I build restful APIs, as well as work with 3rd party APIs and services to create a fast and maintainable back-end for any app.', tech: 'Node / Express / Rails / MongoDB / MySQL', icon: 'cog' },
        { title : 'Well Tested Code', description: 'Code confidence is extremely important. That’s why I always build a robust suite of unit tests for any new feature added to a code base.', tech: 'Mocha / Chai / RSpec', icon: 'heart' },
      ],
      projects: [
        { title: 'Warcraft Market', technologies: 'Vue / Nuxt / Bootstrap-Vue / MongoDB / Node / Express', link: 'https://www.warcraftmarket.com', img: 'warcraftmarket', description: 'Started as a passion project forged from my love of World of Warcraft, Warcraft Market is a middleman service that connects buyers of in-game items and services with teams of professional players that can fulfill the clients needs.' },
        { title: 'Weather Dash', technologies: 'React / Tailwind CSS / Netlify Functions / Mapquest & Darksky API', link: 'https://www.weatherdash.app', img: 'weatherdash', description: 'A better browser start page with a focus on the weather in your area. Weather Dash utilizes Netlify Functions to query the DarkSky & MapQuest APIs to provide weather, geolocation, and search ahead results.' },
        { title: 'Trip Me', technologies: 'Vue / Tailwind CSS', link: 'https://trip-me.netlify.com', img: 'tripme', description: 'A landing page for a mock travel agency, Trip Me, that provides pre-packaged trip itineraries for clients. The page is fully responsive with design considerations taken into account for every screen size.' }
      ]
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      if (process.env.NODE_ENV === 'production') {
        this.submitting = true;
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        this.$axios.post("/submit", this.encode({
            "form-name": "contact",
            ...this.form
          }), axiosConfig)
        .then(() => {
          this.submitting = false;
          this.submitSuccess = true;
        })
        .catch((err) => {
          console.log(err);
        })
      }
      else {
        this.submitting = true;
        setTimeout(() => {
          this.submitting = false;
          this.submitSuccess = true;
        }, 5000);
      }
    }
  }
}
</script>

<style>
</style>
