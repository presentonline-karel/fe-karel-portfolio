// Types
import { BlogParagraphProps } from "@/types/textBlocks/BlogParagraph";



export default function BlogParagraph({data}: BlogParagraphProps) {
  return (
    <div>
      <p className="p md:max-w-[842px] md:mx-auto">
        {data.content.blogparagraph}
      </p>
    </div>
  )
}