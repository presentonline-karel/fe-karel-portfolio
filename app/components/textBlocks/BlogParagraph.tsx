// Types
import { BlogParagraphProps } from "@/types/textBlocks/BlogParagraph";



export default function BlogParagraph({data}: BlogParagraphProps) {
  return (
    <div>
      <p className="p">
        {data.content.blogparagraph}
      </p>
    </div>
  )
}