// Types
import { BlogSubtitleProps } from "@/types/textBlocks/BlogSubtitle";



export default function BlogSubtitle({ data }: BlogSubtitleProps) {
  return (
    <div className="pt-2 lg:pt-4">
      <h2 className="h h2 text-24 leading-30px md:max-w-[842px] md:mx-auto lg:text-40 lg:leading-11">
        {data.content.blogsubtitle}
      </h2>
    </div>
  )
}