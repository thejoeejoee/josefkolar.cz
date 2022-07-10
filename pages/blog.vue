<template>
  <article>
    <ul>
      <li v-for="post in posts">
        <h4>
          <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
        </h4>
        <blockquote>
          {{ post.description }}
          <cite>{{ (new Date(post.createdAt)).toLocaleDateString('cs') }}</cite>
        </blockquote>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import PhotosGrid from "~/components/PhotosGrid.vue";
import _ from 'underscore'

export default Vue.extend({
  components: {},
  async asyncData({$content}) {
    return {
      posts: await $content({deep: true})
        .sortBy('createdAt', 'desc')
        .where({published: true})
        .only(['title', 'path', 'description', 'createdAt'])
        .fetch()
    }
  },
  head() {
    return {
      // @ts-ignore
      title: 'píšu',
    }
  }

})
</script>

<style lang="scss" scoped>
article {
  max-width: 80ch;
}

cite {
  float: right;
}
</style>
