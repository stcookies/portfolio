<template>
  <div>
    <section class="py-20 mx-auto xl:py-32 my-container" id="about">
      <div class="flex xl:max-w-6xl sm:items-center lg:items-start">
        <div class="w-full sm:w-2/3 lg:w-3/4 sm:pr-4">
          <div class="w-16 border-4 border-b border-white"></div>
          <span class="block pt-8 text-4xl font-semibold leading-none text-white sm:text-6xl">
            Stephen Cook,
            <br />Web Developer
          </span>
          <div class="hidden xl:block">
            <p class="max-w-xl pt-8 font-semibold text-indigo-300 sm:text-xl">
              I’m a Cincinnati, OH based developer passionate about creating
              everything from static sites to dynamic web apps. I received my BS
              in Computer Science from UC Irvine in 2016, and since then have
              founded my own business, Warcraft Market, and worked as a Software
              Developer at InMobi. I have extensive experience building apps
              with Vue and Node, and am always eager to learn more about
              emerging technologies.
            </p>
            <div class="pt-12">
              <button class="mr-4 btn btn-primary" v-scroll-to="'#projects'">My Work</button>
              <button class="btn btn-secondary" v-scroll-to="'#contact'">Contact</button>
            </div>
          </div>
        </div>
        <div class="flex items-center hidden sm:block">
          <img
            class="h-auto bg-gray-900 rounded-full shadow-xl"
            src="~/assets/img/avatar.png"
            alt="Stephen Cook Avatar"
          />
        </div>
      </div>
      <div class="xl:hidden">
        <p class="pt-8 text-lg font-semibold text-indigo-300 sm:text-xl">
          I’m a Cincinnati, OH based developer passionate about creating
          everything from static sites to dynamic web apps. I received my BS in
          Computer Science from UC Irvine in 2016, and since then have founded
          my own business, Warcraft Market, and worked as a Software Developer
          at InMobi. I have extensive experience building apps with Vue and
          Node, and am always eager to learn more about emerging technologies.
        </p>
        <div class="pt-8">
          <button class="mr-4 btn btn-primary" v-scroll-to="'#projects'">My Work</button>
          <button class="mt-4 btn btn-secondary" v-scroll-to="'#contact'">Contact</button>
        </div>
      </div>
    </section>
    <section class="pt-10 bg-gray-700 sm:mt-24">
      <div class="mx-auto my-container">
        <div class="flex flex-wrap justify-center xl:-mx-3">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="w-full my-3 lg:px-2 lg:-mt-40 xl:py-10 lg:w-1/3 xl:px-3"
          >
            <div
              class="relative overflow-hidden bg-gray-800 border-2 border-indigo-500 rounded shadow-xl h-skill-card"
            >
              <Code
                v-if="skill.icon === 'code'"
                class="absolute bottom-0 right-0 z-0 h-56 text-gray-600 opacity-25 fill-current"
              />
              <Cog
                v-else-if="skill.icon === 'cog'"
                class="absolute bottom-0 right-0 z-0 h-56 text-gray-600 opacity-25 fill-current"
              />
              <Heart
                v-else-if="skill.icon === 'heart'"
                class="absolute bottom-0 right-0 z-0 h-56 text-gray-600 opacity-25 fill-current"
              />
              <div class="relative z-50 flex flex-col items-center h-full px-4 py-12 text-center">
                <span
                  class="text-xl font-semibold tracking-wide text-white uppercase"
                >{{ skill.title }}</span>
                <p class="max-w-lg my-auto font-semibold text-indigo-300">{{ skill.description }}</p>
                <span
                  class="block mt-auto text-xs font-bold text-center text-white uppercase"
                >{{ skill.tech }}</span>
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
              <span
                class="block text-xl font-semibold text-white uppercase"
              >Warcraft Market - Founder & Developer</span>
              <span class="block text-lg text-white uppercase">2013 - Present</span>
              <div class="pt-4 text-lg text-indigo-300">
                <p>
                  I founded Warcraft Market in 2013 to be the go-to site for any
                  in-game item or service. The site is built with Vue / Nuxt /
                  Bootstrap-vue on the front-end, and Node / Express on the
                  back-end. I’m constantly working to improve the site by adding
                  new features, and am currently working on a client login
                  portal and rewards system.
                </p>
                <p class="pt-3">
                  On the business side, my team and I service clients from
                  around the globe, including North America, Europe, and
                  Australia. We have serviced over ten-thousand customers since
                  2013 and continue to grow year after year.
                </p>
              </div>
            </div>
            <div class="w-full my-10 border-b border-indigo-300 opacity-25"></div>
            <div>
              <span
                class="block text-xl font-semibold text-white uppercase"
              >InMobi - Software Developer</span>
              <span class="block text-lg text-white uppercase">June 2018 - June 2019</span>
              <div class="pt-4 text-lg text-indigo-300">
                <p>
                  InMobi is a global provider of enterprise platforms for
                  marketers. The platform enables consumers to discover new
                  products and services by providing contextual, relevant, and
                  curated recommendations on mobile apps and devices. At InMobi,
                  I was responsible for maintaining and adding features to the
                  existing platform built with Ruby on Rails and jQuery.
                </p>
                <p class="pt-3">
                  Additionally, my team and I worked closely with UX/UI
                  designers to build a newer and more modern platform using Vue
                  / Node, and built out unit-tests for each feature using Mocha.
                  Other responsibilities included assigning tickets to
                  developers on my team, providing constructive criticism to other team members,
                  and ensuring the code being written was clean and consistent.
                </p>
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
              <img
                class="rounded-t object-fit"
                :src="require('~/assets/img/' + project.img + '-xl.jpg')"
              />
            </div>
            <div class="absolute z-40 w-3/5 pl-16" style="right: 0">
              <div class="p-8 bg-gray-800 border-2 border-indigo-500 rounded shadow-xl">
                <span class="text-xl font-semibold text-white uppercase">
                  {{
                  project.title
                  }}
                </span>
                <p class="pt-4 text-lg text-indigo-300">{{ project.description }}</p>
                <div class="flex items-center py-5">
                  <a
                    v-if="project.github"
                    class="cursor-pointer"
                    :href="project.github"
                    target="_blank"
                  >
                    <svg
                      class="w-6 h-6 mr-3 text-white fill-current hover:text-indigo-300"
                      viewBox="0 0 24 24"
                    >
                      <defs />
                      <path
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      />
                    </svg>
                  </a>
                  <a class="cursor-pointer" :href="project.link" target="_blank">
                    <svg
                      class="w-6 h-6 text-white fill-current hover:text-indigo-300"
                      viewBox="0 0 24 24"
                    >
                      <defs />
                      <path
                        d="M4.06 13a8 8 0 005.18 6.51A18.5 18.5 0 018.02 13H4.06zm0-2h3.96a18.5 18.5 0 011.22-6.51A8 8 0 004.06 11zm15.88 0a8 8 0 00-5.18-6.51A18.5 18.5 0 0115.98 11h3.96zm0 2h-3.96a18.5 18.5 0 01-1.22 6.51A8 8 0 0019.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 110-20 10 10 0 010 20z"
                        class="heroicon-ui"
                      />
                    </svg>
                  </a>
                </div>
                <span
                  class="block pt-6 text-xs font-semibold text-white uppercase"
                >{{ project.technologies }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center xl:hidden">
            <div class="overflow-hidden bg-gray-800 rounded">
              <img
                class="object-cover w-full"
                :src="require('~/assets/img/' + project.img + '.jpg')"
              />
              <div class="flex flex-col justify-center px-10 pt-5 pb-10">
                <span class="text-2xl font-semibold text-white uppercase">
                  {{
                  project.title
                  }}
                </span>
                <p class="pt-4 text-lg text-indigo-300">{{ project.description }}</p>
                <div class="flex items-center py-5">
                  <a
                    v-if="project.github"
                    class="cursor-pointer"
                    :href="project.github"
                    target="_blank"
                  >
                    <svg
                      class="w-6 h-6 mr-3 text-white fill-current hover:text-indigo-300"
                      viewBox="0 0 24 24"
                    >
                      <defs />
                      <path
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      />
                    </svg>
                  </a>
                  <a class="cursor-pointer" :href="project.link" target="_blank">
                    <svg
                      class="w-6 h-6 text-white fill-current hover:text-indigo-300"
                      viewBox="0 0 24 24"
                    >
                      <defs />
                      <path
                        d="M4.06 13a8 8 0 005.18 6.51A18.5 18.5 0 018.02 13H4.06zm0-2h3.96a18.5 18.5 0 011.22-6.51A8 8 0 004.06 11zm15.88 0a8 8 0 00-5.18-6.51A18.5 18.5 0 0115.98 11h3.96zm0 2h-3.96a18.5 18.5 0 01-1.22 6.51A8 8 0 0019.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 110-20 10 10 0 010 20z"
                        class="heroicon-ui"
                      />
                    </svg>
                  </a>
                </div>
                <span
                  class="block pt-6 text-xs font-semibold text-white uppercase"
                >{{ project.technologies }}</span>
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
          <p class="pr-16 mt-6 text-lg text-indigo-300">
            Have a project or position you think I’d be a good fit for? Just
            want to say hello? Please reach out!
          </p>
        </div>
        <div class="w-full py-8 lg:w-2/3 xl:w-1/2">
          <transition leave-active-class="animated fadeOut" @afterLeave="showSubmitMessage = true">
            <form
              class="max-w-2xl p-10 -mb-48 bg-gray-100 rounded shadow-xl"
              @submit.prevent="handleSubmit"
              v-if="!submitDone"
              data-netlify="true"
              method="post"
              data-netlify-honeypot="bot-field"
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="name">Full Name</label>
                <input
                  @click="form.name.hasError = false"
                  v-model="form.name.value"
                  :class="{ 'border-red-500': form.name.hasError }"
                  class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                />
                <p
                  v-show="form.name.hasError"
                  class="mt-2 text-xs italic text-red-500"
                >Name is required</p>
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
                <input
                  @click="form.email.hasError = false"
                  v-model="form.email.value"
                  :class="{ 'border-red-500': form.email.hasError }"
                  class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="text"
                />
                <p
                  v-show="form.email.hasError"
                  class="mt-2 text-xs italic text-red-500"
                >Email is required</p>
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="message">Message</label>
                <textarea
                  @click="form.message.hasError = false"
                  v-model="form.message.value"
                  rows="5"
                  :class="{ 'border-red-500': form.message.hasError }"
                  class="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  type="text"
                ></textarea>
                <p
                  v-show="form.message.hasError"
                  class="mt-2 text-xs italic text-red-500"
                >Message is required</p>
              </div>
              <div class="pt-4">
                <button
                  type="submit"
                  :class="{ 'bg-gray-600 hover:bg-gray-600': submitting }"
                  class="w-full text-center btn btn-primary"
                >{{ submitting ? "Sending..." : "Send" }}</button>
              </div>
            </form>
          </transition>
          <transition enter-active-class="animated fadeIn">
            <div
              v-if="submitDone && showSubmitMessage"
              class="flex justify-center p-10 border-2 border-indigo-500 rounded shadow-xl"
            >
              <div v-if="!submitError" class="flex">
                <span class="pr-4 text-3xl font-semibold text-white">Message sent!</span>
                <svg class="w-10 h-10 text-green-400 fill-current" viewBox="0 0 24 24">
                  <defs />
                  <path
                    d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421L5 9l18-9zM12 12.501V18l2.193-3.323L12 12.501zm-8.698 6.825l-1.439-.507 5.701-5.215L9 14l-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503L11 19l-4.436 4.613zM2.481 24L1 23.493l8-7.89 1.437.397-7.956 8z"
                  />
                </svg>
              </div>
              <div v-else>
                <span class="text-xl font-semibold text-red-400">
                  There was an issue delivering your message. Please reach out
                  to me directly at hello@stephencook.me
                </span>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Code from "~/assets/img/code.svg?inline";
import Cog from "~/assets/img/cog.svg?inline";
import Heart from "~/assets/img/heart.svg?inline";
export default {
  components: {
    Code,
    Cog,
    Heart
  },
  data() {
    return {
      form: {
        name: { value: null, hasError: false },
        email: { value: null, hasError: false },
        message: { value: null, hasError: false }
      },
      submitting: false,
      submitDone: false,
      showSubmitMessage: false,
      submitError: false,
      skills: [
        {
          title: "Front-End Development",
          description:
            "I transform any design into a pixel-perfect, responsive, and performant interface that users will love.",
          tech: " JavaScript / Vue / Nuxt / React / HTML / CSS",
          icon: "code"
        },
        {
          title: "Back-End Development",
          description:
            "I build restful APIs, as well as work with 3rd party APIs and services to create a fast and maintainable back-end for any app.",
          tech: "Node / Express / Rails / MongoDB / MySQL",
          icon: "cog"
        },
        {
          title: "Well Tested Code",
          description:
            "Code confidence is extremely important. That’s why I always build a robust suite of unit tests for any new feature added to a code base.",
          tech: "Mocha / Chai / RSpec",
          icon: "heart"
        }
      ],
      projects: [
        {
          title: "Warcraft Market",
          technologies: "Vue / Nuxt / Bootstrap-Vue / MongoDB / Node / Express",
          link: "https://www.warcraftmarket.com",
          img: "warcraftmarket",
          description:
            "Started as a passion project forged from my love of World of Warcraft, Warcraft Market is a middleman service that connects buyers of in-game items and services with teams of professional players that can fulfill the clients needs."
        },
        {
          title: "Weather Dash",
          technologies:
            "React / Tailwind CSS / Netlify Functions / Mapquest & Darksky API",
          link: "https://www.weatherdash.app",
          github: "https://github.com/Stefarian/weather-dash",
          img: "weatherdash",
          description:
            "A better browser start page with a focus on the weather in your area. Weather Dash utilizes Netlify Functions to query the DarkSky & MapQuest APIs to provide weather, geolocation, and search ahead results."
        },
        {
          title: "Trip Me",
          technologies: "Vue / Tailwind CSS",
          link: "https://trip-me.netlify.com",
          github: "https://github.com/Stefarian/trip-me",
          img: "tripme",
          description:
            "A landing page for a mock travel agency, Trip Me, that provides pre-packaged trip itineraries for clients. The page is fully responsive with design considerations taken into account for every screen size."
        }
      ]
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      if (
        !this.form.name.value ||
        !this.form.email.value ||
        !this.form.message.value
      ) {
        this.form.name.hasError = !this.form.name.value;
        this.form.email.hasError = !this.form.email.value;
        this.form.message.hasError = !this.form.message.value;
        return;
      }
      if (process.env.NODE_ENV === "production") {
        this.submitting = true;
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        axios
          .post(
            "/submit",
            this.encode({
              "form-name": "contact",
              name: this.form.name.value,
              email: this.form.email.value,
              message: this.form.message.value
            }),
            axiosConfig
          )
          .then(() => {
            this.submitting = false;
            this.submitDone = true;
          })
          .catch(err => {
            this.submitError = true;
          });
      } else {
        this.submitting = true;
        setTimeout(() => {
          this.submitting = false;
          this.submitDone = true;
          this.submitError = false;
        }, 2000);
      }
    }
  }
};
</script>

<style></style>
