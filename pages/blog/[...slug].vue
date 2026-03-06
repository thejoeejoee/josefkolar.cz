<template>
  <ContentRenderer v-if="page" :value="page">
    <template #default="{ value }">
      <article>
        <h1>{{ value.title }}</h1>
        <ContentRendererMarkdown :value="value" />
      </article>
    </template>
  </ContentRenderer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})

const route = useRoute()

const { data: page } = await useAsyncData(
  `blog-${route.path}`,
  () => queryCollection('content')
    .where('path', '=', route.path)
    .first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Článek nenalezen' })
}

useHead({
  title: page.value.title,
})
</script>
