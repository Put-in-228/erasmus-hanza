
<template>
    <v-navigation-drawer theme="dark" rail permanent>
        <v-list-item nav prepend-avatar="@/assets/logo.svg" width="100px"></v-list-item>
        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item @click="toggleDrawer('dashboards')" prepend-icon="mdi-view-dashboard" value="dashboards"></v-list-item>
            <v-list-item @click="toggleDrawer('settings')" prepend-icon="mdi-cog-outline" value="settings"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-if="selectedNavItem === 'dashboards'" theme="dark" permanent :width="180">
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

    <v-navigation-drawer v-if="selectedNavItem === 'settings'" theme="dark" permanent :width="180">
        <v-card class="mx-auto" max-width="300">
            <v-list dense nav>
            </v-list>
        </v-card>
    </v-navigation-drawer>

    <v-app-bar theme="dark" density="compact" image="@/assets/headline.png">
        <v-spacer></v-spacer>
        <v-img class="mx-6" src="@/assets/logo-full-negative.svg" max-height="40" max-width="100" contain></v-img>
    </v-app-bar>
</template>

<script>
import jsonData from '/public/data.json';

export default {
    data: () => ({
        items: jsonData,
        selectedNavItem: null,
    }),

    methods: {
        toggleDrawer(value) {
            if (this.selectedNavItem === value) {
                this.selectedNavItem = null;
            } else {
                // Toggle the second drawer based on the selected value
                this.selectedNavItem = value;
            }
        },
    },
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