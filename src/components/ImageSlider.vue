<template>
  <div class="image-slider">
    <carousel v-bind="carouselOptions">
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Image slider item" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "ImageSlider",

  components: {
    Carousel,
    Slide
  },

  props: ["images"],

  data() {
    return {
      // https://github.com/SSENSE/vue-carousel
      carouselOptions: {
        perPage: 1,
        paginationActiveColor: "yellow"
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
