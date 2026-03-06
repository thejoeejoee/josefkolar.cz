<template>
  <article>
    <ul v-if="posts?.length">
      <li v-for="post in posts" :key="post.path">
        <h4>
          <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        </h4>
        <blockquote>
          {{ post.description }}
          <cite>{{ formatDate(post.date) }}</cite>
        </blockquote>
      </li>
    </ul>
    <p v-else>Zatím nic.</p>
  </article>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('content')
    .where('published', '=', true)
    .order('date', 'DESC')
    .select('title', 'path', 'description', 'date')
    .all()
)

const formatDate = (date?: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('cs')
}

useHead({
  title: 'píšu',
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
