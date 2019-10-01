<template>
    <div>
        <section class="section has-bg-img">
            <img class="avatar" src="/banners-01.svg" alt="" />
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="column is-4 banner-copy">
                            <p
                                class="title is-size-1-widescreen is-size-2 is-size-4-touch has-text-white"
                            >
                                Hi, I'm Ryan
                            </p>
                            <p
                                class="subtitle is-2-widescreen is-size-3 is-size-5-touch has-text-white"
                            >
                                problem solver, coder & pilot
                            </p>
                            <p
                                class="is-size-5 is-size-6-touch is-hidden-mobile"
                            >
                                I like to create digital products, fly planes,
                                make videos and take photos. I'm contantly
                                working with new technologies and learning new
                                skills 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="notification is-hidden-tablet">
            I like to create digital products, fly planes, make videos and take
            photos. I'm contantly working with new technologies and learning new
            skills
        </div>

        <section class="section">
            <div class="container">
                <h2 class="title is-2">what's new</h2>
                <div class="columns is-multiline">
                    <div class="column is-4">
                        <nuxt-link class="box" to="/blog">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-96x96">
                                        <img
                                            class="rounded"
                                            src="/thumbs/blogging.gif"
                                        />
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <h3 class="subtitle is-4">Writings</h3>
                                    <p>Snippets, thoughts, and tutorials</p>
                                </div>
                            </article>
                        </nuxt-link>
                    </div>

                    <div class="column is-4">
                        <nuxt-link class="box" to="/videos">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-96x96">
                                        <img
                                            class="rounded"
                                            src="/thumbs/vid1.png"
                                        />
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <h3 class="subtitle is-4">Videos</h3>
                                    <p>Mostly drone and airplane videos</p>
                                </div>
                            </article>
                        </nuxt-link>
                    </div>
                    <div class="column is-4">
                        <a
                            class="box"
                            href="https://github.com/rkacenski"
                            target="_blank"
                        >
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-96x96">
                                        <img
                                            class="rounded"
                                            src="/thumbs/github.png"
                                        />
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <h3 class="subtitle is-4">GitHub</h3>
                                    <p>A few projects, and contributions</p>
                                </div>
                            </article>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="section is-blue work-list">
            <div class="container">
                <h2 class="title is-2 has-text-white">work</h2>
                <hr />
                <div class="columns is-multiline">
                    <div
                        v-for="item in workItems"
                        :key="item.id"
                        class="column is-3 is-half-desktop is-6-tablet"
                    >
                        <a :href="item.url" target="_blank">
                            <div class="card elavate">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img :src="item.thumb" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <p class="subtitle is-4">
                                            {{ item.title }}
                                        </p>
                                        <p v-text="item.desc"></p>
                                        <div class="tags">
                                            <span
                                                v-for="tag in item.tags"
                                                :key="tag"
                                                class="tag is-light"
                                            >
                                                {{ tag }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <img class="elavate" src="/me.jpg" alt="Pilot" />
                    </div>
                    <div class="column">
                        <h2 class="title is-2">about</h2>
                        <p>
                            I started learning how to code at 13, working as a
                            freelancer at 14. Now at 25 constantly learning
                            everything I can about new technologies and
                            aviation. In between, I've worked with startups and
                            small companies to build great software products,
                            and development teams. I try to spend time not just
                            with the code, but also helping a company grow.
                            Making sure the products & tools I build are useful
                            to the people using them. I also have a passion for
                            aviation, and hold a Private Pilot Certificate with
                            130+ hours.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// import Prismic from 'prismic-javascript'
// import PrismicConfig from '~/prismic.config.js'
export default {
    transition: 'back-home',
    components: {},

    data() {
        return {}
    },

    asyncData({ context, error, req }) {
        return {
            workItems: [
                {
                    thumb: '/work/koroid.png',
                    desc:
                        'Scheduling platform for health care orangizations to prevent over worked employees',
                    title: 'Koroid Web and Mobile App',
                    tags: ['Laravel', 'Vue.js', 'Vuetify', 'MongoDB'],
                    url: 'https://koroid.com'
                },
                {
                    thumb: '/work/arbor.png',
                    desc:
                        'WIP, to help tree care companies effectivly plan work and track their daily routes',
                    title: 'Arbor Care Planner',
                    tags: ['Laravel', 'Vue.js', 'Bulma', 'MySQL', 'MapBox'],
                    url: 'https://github.com/rkacenski/arbor-planner'
                },
                {
                    thumb: '/work/vazoola.png',
                    desc:
                        'This was a long term project and has 2 platforms to connect influencers to advertisers. Vazola & ValuedVoice are a complete solution to middle man influencer marketing',
                    title: 'Vazoola Influencer Platform',
                    tags: ['Laravel', 'Vue.js', 'Bulma', 'Social APIs'],
                    url: 'https://vazoola.com'
                },
                {
                    thumb: '/work/bilgore.png',
                    desc:
                        'Simple static site built with Nuxt.js, made for speed and simplicty. Deployed via Netlify, just like my site',
                    title: `Gardener's Website`,
                    tags: ['Nuxt.js', 'Bulma', 'Netlify'],
                    url: 'https://dianebilogre.com'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.rounded {
    border-radius: 5px;
}
</style>
