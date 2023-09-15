// FontAwesome
import { faChevronRight, faChevronLeft, faChevronUp, faChevronDown, faArrowRight, faArrowLeft, faArrowDown, faArrowUp, faTable, faGear, faArrowPointer, faPlus, faFlagCheckered, faDumbbell, faCamera, faPhone, faEnvelope, faChain } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



export function renderIcon(type: String) {
  switch (type) {
    case "chevronRight":
      return faChevronRight;
    case "chevronLeft":
      return faChevronLeft;
    case "chevronUp":
      return faChevronUp;
    case "chevronDown":
      return faChevronDown;
    case "arrowRight":
      return faArrowRight;
    case "arrowLeft":
      return faArrowLeft;
    case "arrowRightTop":
      return faArrowRight;
    case "arrowUp":
      return faArrowUp;
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
    case "phone":
      return faPhone;
    case "envelope":
      return faEnvelope;
    case "chain":
      return faChain;
    default:
      return faArrowRight;
  }
}