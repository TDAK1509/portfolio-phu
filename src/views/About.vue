<template>
    <MainContainer>
        <main class="main">
            <div class="about-me-container" ref="aboutMeContainer">
                <div class="title-container">
                    <h4 class="title" ref="aboutMe">ABOUT ME</h4>
                </div>

                <ul class="list">
                    <li
                        class="list-item"
                        v-for="(a, index) in aboutMe"
                        :key="`aboutMeItem${index}`"
                        :ref="`aboutMeItem${index}`"
                    >
                        <font-awesome-icon icon="angle-right" />
                        <span class="text">{{a}}.</span>
                    </li>
                </ul>

                <div class="divider" ref="divider"></div>
            </div>

            <div class="skill-row-container">
                <div class="skill-row" v-for="(s, index) in skills" :key="`skillRow${index}`">
                    <div class="icon-container">
                        <img
                            :src="require (`@/assets/images/${s.icon}`)"
                            :alt="s.text"
                            class="skills-icon"
                        />
                    </div>

                    <div class="text-container">
                        <span class="text">{{s.text}}</span>
                    </div>

                    <div class="skill-bar-container">
                        <div class="skill-bar">
                            <div :class="`skill-bar-inside`" :ref="`skillBar${index}`"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </MainContainer>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
    name: "About",

    data() {
        return {
            aboutMe: [
                "Test-driven development (TDD)",
                "Always try to write dry and maintainable code",
                "Responsible"
            ],

            skills: [
                {
                    icon: "html.png",
                    text: "HTML",
                    width: "80%"
                },

                {
                    icon: "css.png",
                    text: "CSS",
                    width: "80%"
                },

                {
                    icon: "javascript.png",
                    text: "Javascript",
                    width: "80%"
                },

                {
                    icon: "vue.png",
                    text: "Vue",
                    width: "70%"
                },

                {
                    icon: "firebase.png",
                    text: "Firebase",
                    width: "60%"
                },

                {
                    icon: "mongodb.png",
                    text: "MongoDB",
                    width: "60%"
                },

                {
                    icon: "php.png",
                    text: "PHP",
                    width: "55%"
                }
            ]
        };
    },

    methods: {
        animate() {
            const tl = anime.timeline({
                easing: "easeOutExpo"
            });

            tl.add(this.animateAboutMeContainerDown());

            tl.add(this.animateAboutMe());

            for (let i = 0; i < this.aboutMe.length; i++) {
                const ref = this.$refs[`aboutMeItem${i}`];
                tl.add(this.animateAboutMeItem(ref));
            }

            tl.add(this.animateDivider());

            tl.add(this.animateAboutMeContainerUp());

            tl.add(this.animateShowSkillBar(), "-=450");

            for (let i = 0; i < this.skills.length; i++) {
                const offset = i === 0 ? "-=500" : "-=1500";
                const width = this.skills[i].width;
                const ref = this.$refs[`skillBar${i}`][0];
                tl.add(this.animateSkillBar(ref, width), offset);
            }
        },

        animateAboutMeContainerDown() {
            return {
                targets: this.$refs.aboutMeContainer,
                translateY: 150,
                duration: 100
            };
        },

        animateAboutMe() {
            return {
                targets: this.$refs.aboutMe,
                keyframes: [
                    { bottom: -80, duration: 250 },
                    { left: -20, letterSpacing: 25, duration: 600 },
                    { left: 0, bottom: 0, letterSpacing: 2 }
                ],
                opacity: 1,
                duration: 1200,
                easing: "easeOutQuart"
            };
        },

        animateAboutMeItem(ref) {
            return {
                targets: ref,
                opacity: 1,
                direction: "reverse",
                duration: 1300,
                easing: "easeInOutSine"
            };
        },

        animateDivider() {
            return {
                targets: this.$refs.divider,
                opacity: 1,
                rotate: "1turn"
            };
        },

        animateAboutMeContainerUp() {
            return {
                targets: this.$refs.aboutMeContainer,
                translateY: 0,
                duration: 300
            };
        },

        animateShowSkillBar() {
            return {
                targets: ".skill-row",
                opacity: 1,
                duration: 1000,
                easing: "easeInOutQuart"
            };
        },

        animateSkillBar(ref, width) {
            return {
                targets: ref,
                width: width,
                duration: 1500,
                easing: "easeInOutQuart",
                update: function(anim) {
                    const value = parseFloat(width) / 100;
                    const progress = Math.round(anim.progress);
                    const text = ((value * progress) / 10).toFixed(2);
                    ref.innerText = text;
                }
            };
        }
    },

    mounted() {
        this.animate();
    }
};
</script>

<style lang="scss" scoped>
.main {
    flex: 0.6;
    margin: 0 90px;

    @media only screen and (max-width: 1200px) {
        flex: 0.8;
        margin: 0 70px;
    }

    @media only screen and (max-width: 700px) {
        flex: 1;
        margin: 0 30px;
    }

    .title-container {
        .title {
            display: inline-block;
            letter-spacing: 2px;
            margin-bottom: 20px;
            font-size: 1.8rem;
            position: relative;
            opacity: 0;
        }
    }

    .list {
        padding-left: 25px;

        .list-item {
            margin-bottom: 10px;
            opacity: 0;

            .text {
                margin-left: 15px;
            }
        }
    }

    .divider {
        margin: 30px 0;
        border-bottom: 1px solid #d3d3d3;
        opacity: 0;
    }

    .skill-row-container {
        .skill-row {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            opacity: 0;

            .icon-container {
                .skills-icon {
                    width: 30px;
                    height: 30px;
                    object-fit: cover;
                }
            }

            .text-container {
                flex-basis: 100px;
                margin-left: 10px;
                margin-right: 10px;
            }

            .skill-bar-container {
                flex: 1;

                .skill-bar {
                    width: 100%;
                    height: 30px;
                    background: #d3d3d3;

                    .skill-bar-inside {
                        height: 30px;
                        background: #e25c4a;
                        color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: "Arial", sans-serif;
                        width: 0%;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .title {
        font-size: 1.2rem !important;
        margin-bottom: 10px !important;
    }

    .list {
        padding-left: 0 !important;
        font-size: 0.9rem;
    }

    .divider {
        margin: 25px 0 !important;
    }

    .text-container {
        display: none;
    }

    .skill-bar-container {
        margin-left: 15px;
    }
}
</style>