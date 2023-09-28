<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
</script>

<template>
  <v-app>
    <SideBar @start-slideshow="handleSlideshow" @start-slideshow-fullscreen="handleSlideshowFullscreen"/>
    <v-main>
      <RouterView :selectedData="selectedData" :selectedTimeValue="selectedTimeValue" :isSlideshowFullscreen="isSlideshowFullscreen"/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    RouterView,
    SideBar,
  },
  data() {
    return {
      selectedData: {},
      selectedTimeValue: 0,
      isSlideshowFullscreen: false,
    };
  },
  methods: {
    handleSlideshow(data) {
      this.selectedData = [...data.selectedNavItems];
      this.selectedTimeValue = data.sliderTimeValue;
    },
    handleSlideshowFullscreen(data) {
      this.isSlideshowFullscreen = data.isSlideshowFullscreen;
    },
  },
};
</script>

<style>
html::-webkit-scrollbar {
  display: none;
}
html, body{
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  height: 100vh;
}

.v-main {
  background-color: #2b2929;
}
</style>
