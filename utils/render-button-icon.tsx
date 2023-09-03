// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown, faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";



export function renderButtonIcon(type: String) {
  switch (type) {
    case "chevronRight":
      return <FontAwesomeIcon icon={faChevronRight} className="" />;
    case "chevronDown":
      return <FontAwesomeIcon icon={faChevronDown} className="" />;
    case "arrowRight":
      return <FontAwesomeIcon icon={faArrowRight} className="text-14 leading-14px text-neutrals-1400 w-[14px] h-[14px]" />;
    case "arrowRightTop":
      return <FontAwesomeIcon icon={faArrowRight} className="" />;
    case "arrowDown":
      return <FontAwesomeIcon icon={faArrowDown} className="text-14 leading-14px text-neutrals-1400 w-[14px] h-[14px]" />;
    default:
      return null;
  }
}