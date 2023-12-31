// Next & React
import Image from "next/image";

// Types
import { SkillsProps } from "@/types/sections/Skills";
import { ArchitectureProps } from "@/types/organisms/Architecture";

// Components
import Architecture from "../organisms/Architecture";
import Wrapper from "../helpers/Wrapper";

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";

// Classnames
import cx from "classnames";



export default function Skills({ data }: SkillsProps) {
  return (!data.isHidden && (
    <section id="skills" className={cx("section", {
      "bg-neutrals-200": data.content.bgcolor === "grey",
      "bg-neutrals-100": data.content.bgcolor === "white",
    })}>
      <Wrapper className={cx("md:flex md:gap-20 md:items-start lg:gap-[109px]", {
        "hd:border-neutrals-400": data.content.bgcolor === "grey",
        "hd:border-neutrals-300": data.content.bgcolor === "white",
      })}>

        {/* Image group */}
        <div className="hidden relative w-full aspect-[4/5] md:block xl:w-[515px]">
          <Image
            src={getKirbyFiles(data.content.skillsimage[0])}
            alt={data.content.alttag}
            fill={true}
            sizes="(max-width: 1023px) 0vw, 50vw"
            className="object-cover border-[0.4px] border-neutrals-400 shadow-image z-10"
          />

          {/* Decorative rectangles */}
          <div className="w-10 h-10 bg-prim-400 absolute z-0 -left-2 top-7 sm:w-20 sm:h-20 sm:-left-4 sm:top-14 sm:bg-prim-300 md:w-10 md:h-10 md:-left-2 md:top-7 lg:w-20 lg:h-20 lg:-left-4 lg:top-14" />
          <div className="w-10 h-6 bg-prim-300 absolute z-20 -right-2 bottom-11 sm:w-20 sm:h-12 sm:-right-4 sm:bottom-[88px] sm:bg-prim-200 md:w-10 md:h-6 md:-right-2 md:bottom-14 lg:w-20 lg:h-12 lg:-right-4 lg:bottom-[88px]" />
        </div>

        {/* Text */}
        <div className="md:w-full xl:w-[656px]">

          {/* Heading */}
          <div className="mb-10">
            <div className="label light">
              {data.content.skillslabel}
            </div>

            <h2 className="h h2 lg:text-48 lg:leading-13 xl:text-56 xl:leading-15">
              {data.content.skillstitle}
            </h2>
          </div>

          {/* Architectures */}
          <div className="Achitectures / flex flex-col gap-10 lg:gap-14">
            {data.content.architectures.map((architecture: ArchitectureProps, index: number) => (
              <Architecture {...architecture} key={index} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  ))
}