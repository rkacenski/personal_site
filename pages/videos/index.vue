<template>
    <section class="hero is-blue work-page is-fullheight">
        <div class="container is-fluid">
            <div class="columns">
                <div class="column is-2">
                    <a class="button is-rounded" @click="$router.back()"
                        >Back</a
                    >
                </div>
                <div class="column is-8">
                    <h2 class="title is-2 has-text-white">Videos</h2>
                    <h3 class="subtitle is-4 has-text-white">
                        Collection of videos created by me
                    </h3>
                </div>
            </div>

            <div class="columns">
                <video-viewer v-for="vid in videos" :key="vid.thumb" :vid="vid">
                </video-viewer>
            </div>
        </div>
    </section>
</template>

<script>
import VideoViewer from '../../components/VideoViewer'
export default {
    components: { VideoViewer },
    transition: 'work',
    data() {
        return {
            videos: [
                {
                    title: ' Flying a TF-51',
                    subtitle: `Short training lesson from a P-51 trainer`,
                    thumb: '/thumbs/vid1.png',
                    type: 'youtube',
                    url: 'https://www.youtube.com/watch?v=IX5gCfZ9rnM'
                },
                {
                    title: 'Boats from above',
                    subtitle: `Drone footage of boats around Newport, RI`,
                    thumb: '/thumbs/vid2.png',
                    type: 'youtube',
                    url: 'https://www.youtube.com/watch?v=bfgiI-LdN4U'
                },
                {
                    title: 'Football Mixtape',
                    subtitle: `Football highlight reel featuring Merrimack
                                    College's Nick Davis, and Devin O'Reilly`,
                    thumb: '/thumbs/vid3.jpg',
                    type: 'local',
                    url: '/media/football.mp4'
                }
            ]
        }
    }
}
</script>
