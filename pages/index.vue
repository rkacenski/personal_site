<template>
    <div>
        <section class="hero is-large has-bg-img">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <p class="title is-1">Hi, I'm Ryan</p>
                            <p class="subtitle is-2">
                                problem solver, coder & pilot
                            </p>
                            <p class="is-size-5">
                                I like to create digtal products, fly planes,
                                make videos and take photos. I'm contantly
                                working with new technologies and learning new
                                skills
                            </p>
                        </div>
                        <div class="column"></div>
                    </div>
                </div>
            </div>
        </section>

        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Tweets</p>
                    <p class="title">3,456</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Following</p>
                    <p class="title">123</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Followers</p>
                    <p class="title">456K</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Likes</p>
                    <p class="title">789</p>
                </div>
            </div>
        </nav>

        <div class="section">
            <hr />
        </div>

        <section class="section">
            <div class="container">
                <h2 class="title is-2">writtings & snippets</h2>
                <div class="columns is-multiline">
                    <div
                        v-for="item in workItems"
                        :key="item.id"
                        class="column is-4"
                    >
                        <div class="box">
                            <h3 class="subtitle is-4">{{ item.data.title }}</h3>
                            <p>sfsfsfs.sdfs fs fsddd sd.f sf f</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section is-dark">
            <div class="container">
                <h2 class="title is-2 has-text-white">work & visuals</h2>
                <div class="tabs is-centered is-boxed is-medium">
                    <ul>
                        <li class="is-active">
                            <a>
                                <span>Web</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>Photograpy</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>Videos</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="columns is-multiline">
                    <div
                        v-for="item in workItems"
                        :key="item.id"
                        class="column is-4"
                    >
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        :src="item.data.cover.url"
                                        :lazy-src="item.data.cover.thumb.url"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <p class="subtitle is-4 has-text-white">
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
                    </div>
                </div>
            </div>
        </section>
        <hr />
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <img src="/pilot.png" alt="Pilot" />
                    </div>
                    <div class="column">
                        <h2 class="title is-2">about</h2>
                        <p>
                            I was d gdgdghg dd dg dgd dg dg dd gdgd I was d
                            gdgdghg dd dg dgd dg dg dd gdgd I was d gdgdghg dd
                            dg dgd dg dg dd gdgd I was d gdgdghg dd dg dgd dg dg
                            dd gdgd I was d gdgdghg dd dg dgd dg dg dd gdgd I
                            was d gdgdghg dd dg dgd dg dg dd gdgd
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
