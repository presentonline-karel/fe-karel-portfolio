// Types
import { ButtonProps } from "@/types/components/Button";

// Utils
import { getKirbyFiles } from "./helper-functions";



export function renderButtonHref(button: ButtonProps) {
  if (button.destination === "internal") {
    return `/${button.internalpage[0]}${button.idpage}`;
  } else if(button.destination === "external") {
    return `${button.externalurl}`;
  } else if(button.destination === "download") {
    return `${getKirbyFiles(button.downloadablefile[0])}`
  } else {
    return `/home`;
  }
}