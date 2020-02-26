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
      projects: [
        {
          mainImage:
            "https://image.freepik.com/free-photo/sexy-girl-glasses-looking-calmly-camera_1187-5188.jpg",
          list: [
            "https://img.izismile.com/img/img12/20191021/640/beautiful_girls_make_the_world_go_around_640_01.jpg",
            "https://img.izismile.com/img/img12/20190529/640/beautiful_girls_make_the_world_go_around_640_high_26.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0T97PV6qRZH5J49xlROjWijuRfy4Z3qQdVKx0YJIuW1FkO5z&s"
          ]
        },

        {
          mainImage:
            "https://image.winudf.com/v2/image/Y29tLnN1bW1lcmFwcHMuYmVhdXRpZnVsZ2lybHN3YWxscGFwZXJzX3NjcmVlbl81XzE1MzYyODEzOTFfMDY3/screen-5.jpg?fakeurl=1&type=.jpg",
          list: [
            "https://i.pinimg.com/originals/2a/06/53/2a06530a7f3d06caeb9f80980e6e2f02.jpg",
            "https://images.unsplash.com/photo-1573084615714-fd555dcc785e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          ]
        },
        {
          mainImage:
            "https://www.imagesjunction.com/images/img/beautiful_girls_dp_images.jpg",
          list: [
            "https://images.unsplash.com/photo-1527008527515-d18557de1589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-9/s960x960/87323145_2669101373195277_2013522557180837888_o.jpg?_nc_cat=109&_nc_sid=a61e81&_nc_ohc=0dIokwYb5UgAX_3Ee5o&_nc_ht=scontent-hkg3-2.xx&_nc_tp=7&oh=ee8b09accc8172f1416d901b44dcbef7&oe=5EF3D99E",
            "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-0/p640x640/87034118_2665808790191202_663773842543476736_o.jpg?_nc_cat=106&_nc_sid=a61e81&_nc_ohc=ryimqhbuF3oAX_ZTS3w&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=efdfc1a47b4d9dbf35dc418a8dc2bace&oe=5EF6E10F",
            "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-0/p640x640/87152129_2665808463524568_1776601428010205184_o.jpg?_nc_cat=103&_nc_sid=a61e81&_nc_ohc=Ni-Sy_e1d5sAX8XA8ns&_nc_ht=scontent-hkg3-1.xx&_nc_tp=6&oh=2b6d2d5581306c46e38eb5dc652e9ec0&oe=5EBBE9B0"
          ]
        },
        {
          mainImage:
            "https://pbs.twimg.com/profile_images/1076818210144641028/NRQl-eOQ_400x400.jpg",
          list: [
            "https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-9/87257001_2663712150400866_1322063007554994176_o.jpg?_nc_cat=110&_nc_sid=a61e81&_nc_ohc=iF2xQBqw6G0AX9B-x-g&_nc_ht=scontent-hkg3-2.xx&oh=8e0ad24bc6dd928e60f2d443be41ad2e&oe=5EC22DFF",
            "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/87047362_2663711490400932_4528528034168307712_o.jpg?_nc_cat=104&_nc_sid=a61e81&_nc_ohc=UraLItFilKAAX9Dvrzs&_nc_ht=scontent-hkg3-1.xx&oh=fb134b51bba32a6fa59957d4187f2433&oe=5F009971",
            "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/86716747_2663711357067612_6387915197327081472_o.jpg?_nc_cat=103&_nc_sid=a61e81&_nc_ohc=W2pDAaz-PyMAX9Kz9RY&_nc_ht=scontent-hkg3-1.xx&oh=ee2af04d787bc473586ede4465f6ecfd&oe=5EFF47E9",
            "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-0/p640x640/87039875_2663711783734236_5759977711497904128_o.jpg?_nc_cat=100&_nc_sid=a61e81&_nc_ohc=qFStbbXnZuUAX-oBy1p&_nc_ht=scontent-hkg3-1.xx&_nc_tp=6&oh=599e54f3d71d346112e7831c5cae302a&oe=5F02866C"
          ]
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
