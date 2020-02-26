<template>
  <main class="main">
    <div class="iframe-container">
      <carousel v-bind="carouselOptions">
        <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
        <slide>
          Slide 3 Content
        </slide>
        <slide>
          Slide 4 Content
        </slide>
        <slide>
          Slide 5 Content
        </slide>
      </carousel>
    </div>
  </main>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Projects",

  components: {
    Carousel,
    Slide
  },

  data() {
    return {
      // https://github.com/SSENSE/vue-carousel
      carouselOptions: {
        perPage: 1,
        paginationEnabled: false,
        centerMode: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.iframe-container {
  position: relative;
  width: 550px;
  height: 325px;

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 220px;
  }

  .iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
