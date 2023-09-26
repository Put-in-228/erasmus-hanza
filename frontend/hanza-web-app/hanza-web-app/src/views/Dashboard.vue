  
<template>
    <div>
      <!-- <h1>Dashboard ID {{ dashboardId }}</h1> -->
      <div v-if="dashboardId && reports[dashboardId]">
        <!-- <h2>{{ reports[dashboardId].title }}</h2> -->
        <iframe
            class="fullscreen-iframe"
            :title="reports[dashboardId].title"
            width="1140"
            height="541.25"
            :src="reports[dashboardId].embedUrl"
            frameborder="0"
            allowFullScreen="true"
            scrolling="no"
        ></iframe>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    dashboardId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
        reports: [
        {
          title: 'Plasma 5110',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=85dae09c-efce-41e2-923c-288c79a81416&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57',
        },
        {
          title: 'Laser 5210',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=18f5fbba-cdfa-4b2c-8133-f95bd432deec&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57',
        },
        {
          title: 'Bending 5250',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=7b09dc23-52c3-44f7-9435-df65fd069c51&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57',
        },
        {
          title: 'Machining 5300',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=6b9d077e-0ac7-481c-99f6-6cd30e5f4a7e&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57',
        },
      ],
    };
  },
};
</script>
<!--        { title: 'Plasma 5110', value: 1, },
            { title: 'Laser 5210', value: 2 },
            { title: 'Bending 5250', value: 3 },
            { title: 'Machining 5300', value: 4 },
            { title: 'Welding 5150', value: 5 },
            { title: 'WET Paint 5410', value: 6 },
            { title: 'Powder Paint 5431', value: 7 },
            { title: 'Assembly 5500', value: 8, },
            { title: 'New Blast 5415', value: 9 },
            { title: 'Old Blast 5413', value: 10 },
            { title: 'Tank Wash 5417', value: 11 }, -->

<style>
h1 {
    color: white;
    text-align: center;
    padding: 10px;
}

.fullscreen-iframe {
    width: 100%;
    height: 95vh;
    border: none;
}

</style>
