<script setup>
import SideBar from './components/SideBar.vue';
import ReportDashboard from './components/ReportDashboard.vue';
</script>

<template>
  <v-app>
    <SideBar />
    <v-main>
      <ReportDashboard />
    </v-main>
  </v-app>
</template>

<style>
.v-main {
  background-color: #2b2929;
}
</style>
