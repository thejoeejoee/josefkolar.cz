<template>
  <div class="Photos__container">
    <template v-for="set in photos">
      <div class="Photos">
        <div
          v-for="photo in set"
          class="Photos__photo"
        >
          <img :srcset="photo.srcSet" :src="photo.src">
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "PhotosGrid",
  data() {
    const req = (n: Number) => n ? require(`~/assets/photos/${n.toString().padStart(2, '0')}.jpg`) : null;
    return {
      photos: ([
        ([1, 2, 34, 17, 10, 16, 22, 11, 28, 14, 18, 15, 19, 27, 36, 31, 32, 33]).map(req),
        ([23, 4, 5, 6, 7, 9, 8, 21, 20, 3, 24, 26, 25, 13, 29, 35]).map(req),
      ])
    }
  }
}
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
}

</style>
