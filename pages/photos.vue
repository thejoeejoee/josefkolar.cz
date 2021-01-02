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
        return {
          photos: _.shuffle(Array.from(
              {length: 35},
              (x, i) => (i + 1)
          )).map((n: Number) => require(`~/assets/photos/${n.toString().padStart(2, '0')}.jpg`))
        }
      }
    })
</script>

<style lang="scss">

</style>
