"use client";

// Next & React
import { useState } from "react";

// Components
import Wrapper from "../helpers/Wrapper";
import Blog from "../organisms/Blog";

// Types
import { BlogsProps } from "@/types/sections/Blogs";
import { BlogProps } from "@/types/organisms/Blog";

// Classnames
import cx from "classnames";



export default function Blogs({ labelTags, tags, blogs }: BlogsProps) {

  // States
  const [activeTag, setActiveTag] = useState("");



  return (
    <section className="pt-10 pb-[72px] lg:pb-[100px] hd:pt-0 hd:pb-0">
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
              className="a11y-focus btn btn-primary whitespace-nowrap py-3 px-4 text-16 leading-4 lg:text-20 lg:leading-5 lg:px-8 lg:py-4"
            >
              {/* @ts-ignore */}
              {`All (${Object.keys(blogs.data).length})`}
            </button>

            {/* divider */}
            <div className="block w-[1px] h-10 bg-neutrals-600 lg:h-14" />

            <div className="flex items-center gap-1 flex-nowrap overflow-x-scroll overflow-y-hidden no-scrollbar sm:gap-2 lg:gap-3">
              {tags.split(", ").map((tag: string, index: number) => (
                <button
                  key={index}
                  onClick={() => activeTag === tag ? setActiveTag("") : setActiveTag(tag)}
                  className={cx("a11y-focus btn btn-secondary whitespace-nowrap py-3 px-4 text-16 leading-4 !border-neutrals-600 hover:!bg-neutrals-100 hover:!text-neutrals-1300 focus:border-neutrals-600 focus:bg-neutrals-100 focus:text-neutrals-1300 lg:px-8 lg:py-4 lg:text-20 lg:leading-5", {
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
                <Blog key={index} {...blog} />
              ))}
            </>
          )}

          {activeTag !== "" && (
            <>
              {/* @ts-ignore */}
              {Object.values(blogs.data).filter((blog: BlogProps) => (blog.tag.includes(activeTag))).map((blog: BlogProps, index: number) => (
                <Blog key={index} {...blog} />
              ))}
            </>
          )}
        </div>
      </Wrapper>
    </section>
  )
}