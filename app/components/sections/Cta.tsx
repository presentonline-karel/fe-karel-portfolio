// Imported types
import { CtaProps } from "@/types/sections/Cta";

// Components
import Wrapper from "../helpers/Wrapper";
import Button from "../components/Button";

// Types
import { ButtonProps } from "@/types/components/Button";

// ClassNames
import cx from "classnames";



export default function Cta({ data }: CtaProps) {
  return (!data.isHidden && (
    <section id="cta" className={cx("section py-12 bg-prim-200 lg:py-20 xl:py-0", {
      "xl:bg-neutrals-200": data.content.bgcolor === "grey",
      "xl:bg-neutrals-100": data.content.bgcolor === "white",
    })}>
      <div className={cx("xl:max-w-8xl xl:mx-auto xl:py-[100px] hd:border-x-[0.4px]", {
        "hd:border-neutrals-400": data.content.bgcolor === "grey",
        "hd:border-neutrals-300": data.content.bgcolor === "white",
      })}>
        <Wrapper className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end xl:max-w-[1280px] xl:px-[109px] xl:bg-prim-200 xl:py-20 xl:border xl:border-prim-300 hd:!py-20">

          {/* Heading */}
          <div className="md:max-w-[400px] lg:max-w-[507px]">
            <h2 className="h h2 mb-3 lg:text-48 lg:leading-13 lg:mb-6">
              {data.content.ctatitle}
            </h2>

            <div
              className="p md:max-w-[358px]"
              dangerouslySetInnerHTML={{ __html: data.content.ctaparagraph }}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            {data.content.ctabuttons.map((button: ButtonProps, index: number) => (
              <Button button={button} key={index} />
            ))}
          </div>
        </Wrapper>
      </div>
    </section>
  ))
}