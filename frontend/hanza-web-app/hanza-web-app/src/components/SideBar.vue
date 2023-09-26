
<template>
    <v-navigation-drawer theme="dark" rail permanent>
        <v-list-item nav prepend-avatar="@/assets/logo.svg" width="100px"></v-list-item>
        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" value="dashboards"></v-list-item>
            <v-list-item prepend-icon="mdi-cog-outline" value="messages"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer theme="dark" permanent :width="180">
        <v-card class="mx-auto" max-width="300">
            <v-list dense nav>
                <template v-for="(item, index) in items" :key="index">

                    <!-- Checks if the item is a subheader -->
                    <template v-if="item.type === 'subheader'">
                        <v-list-subheader>{{ item.title }}</v-list-subheader>
                    </template>

                    <!-- Checks if the item is a divider -->
                    <template v-else-if="item.type === 'divider'">
                        <v-divider></v-divider>
                    </template>

                    <!-- Check if the item has a value (for links) -->
                    <template v-else-if="item.value !== undefined">
                        <v-list-item :to="'/dashboard/' + item.value">{{ item.title }}</v-list-item>
                    </template>

                </template>
            </v-list>
        </v-card>
    </v-navigation-drawer>

    <v-app-bar theme="dark" density="compact" image="@/assets/headline.png">
        <v-spacer></v-spacer>
        <v-img class="mx-6" src="@/assets/logo-full-negative.svg" max-height="40" max-width="100" contain></v-img>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        items: [
            { type: 'subheader', title: 'Pre - welding' },
            { title: 'Plasma 5110', value: 0 },
            { title: 'Laser 5210', value: 1 },
            { title: 'Bending 5250', value: 2 },
            { title: 'Machining 5300', value: 3 },

            { type: 'divider' },
            { type: 'subheader', title: 'Welding' },
            { title: 'Welding 5150', value: 4 },

            { type: 'divider' },
            { type: 'subheader', title: 'After-welding' },
            { title: 'WET Paint 5410', value: 5 },
            { title: 'Powder Paint 5431', value: 6 },
            { title: 'Assembly 5500', value: 7, },
            { title: 'New Blast 5415', value: 8 },
            { title: 'Old Blast 5413', value: 9 },
            { title: 'Tank Wash 5417', value: 10 },
        ],
    }),
}
</script>

<style>
.v-navigation-drawer .v-list-subheader__text {
    font-size: medium;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.v-navigation-drawer .v-list-item__content {
    font-size: small;
}
</style>