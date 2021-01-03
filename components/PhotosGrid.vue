<template>
  <main>
    <h2>< Zpět</h2>
    <template v-for="set in photos">
      <div class="Photos">
        <div
            v-for="photo in set"
            class="Photos__photo"
        >
          <img :srcset="photo.srcSet">
        </div>
      </div>
    </template>
  </main>
</template>

<script>
export default {
  name: "PhotosGrid",
  props: {
    photos: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.Photos {
  line-height: 0;

  column-count: 3;
  column-gap: .5em;

  @media (max-width: 960px) {
    column-count: 2;
  }
  @media (max-width: 720px) {
    column-count: 1;
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
    margin-bottom: .5em;
  }

  img {
    transition: all 400ms ease;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

</style>

<style lang="scss">
body {
  max-width: 60vw;
}

@media (max-width: 960px) {
  body {
    max-width: 90vw;
  }
}

@media (max-width: 1440px) {
  body {
    max-width: 80vw;
  }
}

@media (max-width: 1920px) {
  body {
    max-width: 70vw;
  }
}
</style>
