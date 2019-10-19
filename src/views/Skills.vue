<template>
    <MainContainer>
        <main class="main">
            <h4 class="title">MY SKILLS</h4>

            <div class="row" v-for="(s, index) in skills" :key="index">
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

                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div :class="`progress-bar-inside ${s.animationName}`">{{s.progressText}}</div>
                    </div>
                </div>
            </div>
        </main>

        <PreviousPage link="about"></PreviousPage>
        <NextPage link="experiences"></NextPage>
    </MainContainer>
</template>

<script>
export default {
    name: "skills",

    data() {
        return {
            skills: [
                {
                    icon: "html.png",
                    text: "HTML",
                    animationName: "race8",
                    progressText: "8.0"
                },

                {
                    icon: "css.png",
                    text: "CSS",
                    animationName: "race8",
                    progressText: "8.0"
                },

                {
                    icon: "javascript.png",
                    text: "Javascript",
                    animationName: "race8",
                    progressText: "8.0"
                },

                {
                    icon: "vue.png",
                    text: "Vue",
                    animationName: "race7",
                    progressText: "7.0"
                },

                {
                    icon: "firebase.png",
                    text: "Firebase",
                    animationName: "race6",
                    progressText: "6.0"
                },

                {
                    icon: "mongodb.png",
                    text: "MongoDB",
                    animationName: "race6",
                    progressText: "6.0"
                },

                {
                    icon: "php.png",
                    text: "PHP",
                    animationName: "race5-5",
                    progressText: "5.5"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/the_skills_animations.scss";

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

    .title {
        letter-spacing: 2px;
        margin-bottom: 15px;
        font-size: 1.8rem;
        font-weight: 400;
    }

    .row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

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

        .progress-bar-container {
            flex: 1;

            .progress-bar {
                width: 100%;
                height: 30px;
                background: #d3d3d3;

                .progress-bar-inside {
                    height: 30px;
                    background: #e25c4a;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: "Arial", sans-serif;
                }
            }
        }
    }
}
</style>