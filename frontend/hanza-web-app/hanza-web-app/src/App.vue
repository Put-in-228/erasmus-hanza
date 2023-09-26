<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
</script>

<template>
  <v-app>
    <SideBar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

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
