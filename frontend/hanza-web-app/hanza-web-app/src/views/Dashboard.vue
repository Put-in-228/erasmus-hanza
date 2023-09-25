<template>
    <div>
        <h1>Dashboard ID {{ dashboardId }}</h1>
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
};
</script>

<style>

h1 {
    color: white;
    text-align: center;
    padding: 10px;
}

</style>