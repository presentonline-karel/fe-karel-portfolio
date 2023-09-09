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
import { faArrowRight, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";



export default function HighlightedBlogs({ data }: HighlightedBlogsProps) {

  // Slider breakpoint settings
  const sliderSettings = {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  };



  return (!data.isHidden && (
    <section className="section">
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
            <SwiperSlide className="border-[0.4px] border-neutrals-400 shadow-card">
              <Link
                href={blog.blog[0]}
                className=""
              >

                {/* Image group */}
                <div className="relative aspect-square">
                  <Image
                    src={getKirbyFiles(blog.coverimage[0])}
                    fill={true}
                    alt="Temp alt message"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="label dark shadow-btnBlack">
                  New
                </div>

                {/* Blog content */}
                <div className="">

                  {/* Details */}
                  <div className="">
                    <div className="">
                      <FontAwesomeIcon icon={faClock} className="" />
                      <div>5m</div>
                    </div>

                    <div className="" />

                    <div className="">
                      <FontAwesomeIcon icon={faCalendar} className="" />
                      <div>March '20</div>
                    </div>
                  </div>

                  <h3 className="h h3">
                    Boost your conversion rate using these 10 tips
                  </h3>

                  <button className="btn btn-primary">
                    <span>Read blog</span>
                    <FontAwesomeIcon icon={faArrowRight} className="" />
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  ))
}