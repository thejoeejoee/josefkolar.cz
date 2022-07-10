<template>
  <article>
    <PhotosGrid></PhotosGrid>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import PhotosGrid from "~/components/PhotosGrid.vue";
import _ from 'underscore'

export default Vue.extend({
  components: {PhotosGrid},
  head() {
    return {
      // @ts-ignore
      title: 'tvořím',
    }
  }
})
</script>
