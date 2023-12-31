// Components
import Wrapper from "../helpers/Wrapper";
import Feature from "../organisms/Feature";

// Types
import { FeaturesProps } from "@/types/sections/Features";
import { FeatureProps } from "@/types/organisms/Feature";

// ClassNames
import cx from "classnames";



export default function Features({ data }: FeaturesProps) {
  return (!data.isHidden && (
    <section id="features" className={cx("section bg-neutrals-1300 lg:py-[100px] xl:py-0", {
      "xl:bg-neutrals-200": data.content.bgcolor === "grey",
      "xl:bg-neutrals-100": data.content.bgcolor === "white",
    })}>
      <div className={cx("xl:max-w-8xl xl:mx-auto xl:py-[100px] hd:border-x-[0.4px]", {
        "hd:border-neutrals-400": data.content.bgcolor === "grey",
        "hd:border-neutrals-300": data.content.bgcolor === "white",
      })}>
        <Wrapper className="xl:max-w-[1280px] xl:px-[109px] xl:bg-neutrals-1300 xl:py-[100px] hd:!py-[100px]">

          {/* Heading */}
          <div className="flex flex-col items-center mb-10 md:mb-12">
            <div className="label dark lg:!mb-3">
              {data.content.featureslabel}
            </div>

            <h2 className="h h2 text-neutrals-100">
              {data.content.featurestitle}
            </h2>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:gap-8">
            {data.content.features.map((feature: FeatureProps, index: number) => (
              <Feature {...feature} key={index} />
            ))}
          </div>
        </Wrapper>
      </div>
    </section>
  ))
}