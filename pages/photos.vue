<template>
      <PhotosGrid></PhotosGrid>
</template>

<script lang="ts">
    import Vue from 'vue'
    import PhotosGrid from "~/components/PhotosGrid.vue";
    import _ from 'underscore'

    export default Vue.extend({
      components: {PhotosGrid},
    })
</script>


<style lang="scss">
article, body {
    max-width: 60vw;
    @media (max-width: 960px) {
        max-width: 90vw;
    }

    @media (max-width: 1440px) {
        max-width: 80vw;
    }

    @media (max-width: 1920px) {
        max-width: 70vw;
    }
}
</style>
