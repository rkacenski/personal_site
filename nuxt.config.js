// const PrismicConfig = require('./prismic.config')

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: 'Ryan Kacenski',
        title: 'Ryan Kacenski',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Ryan Kacenski - Problem Solver, Coder, and Pilot'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['@/assets/main.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/link-resolver.js',
        '~/plugins/html-serializer.js',
        '~/plugins/prismic-vue.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
        // '@nuxtjs/bulma',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    eslint: {
        fix: true
    },

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    /*
     ** Build configuration
     */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // eslint-disable-next-line dot-notation
            config.resolve.alias['vue'] = 'vue/dist/vue.common'
        }
    }
}
