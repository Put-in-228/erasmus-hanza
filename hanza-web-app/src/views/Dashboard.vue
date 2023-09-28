  
<template>
    <div>
      <div v-if="!dashboardId" class="placeholder-image">
        <img src="@/assets/metric.svg">
      </div>
      <div v-else="dashboardId && currentReport[dashboardId]">
        <iframe
            class="fullscreen-iframe"
            :title="currentReport[dashboardId].report.title"
            width="1140"
            height="541.25"
            :src="currentReport[dashboardId].report.embedUrl"
            frameborder="0"
            allowFullScreen="true"
            scrolling="no"
        ></iframe>
      </div>
    </div>
</template>

<script>
import jsonData from '/public/data.json';

export default {
  props: {
    dashboardId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    reports: jsonData,
  }),
  computed: {
    currentReport() {
      return this.reports.filter(report => report.type !== 'divider' && report.type !== 'subheader');
    },
  },
};
</script>

<style>
h1 {
    color: white;
    text-align: center;
    padding: 10px;
}

.fullscreen-iframe {
    width: 100%;
    height: 96vh;
    border: none;
}

.placeholder-image {
    width: 600px;
    opacity: 0.1;
    text-align: center;
    margin: auto;
    display: block;
    padding-top: 150px;
}

</style>
