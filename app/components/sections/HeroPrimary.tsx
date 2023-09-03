// Next
import Image from "next/image";

// Types
import { HeroPrimaryProps } from "@/types/sections/HeroPrimary";
import { ButtonProps } from "@/types/components/Button";

// Components
import Button from "../components/Button";

// Utils
import getKirbyFiles from "@/utils/helper-functions";



export default function HeroPrimary({ data }: HeroPrimaryProps) {
  return (
    <div className="HeroPrimary / section">
      <div className="Container / px-4 flex flex-col gap-10 sm:px-12 sm:gap-12 md:flex-row md:items-center md:gap-20 lg:px-20 lg:gap-[109px] xl:max-w-8xl xl:mx-auto hd:border-x-[0.4px] hd:border-neutrals-300 hd:py-[120px]">

        {/* Text */}
        <div className="w-full xl:w-[547px]">
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
          <div className="flex items-center gap-2">
            {data.content.herobuttons.map((button: ButtonProps, index: number) => (
              <Button button={button} className={"w-full md:w-auto"} key={index} />
            ))}
          </div>
        </div>

        {/* Image group */}
        <div className="relative w-full aspect-square xl:w-[624px]">
          <Image 
            src={getKirbyFiles(data.content.heroimage[0])}
            alt="Temp alt message"
            fill={true} 
            priority={true}
            className="object-cover border-[0.4px] border-neutrals-400 shadow-image z-10"
          />

          {/* Decorative rectangles */}
          <div className="w-10 h-10 bg-prim-400 absolute z-0 -left-2 top-7 sm:w-20 sm:h-20 sm:-left-4 sm:top-14 sm:bg-prim-300 md:w-10 md:h-10 md:-left-2 md:top-7 lg:w-20 lg:h-20 lg:-left-4 lg:top-14" />
          <div className="w-10 h-6 bg-prim-300 absolute z-20 -right-2 bottom-11 sm:w-20 sm:h-12 sm:-right-4 sm:bottom-[88px] sm:bg-prim-200 md:w-10 md:h-6 md:-right-2 md:bottom-14 lg:w-20 lg:h-12 lg:-right-4 lg:bottom-[88px]" />
        </div>
      </div>
    </div>
  )
}