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
                                I like to create digtal products, fly planes,
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
            I like to create digtal products, fly planes, make videos and take
            photos. I'm contantly working with new technologies and learning new
            skills
        </div>

        <section class="section">
            <div class="container">
                <h2 class="title is-2">what's new</h2>
                <div class="columns is-multiline">
                    <div class="column is-4">
                        <div class="box">
                            <h3 class="subtitle is-4">Writings</h3>
                            <p>Snippets, thoughts, and tutorials</p>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="box">
                            <h3 class="subtitle is-4">Videos</h3>
                            <p>Mostly drone and airplane videos</p>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="box">
                            <h3 class="subtitle is-4">Photography</h3>
                            <p>A gallery of my recent photos</p>
                        </div>
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
                        class="column is-4"
                    >
                        <nuxt-link :to="`/work/${item.uid}`">
                            <div class="card elavate">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img
                                            :src="item.data.cover.url"
                                            :lazy-src="
                                                item.data.cover.thumb.url
                                            "
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <p class="subtitle is-4">
                                            {{ item.data.title }}
                                        </p>
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
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <img class="elavate" src="/roll2.gif" alt="Pilot" />
                    </div>
                    <div class="column">
                        <h2 class="title is-2">about</h2>
                        <p>
                            I was d gdgdghg dd dg dgd dg dg dd gdgd I was d
                            gdgdghg dd dg dgd dg dg dd gdgd I was d gdgdghg dd
                            dg dgd dg dg dd gdgd I was d gdgdghg dd dg dgd dg dg
                            dd gdgd I was d gdgdghg dd dg dgd dg dg dd gdgd I
                            was d gdgdghg dd dg dgd dg dg dd gdgd dg d
                            gdgdgdgdgdgdgd gd gdg dfgdf gdg
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'
export default {
    transition: 'back-home',
    components: {},

    data() {
        return {}
    },

    async asyncData({ context, error, req }) {
        try {
            // Query to get API object
            const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })
            // Query to get posts content to preview
            const items = await api.query(
                Prismic.Predicates.at('document.type', 'work_items'),
                { orderings: '[my.post.date desc]' }
            )
            return {
                workItems: items.results
            }
        } catch (e) {
            // Returns error page
            error({ statusCode: 404, message: 'Page not found' })
        }
    }
}
</script>
