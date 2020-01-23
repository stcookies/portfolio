
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Stephen Cook / Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "favicons/favicon.ico" },
      { rel: "apple-touch-icon", sizes: " 180x180", href: "favicons/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "favicons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "favicons/favicon-16x16.png" },
      { rel: "manifest", href: "faviconsfavicons/site.webmanifest" },
      { rel: "mask-icon", color: "#000000", href: "favicons/safari-pinned-tab.svg" },
      { rel: "shortcut icon", href: "favicons/favicon.ico" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "vue-scrollto/nuxt",
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    host: '0.0.0.0',
    port: '3000'
  }
}
