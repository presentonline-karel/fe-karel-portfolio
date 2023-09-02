// Next
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Types
import { HeroPrimaryProps } from "@/types/sections/HeroPrimary";
import { Button } from "@/types/components/Button";

// Utils
import { renderButtonStyle } from "@/utils/render-button-style";
import { fetcher } from "@/utils/fetcher";
import { getPageByUuid } from "@/utils/helper-functions";



export default function HeroPrimary({ data }: HeroPrimaryProps) {
  console.log("content ->", data);

  return (
    <div className="HeroPrimary / section">
      <div className="Container / px-4">

        {/* Text */}
        <div className="Text /">
          <div className="label default">
            {data.content.herolabel}
          </div>

          <h1 className="h h1">
            {data.content.herotitle}
          </h1>

          <p className="p mb-6">
            {data.content.heroparagraph}
          </p>

          {/* Buttons */}
          <div className="Buttons / flex items-center gap-2">
            {data.content.herobuttons.map((button: Button, index: number) => (
              <Link 
                key={index}
                href={`/projects`}
                className={renderButtonStyle(button.typeofbutton)}
              >
                {getPageByUuid(button.internalpage[0])}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}