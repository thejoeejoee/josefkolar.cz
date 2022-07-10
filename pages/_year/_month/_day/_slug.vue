<template>
  <article>
    <h1>{{ page.title }}</h1>
    <p class="meta">{{ (new Date(page.createdAt)).toLocaleDateString() }}</p>
    <hr>
    <p class="description" v-text="page.description"></p>
    <nuxt-content :document="page"/>
    <div v-if="prev || next" class="center">
      <hr>
      <NuxtLink v-if="prev" :to="'/' + prev.slug">⬅️ {{ prev.title }}</NuxtLink>
      <br>
      <NuxtLink v-if="next" :to="'/' + next.slug">➡️ {{ next.title }}</NuxtLink>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'underscore'
import { IContentDocument } from '@nuxt/content/types/content'

// TODO: OGs
export default Vue.extend({
  // layout: 'blog',
  async asyncData({$content, params, error}) {
    const slug = `${params.year}/${params.month}/${params.day}/${params.slug}`

    try {

      const page = await $content(slug).fetch()

      const [prev = null, next = null] = (await $content('/', {deep: true})
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(slug)
        .fetch()) as IContentDocument[];

      return {page, prev, next}
    } catch (e) {
      error({message: 'Not found', statusCode: 404})
    }
  },
  head() {
    return {
      // @ts-ignore
      title: this.page.title,
    }
  }
})
</script>

<style lang="scss" scoped>
article {
  max-width: 80ch;
  margin-top: 2rem;
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
