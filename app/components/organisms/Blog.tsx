// Next & React
import Link from "next/link";
import Image from "next/image";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";

// Types
import { BlogProps } from "@/types/organisms/Blog";

// Utils
import { stringToDate } from "@/utils/helper-functions";

// Classnames
import cx from "classnames";



export default function Blog(blog: BlogProps) {
  return (
    <Link
      href={blog.uri}
      className={cx("w-full h-full flex flex-col items-start relative aspect-square", {
        "justify-between": blog.isblognew === "true",
        "justify-end": blog.isblognew === "false",
      })}
    >

      {/* Image group */}
      <div className="aspect-square absolute w-full h-full z-0">
        <Image
          src={blog.coverImage.url}
          fill={true}
          alt="Temp alt message"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Linear gradient */}
      <div className="blog-gradient absolute top-0 left-0 w-full h-full z-10 aspect-square" />

      {blog.isblognew === "true" && (
        <div className="label dark shadow-btnBlack relative z-20 top-6 left-6 lg:top-8">
          New
        </div>
      )}

      {/* Blog content */}
      <div className="relative z-20 px-6 pb-6 lg:pb-8">

        {/* Details */}
        <div className="py-1 px-2 bg-neutrals-1300 inline-flex items-center gap-3 mb-[6px] lg:mb-2">
          <div className="flex items-center gap-[6px] text-neutrals-100">
            <FontAwesomeIcon icon={faClock} className="text-[10px] leading-[10px] w-[10px] h-[10px]" />
            <div className="text-14 leading-14px tracking-tight">
              {`${blog.minutesRead}m`}
            </div>
          </div>

          <div className="w-[1px] h-[14px] bg-neutrals-1100" />

          <div className="flex items-center gap-[6px] text-neutrals-100">
            <FontAwesomeIcon icon={faCalendar} className="text-[10px] leading-[10px] w-[10px] h-[10px]" />
            <div className="text-14 leading-14px tracking-tight">
              {stringToDate(blog.publishDate)}
            </div>
          </div>
        </div>

        <h3 className="h h3 mb-4 text-neutrals-100 md:text-32 md:leading-38px lg:mb-5">
          {blog.blogTitle}
        </h3>

        <button className="btn btn-primary !text-16 !leading-4 !px-4 !py-3 !inline-flex !w-min">
          <span className="tracking-tight whitespace-nowrap">Read blog</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3" />
        </button>
      </div>
    </Link>
  )
}