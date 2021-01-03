<template>
    <article>
      <PhotosGrid
        :photos="photos"
      ></PhotosGrid>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue'
    import PhotosGrid from "~/components/PhotosGrid.vue";
    import _ from 'underscore'

    export default Vue.extend({
      components: {PhotosGrid},
      asyncData() {
        const req = (n: Number) => require(`~/assets/photos/${n.toString().padStart(2, '0')}.jpg`);
        return {
          photos: /*_.shuffle*/([
            ([1, 30, 34, 22, 28, 2]).map(req),
            ([17, 10, 16, 11, 14, 18, 15, 19, 27, 31, 32, 33]).map(req),
            ([23, 4, 5, 6, 7, 9, 8, 21, 20, 29, 3, 24, 26, 25, 13]).map(req),
          ])
        }
      }
    })
</script>

<style lang="scss">

</style>
