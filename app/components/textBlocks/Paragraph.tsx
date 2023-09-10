// Types
import { ParagraphProps } from "@/types/textBlocks/Paragraph"


export default function Paragraph({ data }: ParagraphProps) {
  const paragraph = data.content.text;

  return (!data.isHidden && (
    <div 
      className="p"
      dangerouslySetInnerHTML={{ __html: paragraph }} 
    />
  ))
}