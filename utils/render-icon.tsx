// FontAwesome
import { faChevronRight, faChevronDown, faArrowRight, faArrowDown, faTable, faGear, faArrowPointer, faPlus, faFlagCheckered, faDumbbell, faCamera } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



export function renderIcon(type: String) {
  switch (type) {
    case "chevronRight":
      return faChevronRight;
    case "chevronDown":
      return faChevronDown;
    case "arrowRight":
      return faArrowRight;
    case "arrowRightTop":
      return faArrowRight;
    case "arrowDown":
      return faArrowDown;
    case "table":
      return faTable;
    case "gear":
      return faGear;
    case "pointer":
      return faArrowPointer;
    case "plus":
      return faPlus;
    case "flag":
      return faFlagCheckered;
    case "weight":
      return faDumbbell;
    case "camera":
      return faCamera;
    case "instagram":
      return faInstagram;
    case "facebook":
      return faFacebookF;
    case "linkedin":
      return faLinkedinIn;
    default:
      return faArrowRight;
  }
}