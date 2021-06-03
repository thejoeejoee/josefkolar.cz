<template>
      <PhotosGrid
        :photos="photos"
      ></PhotosGrid>
</template>

<script lang="ts">
    import Vue from 'vue'
    import PhotosGrid from "~/components/PhotosGrid.vue";
    import _ from 'underscore'

    export default Vue.extend({
      components: {PhotosGrid},
      asyncData() {
        const req = (n: Number) => n ? require(`~/assets/photos/${n.toString().padStart(2, '0')}.jpg`) : null;
        return {
          photos: ([
            ([1, 2, 34, 17, 10, 16, 22, 11, 28, 14, 18, 15,  19, 27, 36, 31, 32, 33]).map(req),
            ([23, 4, 5, 6, 7, 9, 8, 21, 20, 3, 24, 26, 25, 13, 29, 35]).map(req),
          ])
        }
      }
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
