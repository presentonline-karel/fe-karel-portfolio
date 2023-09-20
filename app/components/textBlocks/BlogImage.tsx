// Next & React
import Image from "next/image";

// Types
import { BlogImageProps } from "@/types/textBlocks/BlogImage";
import { getKirbyFiles } from "@/utils/helper-functions";



export default function BlogImage({data}: BlogImageProps) {
  console.log("blogImageData", data);

  return (
    <div className="py-6">
      <div className="relative aspect-[3/2] lg:max-w-[1062px] lg:mx-auto">
        <Image
          src={getKirbyFiles(data.content.blogimage[0])}
          alt="test"
          fill={true}
          className="object-cover w-full h-full border-[0.4px] border-neutrals-400 shadow-image"
        />
      </div>
    </div>
  )
}