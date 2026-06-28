<template>
  <div>
    <h2 class="Photos__title">
      <Highlight>Fotím.</Highlight>
    </h2>
    <div
      class="Photos__container Photos"
    >
      <div
        v-for="(photo, index) in items"
        :key="index"
        class="Photos__photo"
      >
        <img v-if="typeof photo === 'object'" :src="photo.src" :alt="`foto ${index + 1}`">
        <iframe
          v-else
          :src="photo + '?modestbranding=1&autohide=1&showinfo=0&controls=0'" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import photo01 from '@/assets/photos/01.jpg'
import photo05 from '@/assets/photos/05.jpg'
import photo11 from '@/assets/photos/11.jpg'
import photo14 from '@/assets/photos/14.jpg'
import photo17 from '@/assets/photos/17.jpg'
import photo19 from '@/assets/photos/19.jpg'
import photo22 from '@/assets/photos/22.jpg'
import photoNy01 from '@/assets/photos/ny-01.jpg'
import photo03 from '@/assets/photos/03.jpg'
import photo25 from '@/assets/photos/25.jpg'
import photo26 from '@/assets/photos/26.jpg'
import photoNfg01 from '@/assets/photos/nfg-01.jpg'
import photoNy02 from '@/assets/photos/ny-02.jpg'
import photo27 from '@/assets/photos/27.jpg'
import photo34 from '@/assets/photos/34.jpg'
import photo36 from '@/assets/photos/36.jpg'
import photoNy03 from '@/assets/photos/ny-03.jpg'

type PhotoItem = { src: string } | string

const items: PhotoItem[] = [
  { src: photo01 },
  'https://www.youtube.com/embed/AqnBwoS6Mfc',
  { src: photo05 },
  { src: photo11 },
  'https://www.youtube.com/embed/TUepUJlMUFQ',
  { src: photo14 },
  { src: photo17 },
  'https://www.youtube.com/embed/gVqTARmmooo',
  { src: photo19 },
  { src: photo22 },
  { src: photoNy01 },
  { src: photo03 },
  { src: photo25 },
  'https://www.youtube.com/embed/AJNlJ6eSXOI',
  { src: photo26 },
  { src: photoNfg01 },
  { src: photoNy02 },
  { src: photo27 },
  { src: photo34 },
  'https://www.youtube.com/embed/pMPFoxjdXOI',
  { src: photo36 },
  { src: photoNy03 },
]

useHead({
  title: 'tvořím',
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

  // #10 — Photo page title
  &__title {
    text-align: center;
    margin-bottom: 1rem;
  }

  &__container {
    margin-top: 1rem;
  }

  &__photo {
    transition: all 400ms ease;
    overflow: hidden;
    border-radius: 4px;

    transform: scale(1);

    &:hover {
      z-index: 100;
      transform: scale(1);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

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
    border-radius: 4px;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 4px;
  }
}

</style>
