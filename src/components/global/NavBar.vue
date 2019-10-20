<template>
    <nav class="nav">
        <ul class="list">
            <li class="list-item">
                <router-link class="link" to="/" exact>Home</router-link>
            </li>
            <li class="list-item">
                <router-link class="link" to="about" exact>About</router-link>
            </li>
            <li class="list-item">
                <router-link class="link" to="projects" exact>Projects</router-link>
            </li>
            <li class="list-item">
                <router-link class="link" to="contact" exact>Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
};
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: #1f1c1c;

    padding: 20px 0;

    .list {
        display: flex;
        justify-content: flex-end;

        .list-item {
            margin-right: 50px;

            .link {
                text-decoration: none;
                color: #fff;

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    .list {
        font-size: 0.8rem;
        justify-content: space-between !important;
        margin: 0 20px;

        .list-item {
            margin-right: 0 !important;
        }
    }
}
</style>