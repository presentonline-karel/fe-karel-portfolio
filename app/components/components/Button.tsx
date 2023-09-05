// Next & React
import Link from "next/link";

// Types
import { ButtonProps } from "@/types/components/Button";

// Utils
import { renderIcon } from "@/utils/render-icon";
import { renderButtonStyle } from "@/utils/render-button-style";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Button({ button, className }: { button: ButtonProps, className?: string }) {
  return (
    <Link
      href={`/${button.internalpage[0]}`}
      className={`${renderButtonStyle(button.typeofbutton)} ${className}`}
    >
      {button.anchor}

      {/* Icon */}
      {button.icon !== "noIcon" && (
        <FontAwesomeIcon icon={renderIcon(button.icon)} className="text-14 leading-14px text-neutrals-1400 w-[14px] h-[14px]" />
      )}
    </Link>
  )
}