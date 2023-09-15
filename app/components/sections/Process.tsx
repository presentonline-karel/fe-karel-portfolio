"use client";

// Types
import { ProcessProps } from "@/types/sections/Process";
import { StepProps } from "@/types/organisms/Step";

// Components
import Wrapper from "../helpers/Wrapper";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// ClassNames
import cx from "classnames";



export default function Process({ data }: ProcessProps) {

  // Slider breakpoint settings
  const sliderSettings = {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  };


  return (!data.isHidden && (
    <section id="process" className={cx("section", {
      "bg-neutrals-200": data.content.bgcolor === "grey",
      "bg-neutrals-100": data.content.bgcolor === "white",
    })}>
      <Wrapper className={cx("", {
        "hd:border-neutrals-400": data.content.bgcolor === "grey",
        "hd:border-neutrals-300": data.content.bgcolor === "white",
      })}>

        {/* Text */}
        <div className="mb-10 md:max-w-[547px] lg:mb-[72px]">
          <div className="label light">
            {data.content.processlabel}
          </div>

          <h2 className="h h2 mb-4">
            {data.content.processtitle}
          </h2>

          <p className="p md:max-w-[547px]">
            {data.content.processparagraph}
          </p>
        </div>

        {/* Steps / Swiper container */}
        <div className="relative">

          {/* Timeline */}
          <div className="hidden lg:block lg:w-full lg:absolute lg:top-[60px] lg:left-0 lg:border-b-2 lg:border-dashed lg:border-neutrals-1200 lg:z-0" />

          <Swiper
            className="mb-4 z-10"
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination-process",
            }}
            navigation={{
              nextEl: ".swiper-button-next-process",
              prevEl: ".swiper-button-prev-process"
            }}
            breakpoints={sliderSettings}
          >
            {data.content.steps.map((step: StepProps, index: number) => (
              <SwiperSlide className={cx("py-8 px-6 !h-auto", {
                "bg-neutrals-1200": step.highlightstep === "false",
                "bg-neutrals-1400": step.highlightstep === "true"
              })}>
                <div className="flex items-center gap-4 mb-5 lg:flex-col lg:gap-6 lg:items-start">
                  <div className="w-14 h-14 flex justify-center items-center bg-prim-200">
                    <div className="text-20 leading-26px font-medium text-neutrals-1300">
                      0{index + 1}
                    </div>
                  </div>

                  <h4 className="h h4 text-neutrals-100 lg:text-24 lg:leading-30px">
                    {step.title}
                  </h4>
                </div>

                <p className="p text-neutrals-200">
                  {step.paragraph}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>



          {/* Swiper controls */}
          <div className="w-full relative flex justify-between items-start lg:hidden">

            {/* Swiper pagination - bullets */}
            <div className="swiper-pagination swiper-pagination-process !relative flex items-center gap-1 !bottom-0 !top-0 !w-auto" />

            {/* Swiper navigation - arrows */}
            <div className="flex items-center gap-2">
              <div className="swiper-button-prev-process swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1300 bg-neutrals-200 shadow-btnBlack">
                <FontAwesomeIcon icon={faArrowLeft} className="text-16 leading-4 w-4 h-4 text-neutrals-1300" />
              </div>

              <div className="swiper-button-next-process swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1300 bg-neutrals-200 shadow-btnBlack">
                <FontAwesomeIcon icon={faArrowRight} className="text-16 leading-4 w-4 h-4 text-neutrals-1300" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  ))
}