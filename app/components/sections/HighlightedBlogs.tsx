// Types
import { HighlightedBlogsProps } from "@/types/sections/HighlightedBlogs";



export default function HighlightedBlogs({ data }: HighlightedBlogsProps) {
  return (!data.isHidden && (
    <div>
      <h1 className="h h1">
        HighlightedBlogs
      </h1>
    </div>
  ))
}