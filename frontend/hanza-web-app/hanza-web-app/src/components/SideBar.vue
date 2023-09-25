
<template>
    <v-navigation-drawer theme="dark" rail permanent>
        <v-list-item nav prepend-avatar="@/assets/logo.svg" width="100px"></v-list-item>
        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-cog-outline" value="messages"></v-list-item>
        </v-list>

    </v-navigation-drawer>

    <v-navigation-drawer theme="dark" permanent :width="180">

        <v-card class="mx-auto" max-width="300">
            <v-list :items="items"></v-list>
        </v-card>
        
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        items: [
            { type: 'subheader', title: 'Pre - welding' },
            {
                title: 'Plasma 5110',
                value: 1,
            },
            {
                title: 'Laser 5210',
                value: 2,
            },
            {
                title: 'Bending 5250',
                value: 3,
            },
            {
                title: 'Machining 5300',
                value: 4,
            },
            { type: 'divider' },
            { type: 'subheader', title: 'Welding' },
            {
                title: 'Welding 5150',
                value: 5,
            },
            { type: 'divider' },
            { type: 'subheader', title: 'After-welding' },
            {
                title: 'WET Paint 5410',
                value: 6,
            },
            {
                title: 'Powder Paint 5431',
                value: 7,
            },
            {
                title: 'Assembly 5500',
                value: 8,
            },
            {
                title: 'New Blast 5415',
                value: 9,
            },
            {
                title: 'Old Blast 5413',
                value: 10,
            },
            {
                title: 'Tank Wash 5417',
                value: 11,
            },
        ],
    }),
}
</script>

<style>
.v-navigation-drawer .v-list-subheader__text {
        font-size: medium !important;
        font-weight: bolds !important;
        letter-spacing: 1px;
        text-transform: uppercase;
}

.v-list-item-title {
    font-size: small !important;
}
</style>