// Next
import Image from "next/image";

// Types
import { HeroSecondaryProps } from "@/types/sections/HeroSecondary";
import { ButtonProps } from "@/types/components/Button";

// Components
import Button from "../components/Button";
import Wrapper from "../helpers/Wrapper";

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";

// Classnames
import cx from "classnames";



export default function HeroPrimary({ data }: HeroSecondaryProps) {
  return (!data.isHidden && (
    <section id="heroSecondary" className="section pt-[157px] lg:pt-[221px] xl:pt-0">
      <Wrapper className={cx("flex flex-col gap-10 sm:gap-12 md:flex-row md:items-center md:gap-20 lg:gap-[109px] xl:!pt-[257px] hd:border-neutrals-300", {
        "xl:min-h-[calc(100vh-466px)]": data.content.herolabel === "Thank you"
      })}>

        {/* Text */}
        <div className="w-full xl:w-[547px]">
          <div className="label default">
            {data.content.herolabel}
          </div>

          <h1 className="h h1">
            {data.content.herotitle}
          </h1>

          <div
            className="p mb-6 lg:mb-10"
            dangerouslySetInnerHTML={{ __html: data.content.heroparagraph }}
          />

          {/* Buttons */}
          <div className="flex items-center gap-2 max-w-full">
            {data.content.herobuttons.map((button: ButtonProps, index: number) => (
              <Button
                key={index}
                button={button}
                className={cx("", {
                  "w-full px-5 sm:px-7 md:w-auto lg:px-9": data.content.herobuttons.length === 2
                })}
              />
            ))}
          </div>
        </div>

        {/* Image group */}
        <div className="relative w-full aspect-[3/2] xl:w-[624px]">
          <Image
            src={getKirbyFiles(data.content.heroimage[0])}
            alt={data.content.alttag}
            fill={true}
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority={true}
            className="object-cover border-[0.4px] border-neutrals-400 shadow-image z-10"
          />

          {/* Decorative rectangles */}
          <div className="w-10 h-10 bg-prim-400 absolute z-0 -left-2 top-7 sm:w-20 sm:h-20 sm:-left-4 sm:top-14 sm:bg-prim-300 md:w-10 md:h-10 md:-left-2 md:top-7 lg:w-20 lg:h-20 lg:-left-4 lg:top-14" />
          <div className="w-10 h-6 bg-prim-300 absolute z-20 -right-2 bottom-11 sm:w-20 sm:h-12 sm:-right-4 sm:bottom-[88px] sm:bg-prim-200 md:w-10 md:h-6 md:-right-2 md:bottom-14 lg:w-20 lg:h-12 lg:-right-4 lg:bottom-[88px]" />
        </div>
      </Wrapper>
    </section>
  ))
}