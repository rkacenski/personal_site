<template>
    <section class="hero is-blue work-page is-fullheight">
        <nav class="level">
            <div class="level-left">
                <p class="level-item" @click="$router.back()">Close</p>
            </div>
            <div class="level-right">
                <p class="level-item">Else</p>
            </div>
        </nav>
        <div class="container">
            <h2 class="title is-2 has-text-white">{{ document.title }}</h2>
        </div>
    </section>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'
// Importing all the slices components
export default {
    transition: 'work',
    head() {
        return {
            title: 'Prismic Nuxt.js Blog'
        }
    },
    async asyncData({ params, error, req }) {
        try {
            // Query to get API object
            const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })
            // Query to get post content
            const post = await api.getByUID('work_items', params.uid)
            // Load the edit button
            return {
                document: post.data,
                documentId: post.id,
                slices: post.data.body
            }
        } catch (e) {
            // Returns error page
            error({ statusCode: 404, message: 'Page not foundddd' })
        }
    }
}
</script>
