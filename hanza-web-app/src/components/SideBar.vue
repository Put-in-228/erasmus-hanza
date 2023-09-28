
<template>
    <v-navigation-drawer theme="dark" rail permanent>
        <v-list-item nav prepend-avatar="@/assets/logo.svg" width="100px"></v-list-item>
        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item :to="'/dashboard/'" @click="toggleDrawer('dashboards')" prepend-icon="mdi-view-dashboard"
                value="dashboards"></v-list-item>
            <v-list-item :to="'/slideshow/'" @click="toggleDrawer('slideshow')"
                prepend-icon="mdi mdi-projector-screen-outline" value="slideshow"></v-list-item>
            <v-list-item :to="'/settings/'" @click="toggleDrawer('settings')" prepend-icon="mdi-cog-outline"
                value="settings"></v-list-item>
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

    <v-navigation-drawer v-if="selectedNavItem === 'slideshow'" theme="dark" permanent :width="220">
        <v-card>
            <v-list dense nav>
                <v-item-group multiple selected-class="bg-purple">
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
                            <v-item v-slot="{ selectedClass, toggle }">
                                <v-list-item :class="selectedClass" @click="handleItemClick(item, toggle)">
                                    <v-list-item-content>
                                        <div class="slideshow-title-item">
                                            <span class="prevent-select">{{ item.title }}</span>
                                            <span v-if="getIndex(item) > 0" class="slideshow-title-divider prevent-select">|
                                                <span class="slideshow-title-number">{{ getIndex(item) }}</span></span>
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-item>
                        </template>
                    </template>
                </v-item-group>
            </v-list>
        </v-card>


        <template v-slot:append>
            <v-divider></v-divider>
            <v-card>

                <div class="d-flex pt-4s pl-5" style="gap: 5px;">
                    <span class="mdi mdi-clock-time-eight-outline"></span>
                    <div class="text-centers">{{ sliderTimeValue }}</div>
                    <span class="mdi mdi-view-dashboard"></span>
                    <div class="text-centers">{{ selectedNavItems.length }}</div>
                </div>

                <v-slider v-model="sliderTimeValue" thumb-label :thumb-size="15" :color="color" track-color="grey"
                    :min="slideMinTime" :max="slideMaxTime" :step="1">
                    <template v-slot:prepend>
                        <v-btn size="small" variant="text" icon="mdi-minus" :color="color" @click="decrement"></v-btn>
                    </template>

                    <template v-slot:append>
                        <v-btn size="small" variant="text" icon="mdi-plus" :color="color" @click="increment"></v-btn>
                    </template>
                </v-slider>
            </v-card>

            <div class="slideshow-nav-buttons" style="gap: 5px;">
                <v-btn icon="mdi mdi-fullscreen" @click="toggleSlideshowFullscreen"></v-btn>
                <v-btn icon="mdi mdi-play-circle-outline" @click="startSlideshow" ></v-btn>
                <v-btn icon="mdi mdi-reload" @click="resetSlideshow" ></v-btn>
            </div>
        </template>

    </v-navigation-drawer>

    <v-navigation-drawer v-if="selectedNavItem === 'settings'" theme="dark" permanent :width="180">
        <v-card class="mx-auto" max-width="300">
            <v-list dense nav>
            </v-list>
        </v-card>
    </v-navigation-drawer>

    <v-app-bar theme="dark" density="compact" image="@/assets/headline.png">
        <v-spacer></v-spacer>
        <v-divider vertical />
        <v-img class="mx-6" src="@/assets/logo-full-negative.svg" max-height="40" max-width="100" contain></v-img>
    </v-app-bar>
</template>

<script>
import jsonData from '/public/data.json';

export default {
    data: () => ({
        items: jsonData,
        selectedNavItem: null,
        selectedNavItems: [],
        selectedItems: [],

        refreshKey: 0,

        sliderTimeValue: 0,
        slideMinTime: 0,
        slideMaxTime: 60,

        isSlideshowFullscreen: false,
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
        handleItemClick(item, toggle) {
            toggle();
            const index = this.selectedNavItems.indexOf(item);
            if (index === -1) {
                // Item is not selected, so add it to the array
                this.selectedNavItems.push(item);
            } else {
                // Item is already selected, so remove it from the array
                this.selectedNavItems.splice(index, 1);
            }
        },
        getIndex(item) {
            var index = this.selectedNavItems.indexOf(item) + 1;
            return index < 0 ? 0 : index;
        },
        decrement() {
            if (this.sliderTimeValue > this.slideMinTime) {
                this.sliderTimeValue--;
            }
        },
        increment() {
            if (this.sliderTimeValue < this.slideMaxTime) {
                this.sliderTimeValue++;
            }
        },
        toggleSlideshowFullscreen() {
            this.isSlideshowFullscreen = !this.isSlideshowFullscreen;
            this.$emit('start-slideshow-fullscreen', { isSlideshowFullscreen: this.isSlideshowFullscreen });
        },
        startSlideshow() {
            this.$emit('start-slideshow', { selectedNavItems: this.selectedNavItems, sliderTimeValue: this.sliderTimeValue });
        },
        resetSlideshow() {
            this.$emit('start-slideshow', { selectedNavItems: [], sliderTimeValue: 0 });
        },
    },
}
</script>

<style>
.prevent-select {
    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */
}

.v-navigation-drawer .v-list-subheader__text {
    font-size: medium;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.v-navigation-drawer .v-list-item__content {
    font-size: small;
}

.slideshow-title-item,
.slideshow-title-divider {
    display: flex;
    align-items: center;
}

.slideshow-title-divider {
    margin: 0 8px;
    color: gray;
    position: absolute;
    right: 0;
    gap: 10px;
}

.slideshow-title-number {
    font-weight: bold;
    color: white;
}

.fixed-subheader {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #1E1E1E;
    /* Customize the background color */
}

.slideshow-nav-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    margin: 0px;
}

</style>