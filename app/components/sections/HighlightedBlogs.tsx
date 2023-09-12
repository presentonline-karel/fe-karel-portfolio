"use client";

// Next & React
import Link from "next/link";
import Image from "next/image";

// Types
import { HighlightedBlogsProps } from "@/types/sections/HighlightedBlogs";
import { HighlightedBlogProps } from "@/types/organisms/HighlightedBlogProps";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";
import { stringToDate } from "@/utils/helper-functions";

// Classnames
import cx from "classnames";



export default function HighlightedBlogs({ data }: HighlightedBlogsProps) {

  // Slider breakpoint settings
  const sliderSettings = {
    640: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  };



  return (!data.isHidden && (
    <section id="highlightedBlogs" className="section">
      <Wrapper>

        {/* Heading */}
        <div className="mb-10 flex justify-between items-start lg:mb-[72px]">
          <div className="lg:max-w-[547px]">
            <h2 className="h h2 lg:mb-6">
              {data.content.highlightedblogstitle}
            </h2>

            <p className="p hidden lg:block">
              {data.content.highlightedblogsparagraph}
            </p>
          </div>

          <Link
            href="projects"
            className="btn btn-secondary py-3 px-4 text-16 leading-4 lg:px-9 lg:py-4 lg:text-20 lg:leading-5 lg:gap-3"
          >
            <span className="tracking-tight whitespace-nowrap">All projects</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3 lg:text-16 lg:leading-4 lg:w-[14px] lg:h-4" />
          </Link>
        </div>



        <Swiper
          className="mb-4 lg:mb-6"
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination-highlightedBlogs",
          }}
          navigation={{
            nextEl: ".swiper-button-next-highlightedBlogs",
            prevEl: ".swiper-button-prev-highlightedBlogs"
          }}
          breakpoints={sliderSettings}
        >
          {data.content.highlightedblogs.map((blog: HighlightedBlogProps, index: number) => (
            <SwiperSlide
              key={index}
              className="border-[0.4px] border-neutrals-400 shadow-card aspect-square w-full h-full"
            >
              <Link
                href={blog.blog[0]}
                className={cx("w-full h-full flex flex-col items-start", {
                  "justify-between": blog.addnewlabel === "true",
                  "justify-end": blog.addnewlabel === "false",
                })}
              >

                {/* Image group */}
                <div className="aspect-square absolute w-full h-full z-0">
                  <Image
                    src={getKirbyFiles(blog.coverimage[0])}
                    fill={true}
                    alt="Temp alt message"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Linear gradient */}
                <div className="blog-gradient absolute top-0 left-0 w-full h-full z-10 aspect-square" />

                {blog.addnewlabel === "true" && (
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
                        {`${blog.minutesread}m`}
                      </div>
                    </div>

                    <div className="w-[1px] h-[14px] bg-neutrals-1100" />

                    <div className="flex items-center gap-[6px] text-neutrals-100">
                      <FontAwesomeIcon icon={faCalendar} className="text-[10px] leading-[10px] w-[10px] h-[10px]" />
                      <div className="text-14 leading-14px tracking-tight">
                        {stringToDate(blog.publishdate)}
                      </div>
                    </div>
                  </div>

                  <h3 className="h h3 mb-4 text-neutrals-100 md:text-32 md:leading-38px lg:mb-5">
                    {blog.title}
                  </h3>

                  <button className="btn btn-primary !text-16 !leading-4 !px-4 !py-3 !inline-flex !w-min">
                    <span className="tracking-tight whitespace-nowrap">Read blog</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3" />
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>



        {/* Swiper controls */}
        <div className="w-full relative flex justify-between items-start lg:hidden">

          {/* Swiper pagination - bullets */}
          <div className="swiper-pagination swiper-pagination-highlightedBlogs !relative flex items-center gap-1 !bottom-0 !top-0 !w-auto" />

          {/* Swiper navigation - arrows */}
          <div className="flex items-center gap-2">
            <div className="swiper-button-prev-highlightedBlogs swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1300 bg-neutrals-200 shadow-btnBlack">
              <FontAwesomeIcon icon={faArrowLeft} className="text-16 leading-4 w-4 h-4 text-neutrals-1300" />
            </div>

            <div className="swiper-button-next-highlightedBlogs swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1300 bg-neutrals-200 shadow-btnBlack">
              <FontAwesomeIcon icon={faArrowRight} className="text-16 leading-4 w-4 h-4 text-neutrals-1300" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  ))
}