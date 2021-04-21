<template>
  <div>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page"/>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import _ from 'underscore'

    export default Vue.extend({
      async asyncData({ $content, params }) {
        const slug = `${params.year}/${params.month}/${params.day}/${params.slug}`

        const page = await $content(slug).fetch()

        return {
          page
        }
      }
    })
</script>

<style lang="scss">

</style>
