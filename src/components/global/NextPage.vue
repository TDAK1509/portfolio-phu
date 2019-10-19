<template>
    <div class="next-page-container">
        <div class="arrow-button-container">
            <ArrowButton :link="link"></ArrowButton>
        </div>
    </div>
</template>

<script>
import ArrowButton from "./ArrowButton";

export default {
    name: "NextPage",

    props: {
        link: {
            type: String,
            required: true
        }
    },

    components: {
        ArrowButton
    }
};
</script>

<style lang="scss" scoped>
.next-page-container {
    height: 100vh;
    background: none;
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    .arrow-button-container {
        margin-right: 20px;
    }

    @media only screen and (max-width: 700px) {
        align-items: flex-end;
    }
}
</style>