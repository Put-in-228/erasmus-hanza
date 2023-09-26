<template>
    <div>
        <h1>Dashboard ID {{ dashboardId }}</h1>
        <iframe title="new_proj_20_09" width="1140" height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=efb8d325-f98b-41a1-acc4-85d43b65c43a&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57"
            frameborder="0" allowFullScreen="true"></iframe>
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
    data: () => ({
        reportItems: [
            { title: 'Plasma 5110', value: 1 },
            { title: 'Laser 5210', value: 2 },
            { title: 'Bending 5250', value: 3 },
            { title: 'Machining 5300', value: 4 },
            { title: 'Welding 5150', value: 5 },
            { title: 'WET Paint 5410', value: 6 },
            { title: 'Powder Paint 5431', value: 7 },
            { title: 'Assembly 5500', value: 8, },
            { title: 'New Blast 5415', value: 9 },
            { title: 'Old Blast 5413', value: 10 },
            { title: 'Tank Wash 5417', value: 11 },
        ],
    }),
};
</script>

<style>
h1 {
    color: white;
    text-align: center;
    padding: 10px;
}
</style>