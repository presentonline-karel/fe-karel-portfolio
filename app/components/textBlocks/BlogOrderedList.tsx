// Types
import { ListItemProps } from "@/types/organisms/ListItem";
import { BlogOrderedListProps } from "@/types/textBlocks/BlogOrderedList";



export default function BlogOrderedList({ data }: BlogOrderedListProps) {
  return (
    <div className="pt-2">
      <div className="flex flex-col md:max-w-[842px] md:mx-auto">
        {data.content.blogorderedlist.map((listItem: ListItemProps, index: number) => (
          <div
            key={index}
            className="flex items-start gap-2 py-1 lg:py-[6px] lg:gap-3"
          >
            <div className="text-16 leading-21px tracking-tight text-prim-800 lg:text-18 lg:leading-26px">
              {`0${index + 1}.`}
            </div>

            <div className="text-16 leading-21px tracking-tight text-neutrals-1200 lg:text-18 lg:leading-26px">
              {listItem.listitem}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}