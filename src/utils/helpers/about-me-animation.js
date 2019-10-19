import anime from "animejs/lib/anime.es.js";

const animation = {
    aboutMe(element) {
        anime({
            targets: element,
            rotate: "1turn",
            duration: 800
        });
    }
};

export default animation;
