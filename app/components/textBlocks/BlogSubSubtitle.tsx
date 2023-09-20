// Types
import { BlogSubSubtitleProps } from "@/types/textBlocks/BlogSubSubtitle";



export default function BlogSubSubtitle({ data }: BlogSubSubtitleProps) {
  return (
    <div className="pt-1">
      <h3 className="h h3 text-20 leading-26px md:max-w-[842px] md:mx-auto lg:text-32 lg:leading-38px">{data.content.blogsubsubtitle}</h3>
    </div>
  )
}