<template>
    <MainContainer>
        <main class="home">
            <h2 class="subhead h2" ref="hi">
                <span class="letter" v-for="letter in hi">{{letter}}</span>
            </h2>

            <h1 class="headline h1" ref="name">
                <template v-for="l in name.split('')">
                    <span class="space-name" v-if="l == ' '">&nbsp;</span>
                    <span class="letter" v-else>{{l}}</span>
                </template>
            </h1>

            <h4 class="subhead h4" ref="title">
                <template v-for="l in title.split('')">
                    <span class="space-title" v-if="l == ' '">&nbsp;</span>
                    <span class="letter" v-else>{{l}}</span>
                </template>
            </h4>

            <p class="caption" ref="caption">
                <template v-for="l in caption.split('')">
                    <span class="space-title" v-if="l == ' '">&nbsp;</span>
                    <span class="letter" v-else>{{l}}</span>
                </template>
            </p>

            <img src="../assets/images/avatar.jpg" alt class="avatar slide-from-right" ref="avatar" />
        </main>

        <PreviousPage link="contact"></PreviousPage>
        <NextPage link="about"></NextPage>
    </MainContainer>
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

            tl.add(this.animateLetter(this.$refs.hi), "+=500");
            tl.add(this.animateLetter(this.$refs.name), "+=300");
            tl.add(this.animateLetter(this.$refs.title), "+=150");
            tl.add(this.animateLetter(this.$refs.caption), "-=250");
            tl.add(this.animateAvatar(), "+=00");
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
        }
    },

    mounted() {
        this.animate();
    }
};
</script>

<style lang="scss" scoped>
.home {
    flex-basis: 368px;

    .avatar {
        margin: 20px 0;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        object-fit: cover;
        opacity: 0;
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
            width: 140px;
            height: 140px;
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
</style>
