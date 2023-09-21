// Types
import { BlogVideoProps } from "@/types/textBlocks/BlogVideo";



export default function BlogVideo({ data }: BlogVideoProps) {
  console.log("blogVideoData", data);

  return (
    <div className="py-6">
      <div className="aspect-[16/9] w-full lg:max-w-[1062px] lg:mx-auto">

        {/* @ts-ignore */}
        <iframe width="100%" height="100%" src={data.content.blogvideoyturl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </div>
    </div>
  )
}