<template>
  <main>
    <nuxt/>
  </main>
</template>

<script>
import ogImage from '@/assets/jk.jpg';

export default {
  head() {
    // TODO: should be absolute URL
    const ogImageUrl = ogImage;
    return {
      meta: [
        {hid: 'og:image', property: 'og:image', content: ogImageUrl},
        {hid: 'twitter:image', name: 'twitter:image', content: ogImageUrl},

      ]
    }
  }
}
</script>

<style>

</style>
