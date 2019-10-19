<template>
  <button class="arrow-button" @click="goToPage">
    <img src="../assets/images/arrow-right.png" alt="Arrow-right" :class="imgClasses" />
  </button>
</template>

<script>
export default {
    name: 'ArrowButton',

    props: {
        link: String,
        reverse: {
            type: Boolean,
            defaut: false
        }
    },

    computed: {
        imgClasses() {
            return this.reverse === false ? 'arrow' : 'arrow reverse'
        }
    },

    methods: {
        goToPage() {
            this.$router.push(this.link)
        }
    }
}
</script>

<style lang="scss" scoped>
.arrow-button {
    border: none;
    background: none;
    cursor: pointer;

    .arrow {
        width: 50px;

        &.reverse {
            transform: rotate(180deg);
        }
    }
}
</style>