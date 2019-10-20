<template>
    <div id="app">
        <TheNavBar></TheNavBar>

        <transition name="page">
            <router-view />
        </transition>
    </div>
</template>

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

#app {
    overflow: hidden !important;
}

.page-enter-active {
    // animation: bounce-in 0.3s ease-in-out;
}
.page-leave-active {
    // animation: bounce-out 0.3s ease-in-out;
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
</style>
