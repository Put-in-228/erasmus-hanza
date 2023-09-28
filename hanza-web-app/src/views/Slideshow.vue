
<template>
    <div ref="fullscreenContainer">
        <v-carousel v-model="selectedIndex" show-arrows="hover" light progress="primary" color="#3C1054" :continuous="true"
            cycle="true" :interval="intervalInMilliseconds" prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right"
            style="height: 100vh;">
            <v-carousel-item v-for="(report, index) in reports" :key="index">
                <iframe class="fullscreen-iframe" :title="report.title" :src="report.embedUrl" frameborder="0"
                    allowFullScreen="true" scrolling="no"></iframe>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>
  
<script>

export default {
    props: {
        selectedData: {
            type: Object,
            required: true,
        },
        selectedTimeValue: {
            type: Number,
            required: true,
        },
        isSlideshowFullscreen: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            isFullScreen: false,
            selectedIndex: 0,
            reports: [],
            intervalInMilliseconds: 0,
        };
    },
    watch: {
        selectedData: {
            deep: true,
            handler(val) {
                this.loadEmbedLinks(val);
            },
        },
        selectedTimeValue: {
            deep: true,
            handler(val) {
                this.intervalInMilliseconds = val * 1000;
            }
        },
        isSlideshowFullscreen: {
            deep: true,
            handler(val) {
                this.toggleFullScreen();
                console.log(val);
            }
        },
    },
    methods: {
        toggleFullScreen() {
            const containerElement = this.$refs.fullscreenContainer;

            if (!containerElement) {
                console.error('Fullscreen container element not found.');
                return;
            }

            if (document.fullscreenElement) {
                document.exitFullscreen();
                this.isFullScreen = false;
            } else {
                containerElement.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                });
                this.isFullScreen = true;
            }
        },
        loadEmbedLinks(selectedNavItems) {
            this.reports = [];
            // Loop through selectedNavItems and push the embedUrl to reports
            selectedNavItems.forEach(item => {
                this.reports.push(item.report);
            });
        },
        handleFullScreenChange() {
            this.isFullScreen = !!document.fullscreenElement;
        },
    },
}
</script>

<style>
.fullscreen-iframe {
    width: 100%;
    height: 100vh;
    border: none;
}

.mdi-arrow-left,
.mdi-arrow-right {
    color: #3C1054 !important;
}
</style>