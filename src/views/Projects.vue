<template>
  <main class="projects">
    <div
      class="projects__project"
      v-for="(project, index) in projects"
      :key="`project${index}`"
    >
      <button
        class="projects__project-button"
        @click="viewProjectDetail(project.list)"
      >
        <figure>
          <img
            class="projects__project-main-image"
            :src="project.mainImage"
            alt="Project main image"
          />
          <figcaption class="projects__project-caption">
            {{ project.caption }}
          </figcaption>
        </figure>
      </button>
    </div>
  </main>
</template>

<script>
import p1_i1 from "@/assets/images/project-1/image_1.jpg";
import p1_i2 from "@/assets/images/project-1/image_2.jpg";
import p1_i3 from "@/assets/images/project-1/image_3.jpg";
import p1_i4 from "@/assets/images/project-1/image_4.jpg";
import p1_i5 from "@/assets/images/project-1/image_5.jpg";
import p1_i6 from "@/assets/images/project-1/image_6.jpg";

import p2_i1 from "@/assets/images/project-2/image_1.jpg";
import p2_i2 from "@/assets/images/project-2/image_2.jpg";
import p2_i3 from "@/assets/images/project-2/image_3.jpg";
import p2_i4 from "@/assets/images/project-2/image_4.jpg";

import p3_i1 from "@/assets/images/project-3/image_1.jpg";
import p3_i2 from "@/assets/images/project-3/image_2.jpg";
import p3_i3 from "@/assets/images/project-3/image_3.jpg";
import p3_i4 from "@/assets/images/project-3/image_4.jpg";

import p4_i1 from "@/assets/images/project-4/image_1.jpg";
import p4_i2 from "@/assets/images/project-4/image_2.jpg";
import p4_i3 from "@/assets/images/project-4/image_3.jpg";
import p4_i4 from "@/assets/images/project-4/image_4.jpg";
import p4_i5 from "@/assets/images/project-4/image_5.jpg";
import p4_i6 from "@/assets/images/project-4/image_6.jpg";
import p4_i7 from "@/assets/images/project-4/image_7.jpg";
import p4_i8 from "@/assets/images/project-4/image_8.jpg";

import p5_i1 from "@/assets/images/project-5/image_1.jpg";
import p5_i2 from "@/assets/images/project-5/image_2.jpg";
import p5_i3 from "@/assets/images/project-5/image_3.jpg";
import p5_i4 from "@/assets/images/project-5/image_4.jpg";
import p5_i5 from "@/assets/images/project-5/image_5.jpg";
import p5_i6 from "@/assets/images/project-5/image_6.jpg";

export default {
  name: "Projects",

  data() {
    return {
      projects: [
        {
          mainImage: p1_i1,
          list: [p1_i1, p1_i2, p1_i3, p1_i4, p1_i5, p1_i6],
          caption: "12 King St., Toronto (19.03.2019)"
        },

        {
          mainImage: p2_i1,
          list: [p2_i1, p2_i2, p2_i3, p2_i4],
          caption: "17 Shelmar Dr, Toronto (20.06.2018)"
        },
        {
          mainImage: p3_i1,
          list: [p3_i1, p3_i2, p3_i3, p3_i4],
          caption: "20 Cetona Ave, Woodbridge (13.03.2018)"
        },
        {
          mainImage: p4_i1,
          list: [p4_i1, p4_i2, p4_i3, p4_i4, p4_i5, p4_i6, p4_i7, p4_i8],
          caption: "To Ky St., Tan Thoi Hiep, D.12, HCMC (18.11.2013)"
        },
        {
          mainImage: p5_i1,
          list: [p5_i1, p5_i2, p5_i3, p5_i4, p5_i5, p5_i6],
          caption: "Other small projects"
        }
      ]
    };
  },

  methods: {
    viewProjectDetail(imageList) {
      this.$store.commit("setProjectDetail", imageList);
      this.$router.push({ name: "project-detail" });
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

.projects__project-caption {
  margin-top: 5px;
}

@media only screen and (max-width: 500px) {
  .projects {
    display: block;
    padding-top: 570px;
  }

  .projects__project-button {
    margin-bottom: 20px;
  }
}
</style>
