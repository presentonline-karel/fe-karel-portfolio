// Components
import Heading from "@/app/components/textBlocks/Heading";
import Paragraph from "@/app/components/textBlocks/Paragraph";
import UnorderedList from "@/app/components/textBlocks/UnorderedList";
import BlogImage from "@/app/components/textBlocks/BlogImage";
import BlogSubtitle from "@/app/components/textBlocks/BlogSubtitle";
import BlogParagraph from "@/app/components/textBlocks/BlogParagraph";



export function textBlockRenderer(textBlock: any, index: number) {
  switch (textBlock.type) {
    case "heading":
      return <Heading key={index} data={textBlock} />;
    case "text":
      return <Paragraph key={index} data={textBlock} />;
    case "list":
      return <UnorderedList key={index} data={textBlock} />;
    case "blogImage":
      return <BlogImage key={index} data={textBlock} />;
    case "blogSubtitle":
      return <BlogSubtitle key={index} data={textBlock} />;
    case "blogParagraph":
      return <BlogParagraph key={index} data={textBlock} />;
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}