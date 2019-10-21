<template>
    <div id="app">
        <TheNavBar></TheNavBar>

        <TheMainContainer>
            <transition name="page" mode="out-in">
                <router-view />
            </transition>
        </TheMainContainer>
    </div>
</template>

<script>
import TheMainContainer from "@/components/TheMainContainer";
export default {
    name: "App",

    components: {
        TheMainContainer
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700&display=swap");

* {
    padding: 0;
    margin: 0;
}

ul,
li {
    list-style-type: none;
}

body {
    background: #fff;
    color: #1f1c1c;
    font-family: "Raleway", sans-serif;
}

.page-enter-active {
    animation: bounce-in 0.3s ease-in-out;
}
.page-leave-active {
    animation: bounce-out 0.3s ease-in-out;
}

@keyframes bounce-in {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes bounce-out {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.5);
        opacity: 0;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
