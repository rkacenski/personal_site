<template>
    <div class="column">
        <div class="card elavate" @click="showVid = true">
            <div class="card-image">
                <figure class="image is-square">
                    <img :src="vid.thumb" :alt="vid.title" />
                </figure>
            </div>
            <div class="card-content">
                <div class="content">
                    <p class="subtitle is-4">
                        {{ vid.title }}
                    </p>
                    <p class="subtitle is-5">
                        {{ vid.subtitle }}
                    </p>
                </div>
            </div>
        </div>

        <div class="modal" :class="{ 'is-active': showVid }">
            <div class="modal-background" @click="showVid = false"></div>
            <div class="modal-content">
                <div>
                    <template v-if="vid.type == 'youtube'">
                        <iframe
                            width="640"
                            height="360"
                            :src="vid.url"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </template>
                    <template v-if="vid.type == 'local'">
                        <video controls="">
                            <source :src="vid.url" type="video/mp4" />
                        </video>
                    </template>
                </div>
            </div>
            <button
                class="modal-close is-large"
                aria-label="close"
                @click="showVid = false"
            ></button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        vid: {
            type: Object,
            default: Object
        }
    },
    data() {
        return {
            showVid: false
        }
    }
}
</script>
