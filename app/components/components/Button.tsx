// Next & React
import Link from "next/link";

// Types
import { ButtonProps } from "@/types/components/Button";

// Utils
import { renderIcon } from "@/utils/render-icon";
import { renderButtonStyle } from "@/utils/render-button-style";
import { renderButtonHref } from "@/utils/render-button-href";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Button({ button, className }: { button: ButtonProps, className?: string }) {
  return (
    <Link
      href={renderButtonHref(button)}
      className={`${renderButtonStyle(button.typeofbutton)} ${className}`}
      target={button.destination === "internal" ? "_self" : "_blank"}
    >
      <span className="whitespace-nowrap">{button.anchor}</span>

      {/* Icon */}
      {button.icon !== "noIcon" && (
        <FontAwesomeIcon icon={renderIcon(button.icon)} className="text-14 leading-14px w-[14px] h-[14px] lg:text-16 lg:leading-4 lg:h-4" />
      )}
    </Link>
  )
}