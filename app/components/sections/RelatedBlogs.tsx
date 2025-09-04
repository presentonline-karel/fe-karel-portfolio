"use client";

// Types
import { RelatedBlogsProps } from "@/types/sections/RelatedBlogs";
import { BlogProps } from "@/types/organisms/Blog";

// Next & React
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Components
import Wrapper from "../helpers/Wrapper";
import Blog from "../organisms/Blog";

// Classnames
import cx from "classnames";



export default function RelatedBlogs({ data }: RelatedBlogsProps) {

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

  return (
    <section id="relatedBlogs" className={cx("section bg-neutrals-200")}>
      <Wrapper className={cx("hd:border-neutrals-400")}>

        {/* Heading */}
        <div className="mb-10 flex justify-between items-start lg:mb-[72px]">
          <div className="lg:max-w-[547px]">
            <h2 className="h h2 lg:mb-6">
              Related blogs
            </h2>
          </div>

          <Link
            href="/blog"
            className="a11y-focus btn btn-secondary py-3 px-4 text-16 leading-4 lg:px-9 lg:py-4 lg:text-20 lg:leading-5 lg:gap-3"
          >
            <span className="tracking-tight whitespace-nowrap">All blogs</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3 lg:text-16 lg:leading-4 lg:w-[14px] lg:h-4" />
          </Link>
        </div>



        <Swiper
          className="mb-4 lg:mb-6"
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination-relatedBlogs",
          }}
          navigation={{
            nextEl: ".swiper-button-next-relatedBlogs",
            prevEl: ".swiper-button-prev-relatedBlogs"
          }}
          breakpoints={sliderSettings}
        >
          {Object.values(data.data).map((blog: BlogProps, index: number) => (
            <SwiperSlide
              key={index}
              className="border-[0.4px] border-neutrals-400 shadow-card aspect-square w-full h-full"
            >
              <Blog {...blog} />
            </SwiperSlide>
          ))}
        </Swiper>



        {/* Swiper controls */}
        <div className="w-full relative flex justify-between items-start lg:hidden">

          {/* Swiper pagination - bullets */}
          <div className="swiper-pagination swiper-pagination-relatedBlogs !relative flex items-center gap-1 !bottom-0 !top-0 !w-auto" />

          {/* Swiper navigation - arrows */}
          <div className="flex items-center gap-2">
            <div className="swiper-button-prev-relatedBlogs swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1100 text-neutrals-1100 bg-neutrals-100 shadow-btnBlack transition-colors ease-in-out duration-300 hover:border-neutrals-1400 hover:text-neutrals-1400">
              <FontAwesomeIcon icon={faArrowLeft} className="text-16 leading-4 w-4 h-4" />
            </div>

            <div className="swiper-button-next-relatedBlogs swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1100 text-neutrals-1100 bg-neutrals-100 shadow-btnBlack transition-colors ease-in-out duration-300 hover:border-neutrals-1400 hover:text-neutrals-1400">
              <FontAwesomeIcon icon={faArrowRight} className="text-16 leading-4 w-4 h-4" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}