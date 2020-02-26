<template>
  <div class="project-detail">
    <image-slider :images="list" />
  </div>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";
export default {
  name: "ProjectDetail",
  components: {
    ImageSlider
  },

  data() {
    return {
      list: [
        "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
        "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
        "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
        "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.project-detail {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 30%;
  text-align: center;
}
</style>
