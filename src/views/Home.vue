<template>
  <main class="home">
    <h2 class="subhead h2" ref="hi">
      <span class="letter" v-for="(letter, index) in hi" :key="index">{{
        letter
      }}</span>
    </h2>

    <h1 class="headline h1" ref="name">
      <template v-for="(l, index) in name.split('')">
        <span class="space-name" v-if="l == ' '" :key="`headline${index}`"
          >&nbsp;</span
        >
        <span class="letter" v-else :key="`headline${index}`">{{ l }}</span>
      </template>
    </h1>

    <h4 class="subhead h4" ref="title">
      <template v-for="(l, index) in title.split('')">
        <span class="space-title" v-if="l == ' '" :key="`subhead${index}`"
          >&nbsp;</span
        >
        <span class="letter" v-else :key="`subhead${index}`">{{ l }}</span>
      </template>
    </h4>

    <p class="caption" ref="caption">
      <template v-for="(l, index) in caption.split('')">
        <span class="space-title" v-if="l == ' '" :key="`caption${index}`"
          >&nbsp;</span
        >
        <span class="letter" v-else :key="`caption${index}`">{{ l }}</span>
      </template>
    </p>

    <div class="row">
      <router-link to="about" exact>
        <img
          src="../assets/images/avatar.png"
          alt
          class="avatar slide-from-right"
          ref="avatar"
        />
      </router-link>

      <div class="click-me" ref="clickMe">
        <font-awesome-icon icon="hand-point-left"></font-awesome-icon>
        <span class="text">Click</span>
      </div>
    </div>
  </main>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Home",

  data() {
    return {
      hi: "Hi,",
      name: "I'm TDAK,",
      title: "A fullstack web developer",
      caption: "...with a sense of humor."
    };
  },

  computed: {
    test() {
      return this.name.split("");
    }
  },

  methods: {
    animate() {
      const tl = anime.timeline();

      tl.add(this.animateLetter(this.$refs.hi), "+=300");
      tl.add(this.animateLetter(this.$refs.name), "+=300");
      tl.add(this.animateLetter(this.$refs.title), "+=150");
      tl.add(this.animateLetter(this.$refs.caption), "-=250");
      tl.add(this.animateAvatar());
      tl.add(this.animateShowClickMe());
    },

    animateLetter(ref) {
      const refLetters = ref.querySelectorAll(".letter");

      return {
        targets: refLetters,
        translateY: ["1.1em", 0],
        duration: 750,
        opacity: 1,
        delay: (el, i) => 50 * i
      };
    },

    animateAvatar() {
      return {
        targets: this.$refs.avatar,
        opacity: 1,
        translateX: [100, 0],
        easing: "easeOutElastic"
      };
    },

    animateShowClickMe() {
      return {
        targets: this.$refs.clickMe,
        opacity: 1
      };
    },

    animatePointingClickMe() {
      return {
        targets: this.$refs.clickMe,
        loop: true,
        translateX: 50
      };
    }
  },

  mounted() {
    this.animate();
  }
};
</script>

<style lang="scss" scoped>
.home {
  .row {
    display: flex;
    align-items: center;

    .avatar {
      margin: 20px 0;
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: cover;
      opacity: 0;
    }

    .click-me {
      opacity: 0;
      margin-left: 20px;
      font-size: 1.3rem;
      animation: pointing 800ms ease-out infinite;

      .text {
        margin-left: 10px;
      }
    }
  }

  .headline {
    font-size: 3rem;
    line-height: 3rem;

    &.h1 {
      color: #e02a2a;
      margin-bottom: 10px;
    }
  }

  .subhead {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 5px;

    &.h2 {
      font-size: 2.2rem;
      margin-bottom: 10px;
    }
  }

  .caption {
    margin-top: 5px;
    color: #757575;
    font-style: italic;
  }
}

@media only screen and (max-width: 500px) {
  .home {
    flex-basis: 280px;

    .avatar {
      width: 180px !important;
      height: 180px !important;
    }

    .click-me {
      font-size: 1rem !important;
    }

    .headline {
      font-size: 2rem;
    }

    .subhead {
      font-size: 1rem;

      &.h2 {
        font-size: 1.3rem;
      }
    }

    .caption {
      font-size: 0.8rem;
    }
  }
}

.letter {
  display: inline-block;
  opacity: 0;
}

.space-name {
  margin-right: 0.5rem;
}

.space-title {
  margin-right: 0.34rem;
}

@keyframes pointing {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
  }
}
</style>
