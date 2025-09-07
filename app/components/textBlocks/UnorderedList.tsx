import React from "react";

// Types
import { UnorderedListProps } from "@/types/textBlocks/UnorderedList";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";



export default function UnorderedList({ data }: UnorderedListProps) {

  // Parse HTML string into JSX
  const ulJSX = React.createElement("div", {
    dangerouslySetInnerHTML: { __html: data.content.text }
  });



  // Function to render Font Awesome icon before each li
  const renderListItemsWithIcon = (ulElement: any) => {
    const liElements = ulElement.props.dangerouslySetInnerHTML.__html.split('</li>');

    const itemsWithIcons = liElements.map((li: string, index: number) => (
      <li
        key={index}
        className="flex items-start gap-2 py-1 lg:py-[6px] lg:gap-3 last:hidden"
      >
        <FontAwesomeIcon icon={faChevronRight} className="relative top-[2px] text-prim-600 text-16 leading-4 w-[10px] h-4 lg:text-18 lg:leading-26px lg:w-3 lg:h-[26px]" />
        <span className="text-16 leading-21px text-neutrals-1200 lg:text-18 lg:leading-26px">{li.replace(/<li>|<ul>|<\/ul>/gi, '').trim()}</span>
      </li>
    ));
    return <ul>{itemsWithIcons}</ul>;
  };



  return (
    <div className="pt-2">
      {renderListItemsWithIcon(ulJSX)}
    </div>
  );
}