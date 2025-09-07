// Types
import { BlogUnorderedListProps } from "@/types/textBlocks/BlogUnorderedList";
import { ListItemProps } from "@/types/organisms/ListItem";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";



export default function BlogUnorderedList({ data }: BlogUnorderedListProps) {
  return (
    <div className="pt-2">
      <div className="flex flex-col md:max-w-[842px] md:mx-auto">
        {data.content.blogunorderedlist.map((listItem: ListItemProps, index: number) => (
          <div
            key={index}
            className="flex items-start gap-2 py-1 lg:py-[6px] lg:gap-3"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-16 leading-16px w-[8px] !h-[16px] text-prim-600 relative top-[3px] lg:!text-18 lg:!leading-26px lg:w-3 lg:!h-[26px] lg:top-0" />

            <div className="text-16 leading-21px tracking-tight text-neutrals-1200 lg:text-18 lg:leading-26px">
              {listItem.listitem}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}