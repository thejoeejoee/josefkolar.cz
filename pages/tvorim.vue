<template>
  <div class="Photos__container Photos">
    <div
      v-for="photo in items"
      class="Photos__photo"
    >
      <img v-if="photo.srcSet" :srcset="photo.srcSet" :src="photo.src">
      <iframe
        v-else
        :src="photo + '?modestbranding=1&autohide=1&showinfo=0&controls=0'" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      // @ts-ignore
      title: 'tvořím',
    }
  },
  /*
  <iframe width="560" height="315" src="https://www.youtube.com/embed/gVqTARmmooo" title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   */
  data() {
    return {
      items: [
        require('@/assets/photos/01.jpg'),
        "https://www.youtube.com/embed/AqnBwoS6Mfc",
        require('@/assets/photos/05.jpg'),
        require('@/assets/photos/11.jpg'),
        "https://www.youtube.com/embed/TUepUJlMUFQ",
        require('@/assets/photos/14.jpg'),
        require('@/assets/photos/17.jpg'),
        "https://www.youtube.com/embed/gVqTARmmooo",
        require('@/assets/photos/19.jpg'),
        require('@/assets/photos/22.jpg'),
        require('@/assets/photos/ny-01.jpg'),
        require('@/assets/photos/03.jpg'),
        require('@/assets/photos/25.jpg'),
        "https://www.youtube.com/embed/AJNlJ6eSXOI",
        require('@/assets/photos/26.jpg'),
        require('@/assets/photos/nfg-01.jpg'),
        require('@/assets/photos/ny-02.jpg'),
        require('@/assets/photos/27.jpg'),
        require('@/assets/photos/34.jpg'),
        "https://www.youtube.com/embed/pMPFoxjdXOI",
        require('@/assets/photos/36.jpg'),
        require('@/assets/photos/ny-03.jpg'),
      ]
    }
  }
})
</script>


<style scoped lang="scss">
.Photos {
  line-height: 0;

  column-count: 3;
  column-gap: .5rem;

  @media (max-width: 960px) {
    column-count: 2;
  }
  @media (max-width: 720px) {
    column-count: 1;
  }

  margin-top: .5rem;
  margin-bottom: .5rem;

  &__container {
    margin-top: 1rem;
  }

  &__photo {
    transition: all 400ms ease;
    overflow: hidden;

    transform: scale(1);

    &:hover {
      z-index: 100;
      transform: scale(1);

      img {
        transform: scale(1.05);
      }
    }

    margin-bottom: .5rem;
  }

  img {
    transition: all 400ms ease;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
  }
}

</style>
