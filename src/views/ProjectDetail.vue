<template>
  <div class="project-detail">
    <image-slider v-if="imageList.length > 0" :images="imageList" />
  </div>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";
export default {
  name: "ProjectDetail",

  components: {
    ImageSlider
  },

  computed: {
    imageList() {
      return this.$store.state.projectDetail;
    }
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
