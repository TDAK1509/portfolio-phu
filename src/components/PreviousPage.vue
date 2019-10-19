<template>
    <div class="next-page-container">
        <div class="arrow-button-container">
            <ArrowButton reverse :link="link"></ArrowButton>
        </div>
    </div>
</template>

<script>
import ArrowButton from "./ArrowButton";

export default {
    name: "PreviousPage",

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
    left: 0;

    display: flex;
    align-items: center;

    .arrow-button-container {
        margin-left: 20px;
    }
}
</style>