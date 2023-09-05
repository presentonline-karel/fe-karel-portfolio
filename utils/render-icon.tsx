// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown, faArrowRight, faArrowDown, faTable, faGear, faArrowPointer, faPlus } from "@fortawesome/free-solid-svg-icons";



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
    default:
      return faArrowRight;
  }
}