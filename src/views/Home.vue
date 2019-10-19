<template>
    <MainContainer>
        <main class="home">
            <h2 class="subhead h2 animation-type a1">Hi,</h2>

            <h1 class="headline h1 animation-type a2">I'm TDAK,</h1>

            <h4 class="subhead h4 animation-type a3">A fullstack web developer</h4>

            <p class="caption animation-type a4">...with a sense of humor.</p>

            <img src="../assets/images/avatar.jpg" alt class="avatar slide-from-right" />
        </main>

        <PreviousPage link="contact"></PreviousPage>
        <NextPage link="about"></NextPage>
    </MainContainer>
</template>

<script>
export default {
    name: "Home"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/the_home_animations.scss";

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    overflow: hidden;

    .home {
        flex-basis: 368px;

        .avatar {
            margin: 20px 0;
            border-radius: 50%;
            width: 200px;
            height: 200px;
            object-fit: cover;
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
}
</style>
