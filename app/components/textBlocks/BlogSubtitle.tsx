// Types
import { BlogSubtitleProps } from "@/types/textBlocks/BlogSubtitle";



export default function BlogSubtitle({ data }: BlogSubtitleProps) {
  return (
    <div className="pt-2">
      <h2 className="h h2 text-24 leading-30px">
        {data.content.blogsubtitle}
      </h2>
    </div>
  )
}