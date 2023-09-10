// Types
import { HeadingProps } from "@/types/textBlocks/Heading";



export default function Heading({ data }: HeadingProps) {
  if (!data.isHidden) {
    switch (data.content.level) {
      case "h2":
        return (
          <div className="pt-2">
            <h2 className="h h2">
              {data.content.text}
            </h2>
          </div>
        );
      case "h3":
        return (
          <div className="pt-1">
            <h3 className="h h3">
              {data.content.text}
            </h3>
          </div>
        );
      case "h4":
        return <h4 className="h h4">{data.content.text}</h4>;
      case "h5":
        return <h5 className="h h5">{data.content.text}</h5>;
      case "h6":
        return <h6 className="h h6">{data.content.text}</h6>;
      default:
        return <div className="bg-red-200">No data</div>;
    }
  }
}