"use client";

// Types
import { ProcessProps } from "@/types/sections/Process";

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
import { StepProps } from "@/types/organisms/Step";



export default function Process({ data }: ProcessProps) {

  // Slider breakpoint settings ADJUST THIS HERE
  const sliderSettings = {
    640: {
      slidesPerView: 2
    },
    962: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  };


  return (!data.isHidden && (
    <section className="section bg-neutrals-200">
      <Wrapper className="hd:border-neutrals-400">

        {/* Text */}
        <div className="mb-10">
          <div className="label light">
            {data.content.processlabel}
          </div>

          <h2 className="h h2 mb-4">
            {data.content.processtitle}
          </h2>

          <p className="p">
            {data.content.processparagraph}
          </p>
        </div>

        {/* Steps / Swiper container */}
        <div className="">
          <Swiper
            className="mb-4"
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }}
            breakpoints={sliderSettings}
          >
            {data.content.steps.map((step: StepProps, index: number) => (
              <SwiperSlide className="bg-neutrals-1200 py-8 px-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="Number-Container w-14 h-14 flex justify-center items-center bg-prim-200">
                    <div className="text-20 leading-26px font-medium text-neutrals-1300">
                      0{index + 1}
                    </div>
                  </div>

                  <h4 className="h h4 text-neutrals-100">
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
          <div className="w-full relative flex justify-between items-start">

            {/* Swiper pagination - bullets */}
            <div className="swiper-pagination swiper-pagination-process !relative flex items-center gap-1 !bottom-0 !top-0 !w-auto">

            </div>

            {/* Swiper navigation - arrows */}
            <div className="flex items-center gap-2">
              <div className="swiper-button-prev w-10 h-10 flex justify-center items-center border border-neutrals-1300 bg-neutrals-200">
                <FontAwesomeIcon icon={faArrowLeft} className="text-16 leading-4 w-4 h-4 text-neutrals-1300" />
              </div>

              <div className="swiper-button-next w-10 h-10 flex justify-center items-center border border-neutrals-1300 bg-neutrals-200">
                <FontAwesomeIcon icon={faArrowRight} className="text-16 leading-4 w-4 h-4 text-neutrals-1300" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
  )
}