<template>
    <MainContainer>
        <NavBar></NavBar>

        <main class="main">
            <header class="contact-us-header">
                <h4 class="title" ref="aboutMe">CONTACT ME</h4>

                <p class="caption">Fall in love with me? Send me a love letter!</p>
            </header>

            <form class="form" @submit.prevent="mail">
                <label class="label">Name</label>
                <input class="input form-name" type="text" />

                <label class="label">Email Address</label>
                <input class="input form-email" type="email" name="email" />

                <label class="label">Message</label>
                <textarea class="input form-textarea"></textarea>

                <button class="submit">
                    <template v-if="!sending">
                        <font-awesome-icon class="icon" icon="paper-plane"></font-awesome-icon>
                        <span class="text">SEND</span>
                    </template>

                    <font-awesome-icon v-else class="loading" icon="spinner" pulse></font-awesome-icon>
                </button>
            </form>
        </main>
    </MainContainer>
</template>

<script>
export default {
    name: "Contact",

    data() {
        return {
            sending: false
        };
    },

    methods: {
        mail() {
            console.log("send");

            const data = {
                email: "dbcgdhh@gmail.com",
                message: "test"
            };

            fetch("https://formspree.io/xyyggwzd", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    letter-spacing: 0px;

    .contact-us-header {
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;

        .title {
            display: inline-block;
            letter-spacing: 2px;
            font-size: 1.8rem;
            position: relative;
            padding-bottom: 10px;
            border-bottom: 3px solid #1f1c1c;
        }

        .caption {
            margin-top: 15px;
            color: #b3b3b3;
        }
    }
}

.form {
    display: flex;
    flex-direction: column;
    width: 420px;
    box-sizing: border-box;
    padding-top: 20px;

    .input {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #ccc;
        padding: 10px 10px;
        border-radius: 3px;
        margin-bottom: 15px;
        font-size: 1rem;

        &.form-textarea {
            height: 200px;
        }
    }

    .label {
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
    }

    .submit {
        box-sizing: border-box;
        height: 40px;
        font-size: 1rem;
        border: none;
        border-radius: 3px;
        background: #1f1c1c;
        color: #fff;
        font-weight: 700;
        letter-spacing: 2px;
        cursor: pointer;

        .text {
            margin-left: 20px;
        }

        &:hover {
            transform: scale(1.1);
            transition: 0.5s;
        }

        .loading {
            font-size: 1.4rem;
        }
    }
}

@media only screen and (max-width: 500px) {
    .contact-us-header {
        padding-bottom: 10px !important;
        border-bottom: none !important;

        .title {
            font-size: 1.2rem !important;
            padding-bottom: 5px !important;
        }

        .caption {
            font-size: 0.8rem;
        }
    }

    .form {
        width: 300px;
        padding-top: 10px;

        .label {
            font-size: 0.8rem;
        }

        .submit {
            height: 35px;
        }
    }
}
</style>