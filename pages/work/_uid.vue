<template>
    <v-row>
        <v-col>
            <p>here</p>
        </v-col>
    </v-row>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'
// Importing all the slices components
export default {
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
