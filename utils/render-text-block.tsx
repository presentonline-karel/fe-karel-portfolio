// Components
import Heading from "@/app/components/textBlocks/Heading";
import Paragraph from "@/app/components/textBlocks/Paragraph";
import UnorderedList from "@/app/components/textBlocks/UnorderedList";



export function textBlockRenderer(textBlock: any, index: number) {
  switch (textBlock.type) {
    case "heading":
      return <Heading key={index} data={textBlock} />;
    case "text":
      return <Paragraph key={index} data={textBlock} />;
    case "list":
      return <UnorderedList key={index} data={textBlock} />;
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}