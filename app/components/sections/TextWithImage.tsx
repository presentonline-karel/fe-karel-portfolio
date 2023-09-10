// Types
import { TextWithImageProps } from "@/types/sections/TextWithImage";

// Components
import Wrapper from "../helpers/Wrapper";

// Utils
import { textBlockRenderer } from "@/utils/render-text-block";



export default function TextWithImage({ data }: TextWithImageProps) {
  return (!data.isHidden && (
    <section className="section">
      <Wrapper>

        {/* Text */}
        <div className="">

          {/* Heading */}
          <div className="mb-10">
            <div className="label light">
              {data.content.textwithimagelabel}
            </div>

            <h2 className="h h2">
              {data.content.textwithimagetitle}
            </h2>
          </div>

          {/* Text blocks */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {JSON.parse(data.content.textwithimagetext).map((textBlock: any, index: number) => textBlockRenderer(textBlock, index))}
          </div>
        </div>
      </Wrapper>
    </section>
  ))
}