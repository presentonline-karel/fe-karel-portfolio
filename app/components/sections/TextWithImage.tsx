// Next & React
import Image from "next/image";

// Types
import { TextWithImageProps } from "@/types/sections/TextWithImage";

// Components
import Wrapper from "../helpers/Wrapper";

// Utils
import { textBlockRenderer } from "@/utils/render-text-block";
import { getKirbyFiles } from "@/utils/helper-functions";

// ClassNames
import cx from "classnames";



export default function TextWithImage({ data }: TextWithImageProps) {
  return (!data.isHidden && (
    <section className={cx("section", {
      "bg-neutrals-200": data.content.bgcolor === "grey",
      "bg-neutrals-100": data.content.bgcolor === "white",
    })}>
      <Wrapper className={cx("flex flex-col gap-10 md:flex-row md:items-start md:gap-20 lg:gap-[109px]", {
        "md:flex-row": data.content.textwithimageimageplacement === "true",
        "md:flex-row-reverse": data.content.textwithimageimageplacement === "false",
        "hd:border-neutrals-400": data.content.bgcolor === "grey",
        "hd:border-neutrals-300": data.content.bgcolor === "white",
      })}>

        {/* Text */}
        <div className="w-full xl:w-[656px]">

          {/* Heading */}
          <div className="mb-10">
            <div className="label light">
              {data.content.textwithimagelabel}
            </div>

            <h2 className="h h2 lg:text-48 lg:leading-13 xl:text-56 xl:leading-15">
              {data.content.textwithimagetitle}
            </h2>
          </div>

          {/* Text blocks */}
          <div className="text-blocks flex flex-col gap-4 lg:gap-6">
            {/* @ts-ignore */}
            {typeof data.content.textwithimagetext == "string" ? JSON.parse(data.content.textwithimagetext).map((textBlock: any, index: number) => textBlockRenderer(textBlock, index)) : data.content.textwithimagetext.map((textBlock: any, index: number) => textBlockRenderer(textBlock, index))}
          </div>
        </div>



        {/* Image group */}
        <div className="block relative aspect-[3/2] w-full md:aspect-[4/5] md:block xl:w-[515px]">
          <Image
            // @ts-ignore
            src={typeof data.content.textwithimageimage[0] == "string" ? getKirbyFiles(data.content.textwithimageimage[0]) : data.content.textwithimageimage.url}
            alt="Karel Decoene portfolio"
            fill={true}
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