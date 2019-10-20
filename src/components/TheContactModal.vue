<template>
    <div class="modal-container" ref="modal" @click="onModalClick">
        <div class="modal exclude">
            <span class="text exclude">Thank you for your love letter!</span>
            <button class="close exclude" type="button" @click="closeModal">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheContactModal",

    methods: {
        closeModal() {
            this.$emit("close");
        },

        onModalClick(event) {
            if (!event.target.classList.contains("exclude")) {
                this.closeModal();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.modal-container {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    animation: fadeIn 200ms ease-in;

    .modal {
        box-sizing: border-box;
        background: #fff;
        padding: 20px 40px;
        line-height: 2rem;
        border-radius: 4px;
        box-shadow: 10px 10px 10px 0 #000;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        animation: scaleIn 200ms ease-in;

        .close {
            border: none;
            background: none;
            font-size: 2rem !important;
            letter-spacing: 0;
            position: absolute;
            top: 0px;
            right: 7px;
            transform: rotate(45deg);
            cursor: pointer;
        }
    }
}

@media only screen and (max-width: 500px) {
    .modal {
        max-width: 300px;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}
</style>