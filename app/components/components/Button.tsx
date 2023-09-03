// Next & React
import Link from "next/link";

// Types
import { ButtonProps } from "@/types/components/Button";

// Utils
import { renderButtonIcon } from "@/utils/render-button-icon";
import { renderButtonStyle } from "@/utils/render-button-style";



export default function Button({button, className}: {button: ButtonProps, className: string}) {
  return (
    <Link
      href={`/${button.internalpage[0]}`}
      className={`${renderButtonStyle(button.typeofbutton)} ${className}`}
    >
      {button.anchor}
      {renderButtonIcon(button.icon)}
    </Link>
  )
}