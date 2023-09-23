// Types
import { BlogParagraphProps } from "@/types/textBlocks/BlogParagraph";



export default function BlogParagraph({ data }: BlogParagraphProps) {
  return (
    <div>
      <div
        className="p md:max-w-[842px] md:mx-auto"
        dangerouslySetInnerHTML={{ __html: data.content.blogparagraph }}
      />
    </div>
  )
}