// Types
import { BlogQuoteProps } from "@/types/textBlocks/BlogQuote";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";



export default function BlogQuote({ data }: BlogQuoteProps) {
  return (
    <div className="py-6">
      <div className="pb-8 pt-[52px] px-6 border border-neutrals-500 bg-neutrals-100 relative md:max-w-[842px] md:mx-auto lg:px-10 lg:pt-[76px] lg:pb-12">

        <FontAwesomeIcon icon={faQuoteLeftAlt} className="text-40 leading-11 w-10 !h-11 text-prim-300 absolute left-6 top-8 z-0 lg:text-48 lg:leading-13 lg:w-12 lg:!h-[52px] lg:top-12 lg:left-10" />

        {/* Quote */}
        <div className="text-24 leading-30px tracking-tight font-medium text-neutrals-1300 relative z-10 mb-4 sm:max-w-[584px] lg:text-32 lg:leading-38px lg:mb-6">
          {data.content.blogquote}
        </div>

        {/* Author */}
        <div className="text-18 leading-6 text-neutrals-1200 tracking-tight sm:max-w-[584px] lg:text-20 lg:leading-26px">
          {`- ${data.content.blogquoteauthor}${data.content.blogquotecompany !== "" ? ", " + data.content.blogquotecompany : ""}`}
        </div>
      </div>
    </div>
  )
}