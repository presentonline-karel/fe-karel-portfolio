"use client";

// Types
import { TestimonialsProps } from "@/types/sections/Testimonials";
import { TestimonialProps } from "@/types/organisms/Testimonial";

// Components
import Wrapper from "../helpers/Wrapper";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Link from "next/link";



export default function Testimonials({ data }: TestimonialsProps) {

  // Slider breakpoint settings
  const sliderSettings = {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3
    }
  };



  return (!data.isHidden && (
    <section className="section bg-neutrals-200">
      <Wrapper>

        {/* Mobile */}
        <div className="lg:hidden">

          {/* Heading */}
          <div className="mb-10">
            <div className="label light">
              {data.content.testimonialslabel}
            </div>

            <h2 className="h h2">
              {data.content.testimonialstitle}
            </h2>
          </div>

          <Swiper
            className="mb-4"
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination-testimonials",
            }}
            navigation={{
              nextEl: ".swiper-button-next-testimonials",
              prevEl: ".swiper-button-prev-testimonials"
            }}
            breakpoints={sliderSettings}
          >
            {data.content.testimonials.map((testimonial: TestimonialProps, index: number) => (
              <SwiperSlide className="pt-12 pb-8 px-6 border-[0.4px] border-neutrals-400 bg-neutrals-100 relative shadow-card !h-auto !flex flex-col justify-between">
                <FontAwesomeIcon icon={faQuoteLeftAlt} className="absolute text-40 leading-11 text-prim-300 top-8 left-6 z-0" />

                <p className="p relative z-10 mb-6">
                  {testimonial.testimonial}
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-neutrals-400">
                  <h6 className="h h6">
                    {testimonial.author}
                  </h6>

                  <div className="text-14 leading-5 text-neutrals-1100 font-light tracking-tight">
                    {testimonial.function} {testimonial.addwebsite === "true" ? (
                      <Link
                        href={testimonial.website}
                        target="_blank"
                        className="underline"
                      >
                        {` ${testimonial.company}`}
                      </Link>
                    ) : ` ${testimonial.company}`}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>



          {/* Swiper controls */}
          <div className="w-full relative flex justify-between items-start lg:hidden">

            {/* Swiper pagination - bullets */}
            <div className="swiper-pagination swiper-pagination-testimonials !relative flex items-center gap-1 !bottom-0 !top-0 !w-auto" />

            {/* Swiper navigation - arrows */}
            <div className="flex items-center gap-2">
              <div className="swiper-button-prev-testimonials swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1300 bg-neutrals-200 shadow-btnBlack">
                <FontAwesomeIcon icon={faArrowLeft} className="text-16 leading-4 w-4 h-4 text-neutrals-1300" />
              </div>

              <div className="swiper-button-next-testimonials swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1300 bg-neutrals-200 shadow-btnBlack">
                <FontAwesomeIcon icon={faArrowRight} className="text-16 leading-4 w-4 h-4 text-neutrals-1300" />
              </div>
            </div>
          </div>
        </div>



        {/* Desktop */}
        <div className="hidden lg:block">

          {/* Top row */}
          <div className="flex justify-between items-start mb-10">

            {/* Heading */}
            <div className="max-w-[547px]">
              <div className="label light">
                {data.content.testimonialslabel}
              </div>

              <h2 className="h h2 mb-10">
                {data.content.testimonialstitle}
              </h2>

              <Button button={data.content.testimonialsbutton[0]} />
            </div>



            <div className="pt-12 pb-8 px-8 border-[0.4px] border-neutrals-400 bg-neutrals-100 relative shadow-card !h-auto !flex flex-col justify-between max-w-[624px]">
              <FontAwesomeIcon icon={faQuoteLeftAlt} className="absolute text-40 leading-11 text-prim-300 top-8 left-8 z-0" />

              <p className="p relative z-10 mb-6">
                {data.content.testimonials[0].testimonial}
              </p>

              {/* Author */}
              <div className="pt-5 border-t border-neutrals-400">
                <h6 className="h h6 text-18 leading-6 mb-[2px]">
                  {data.content.testimonials[0].author}
                </h6>

                <div className="text-16 leading-[22px] text-neutrals-1100 font-light tracking-tight">
                  {data.content.testimonials[0].function} {data.content.testimonials[0].addwebsite === "true" ? (
                    <Link
                      href={data.content.testimonials[0].website}
                      target="_blank"
                      className="underline"
                    >
                      {` ${data.content.testimonials[0].company}`}
                    </Link>
                  ) : ` ${data.content.testimonials[0].company}`}
                </div>
              </div>
            </div>
          </div>



          {/* Second row */}
          <div className="grid grid-cols-3 gap-8">
            {data.content.testimonials.slice(1, data.content.testimonials.length).map((testimonial: TestimonialProps, index: number) => (
              <div className="pt-12 pb-8 px-8 border-[0.4px] border-neutrals-400 bg-neutrals-100 relative shadow-card !h-auto !flex flex-col justify-between w-full">
                <FontAwesomeIcon icon={faQuoteLeftAlt} className="absolute text-40 leading-11 text-prim-300 top-8 left-8 z-0" />

                <p className="p relative z-10 mb-6">
                  {testimonial.testimonial}
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-neutrals-400">
                  <h6 className="h h6 text-18 leading-6 mb-[2px]">
                    {testimonial.author}
                  </h6>

                  <div className="text-16 leading-[22px] text-neutrals-1100 font-light tracking-tight">
                    {testimonial.function} {testimonial.addwebsite === "true" ? (
                      <Link
                        href={testimonial.website}
                        target="_blank"
                        className="underline"
                      >
                        {` ${testimonial.company}`}
                      </Link>
                    ) : ` ${testimonial.company}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
  )
}