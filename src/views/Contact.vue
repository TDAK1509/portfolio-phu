<template>
    <MainContainer>
        <main class="main">
            <header class="contact-us-header">
                <h4 class="title" ref="aboutMe">CONTACT ME</h4>

                <p class="caption">Fall in love with me? Send me a love letter!</p>
            </header>

            <form class="form" @submit.prevent="mail">
                <label class="label">Name*</label>

                <input
                    class="input form-name"
                    type="text"
                    v-model="name"
                    required
                    @blur="validateName"
                    ref="name"
                />

                <div class="error">{{errorName}}</div>

                <label class="label">Email Address*</label>

                <input
                    class="input form-email"
                    type="email"
                    name="email"
                    v-model="email"
                    required
                    @blur="validateEmail"
                    ref="email"
                />

                <div class="error">{{errorEmail}}</div>

                <label class="label">Message*</label>

                <textarea
                    class="input form-textarea"
                    v-model="message"
                    required
                    @blur="validateMessage"
                    ref="message"
                ></textarea>

                <div class="error">{{errorMessage}}</div>

                <button class="submit">
                    <template v-if="!loading">
                        <font-awesome-icon class="icon" icon="paper-plane"></font-awesome-icon>
                        <span class="text">SEND</span>
                    </template>

                    <font-awesome-icon v-else class="loading" icon="spinner" pulse></font-awesome-icon>
                </button>

                <div class="error">{{formErrorMessage}}</div>
            </form>
        </main>

        <TheContactModal v-if="showModal" @close="showModal = false"></TheContactModal>
    </MainContainer>
</template>

<script>
import TheContactModal from "@/components/TheContactModal";

export default {
    name: "Contact",

    components: {
        TheContactModal
    },

    data() {
        return {
            loading: false,

            name: "",
            email: "",
            message: "",

            errorName: "",
            errorEmail: "",
            errorMessage: "",

            formErrorMessage: "",

            showModal: false
        };
    },

    computed: {
        isFormValid() {
            return (
                !this.errorName &&
                !this.errorEmail &&
                !this.errorMessage &&
                !!this.name &&
                !!this.email &&
                !!this.message
            );
        }
    },

    methods: {
        isEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },

        validateName() {
            const ref = this.$refs.name;

            if (this.name == "") {
                ref.classList.add("invalid");
                this.errorName = "This field is required.";
                this.shakeItOff(ref);
            } else {
                ref.classList.remove("invalid");
                this.errorName = "";
            }
        },

        validateMessage() {
            const ref = this.$refs.message;

            if (this.message == "") {
                ref.classList.add("invalid");
                this.errorMessage = "This field is required.";
                this.shakeItOff(ref);
            } else {
                ref.classList.remove("invalid");
                this.errorMessage = "";
            }
        },

        validateEmail() {
            const ref = this.$refs.email;

            if (this.email === "") {
                ref.classList.add("invalid");
                this.errorEmail = "This field is required.";
                this.shakeItOff(ref);
            } else if (!this.isEmail(this.email)) {
                ref.classList.add("invalid");
                this.errorEmail = "Invalid email format.";
                this.shakeItOff(ref);
            } else {
                ref.classList.remove("invalid");
                this.errorEmail = "";
            }
        },

        validateAll() {
            this.validateName();
            this.validateEmail();
            this.validateMessage();
        },

        async mail() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            };

            this.loading = true;

            try {
                if (!this.isFormValid) throw "1";

                const response = await this.sendEmailToAPI(data);

                if (!response) throw "2";

                this.showThankyouModal();
            } catch (e) {
                if (e == "1") {
                    this.validateAll();
                } else {
                    this.formErrorMessage =
                        "Unexpected error, please try again later!";
                    console.log("Error sending email:", e);
                }
            } finally {
                this.loading = false;
            }
        },

        async sendEmailToAPI(data) {
            const response = await fetch("https://formspree.io/xyyggwzd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.status !== 200) {
                return false;
            }

            return true;
        },

        showThankyouModal() {
            this.showModal = true;
        },

        shakeItOff(el) {
            el.classList.add("shake");
            setTimeout(() => {
                el.classList.remove("shake");
            }, 500);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/animations.scss";

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
        font-size: 1rem;

        &.form-textarea {
            height: 200px;
        }

        &.invalid {
            border-color: red;
        }
    }

    .label {
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
    }

    .error {
        font-size: 0.9rem;
        color: red;
        margin-top: 0.2rem;
        margin-bottom: 0.8rem;
    }

    .submit {
        box-sizing: border-box;
        height: 40px;
        font-size: 1rem;
        border: none;
        border-radius: 3px;
        background: #1f1c1c;
        color: #fff;
        border: 1px solid #1f1c1c;
        font-weight: 700;
        letter-spacing: 2px;
        cursor: pointer;

        .text {
            margin-left: 20px;
        }

        &:hover {
            transition: 0.2s;
            background: #fff;
            color: #1f1c1c;
        }

        &:active {
            transform: translate(5px, -5px);
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
        margin-top: 50px !important;

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

        .label,
        .error {
            font-size: 0.8rem;
        }

        .submit {
            height: 35px;
        }
    }
}
</style>