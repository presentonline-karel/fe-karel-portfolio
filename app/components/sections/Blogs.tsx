"use client";

// Next & React
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Components
import Wrapper from "../helpers/Wrapper";

// Types
import { BlogsProps } from "@/types/sections/Blogs";
import { BlogProps } from "@/types/organisms/Blog";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";
import { stringToDate } from "@/utils/helper-functions";

// Classnames
import cx from "classnames";



export default function Blogs({ labelTags, tags, blogs }: BlogsProps) {

  // States
  const [activeTag, setActiveTag] = useState("");



  return (
    <section className="pt-10 pb-[72px] lg:pb-[120px] hd:pt-0 hd:pb-0">
      <Wrapper className="hd:pt-10">

        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <div className="mb-4 tracking-tight text-16 leading-6 text-neutrals-1200 lg:text-18 lg:leading-6 lg:mb-6">
            {labelTags}
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={() => setActiveTag("")}
              className="btn btn-primary whitespace-nowrap py-3 px-4 text-16 leading-4 lg:text-20 lg:leading-5 lg:px-8 lg:py-4"
            >
              {/* @ts-ignore */}
              {`All (${Object.keys(blogs.data).length})`}
            </button>

            {/* divider */}
            <div className="block w-[1px] h-10 bg-neutrals-600 lg:h-14" />

            <div className="flex items-center gap-1 flex-nowrap overflow-x-scroll overflow-y-hidden no-scrollbar sm:gap-2 lg:gap-3">
              {tags.split(", ").map((tag: string, index: number) => (
                <button
                  onClick={() => activeTag === tag ? setActiveTag("") : setActiveTag(tag)}
                  className={cx("btn btn-secondary whitespace-nowrap py-3 px-4 text-16 leading-4 !border-neutrals-600 hover:!bg-neutrals-100 hover:!text-neutrals-1300 focus:border-neutrals-600 focus:bg-neutrals-100 focus:text-neutrals-1300 lg:px-8 lg:py-4 lg:text-20 lg:leading-5", {
                    "!border-neutrals-1300 !bg-neutrals-1300 !text-neutrals-100 focus:!border-neutrals-1300 focus:!bg-neutrals-1300 focus:!text-neutrals-100": activeTag === tag,
                  })}
                >
                  {/* @ts-ignore */}
                  {`${tag} (${Object.values(blogs.data).filter((blog: BlogProps) => (blog.tag.includes(tag))).length})`}
                </button>
              ))}
            </div>
          </div>
        </div>



        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {activeTag === "" && (
            <>
              {/* @ts-ignore */}
              {Object.values(blogs.data).map((blog: BlogProps, index: number) => (
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
              ))}
            </>
          )}



          {activeTag !== "" && (
            <>
              {/* @ts-ignore */}
              {Object.values(blogs.data).filter((blog: BlogProps) => (blog.tag.includes(activeTag))).map((blog: BlogProps, index: number) => (
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
              ))}
            </>
          )}
        </div>
      </Wrapper>
    </section>
  )
}