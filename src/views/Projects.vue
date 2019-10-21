<template>
    <main class="main">
        <div class="iframe-container">
            <iframe
                class="iframe"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/e-ORhEE9VVg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </main>
</template>

<script>
export default {
    name: "Projects"
};
</script>

<style lang="scss" scoped>
.iframe-container {
    position: relative;
    width: 550px;
    height: 325px;

    @media only screen and (max-width: 600px) {
        width: 300px;
        height: 220px;
    }

    .iframe {
        width: 100%;
        height: 100%;
    }
}
</style>