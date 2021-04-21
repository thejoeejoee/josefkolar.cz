<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p class="meta">{{ page.createdAt.toString() }}</p>
    <hr>
    <p class="description" v-text="page.description"></p>
    <nuxt-content :document="page"/>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import _ from 'underscore'

    // TODO: OGs
    export default Vue.extend({
      layout: 'blog',
      async asyncData({ $content, params, error }) {
        const slug = `${params.year}/${params.month}/${params.day}/${params.slug}`

        try {

          const page = await $content(slug).fetch()

          return {
            page
          }
        } catch (e) {
          error({message: 'Not found', statusCode: 404})
        }
      }
    })
</script>

<style lang="scss">
body {
  max-width: 100ch;
}
figure {
  margin: 2rem 0;
  max-width: 100%;
  img {
    margin: 0 auto;
  }
  figcaption {
    text-align: center;
    font-size: 1.1em;
    font-style: italic;
    color: #5e5e5e;
  }
}
.meta {
  color: #5e5e5e;
  text-align: center;
}
.description {
  font-size: 1.5em;
  line-height: 1.7;
  &:first-letter {
    color: #30c;
    font-size: 4em;
    float: left;
    font-weight: bold;
    margin-right: .1em;
    line-height: .8;
  }
}

</style>
