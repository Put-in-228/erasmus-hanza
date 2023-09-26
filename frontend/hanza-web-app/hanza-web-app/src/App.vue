<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
import ReportDashboard from './components/ReportDashboard.vue';
</script>

<template>
  <v-app>
    <SideBar />
    <v-main>
      <RouterView />
      <ReportDashboard />
    </v-main>
  </v-app>
</template>

<style>

html, body{
  overflow-y: hidden;
}

.v-main {
  background-color: #2b2929;
}
</style>
