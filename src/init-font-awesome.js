import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleRight,
    faHandPointLeft
} from "@fortawesome/free-solid-svg-icons";

const initFontAwesome = function() {
    library.add(faAngleRight, faHandPointLeft);
};

export default initFontAwesome;
