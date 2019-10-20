import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleRight,
    faHandPointLeft,
    faPaperPlane,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";

const initFontAwesome = function() {
    library.add(faAngleRight, faHandPointLeft, faPaperPlane, faSpinner);
};

export default initFontAwesome;
