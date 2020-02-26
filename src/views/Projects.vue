<template>
  <main class="projects">
    <div
      class="projects__project"
      v-for="(project, index) in projects"
      :key="`project${index}`"
    >
      <button
        class="projects__project-button"
        @click="viewProjectDetail(index)"
      >
        <img
          class="projects__project-main-image"
          :src="project.mainImage"
          alt="Project main image"
        />
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {
      selectedProjectIndex: -1,

      projects: [
        {
          mainImage:
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
          list: [
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg"
          ]
        },

        {
          mainImage:
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
          list: [
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg"
          ]
        },
        {
          mainImage:
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
          list: [
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg"
          ]
        },
        {
          mainImage:
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
          list: [
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg"
          ]
        }
      ]
    };
  },

  methods: {
    viewProjectDetail(index) {
      this.selectedProjectIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
}

.projects__project-button {
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
}

.projects__project-main-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

@media only screen and (max-width: 500px) {
  .projects {
    display: block;
  }
}
</style>
