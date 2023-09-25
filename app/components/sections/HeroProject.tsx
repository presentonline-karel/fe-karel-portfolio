"use client";

// Next & React
import Link from "next/link";
import Image from "next/image";

// Types
import { HeroProjectProps } from "@/types/sections/HeroProject";
import { ImageProps } from "@/types/components/Image";

// Components
import Wrapper from "../helpers/Wrapper";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faChain, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Utils
import { stringToDate } from "@/utils/helper-functions";



export default function HeroProject({ period, shortTitle, description, urls, technologies, carouselImages }: HeroProjectProps) {
  return (
    <section className="section pt-[157px] lg:pt-[221px] xl:pt-0">
      <Wrapper className="flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-[109px] xl:!pt-[257px] hd:border-neutrals-300">

        {/* Text */}
        <div className="w-full md:w-1/2 xl:w-[547px]">
          <div className="flex justify-between items-center mb-6 lg:mb-8">

            {/* Breadcrumbs */}
            <div className="flex items-center gap-3 lg:gap-4">
              <Link
                href="/"
                className="underline py-2 text-14 leading-14px text-neutrals-1300 tracking-tight lg:text-18 lg:leading-18px"
              >
                Home
              </Link>

              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[10px] leading-3 text-neutrals-1200 w-[7px] h-3 lg:w-[9px] lg:h-4"
              />

              <Link
                href="/projects"
                className="underline py-2 text-14 leading-14px text-neutrals-1300 tracking-tight lg:text-18 lg:leading-18px"
              >
                Projects
              </Link>

              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[10px] leading-3 text-neutrals-1200 w-[7px] h-3 lg:w-[9px] lg:h-4"
              />

              <div className="py-2 text-14 leading-14px text-neutrals-1000 tracking-tight lg:text-18 lg:leading-18px">
                {shortTitle}
              </div>
            </div>

            <div className="bg-neutrals-300 text-neutrals-1300 py-[6px] px-3 text-14 leading-14px tracking-tight lg:text-18 lg:leading-18px">
              {stringToDate(period)}
            </div>
          </div>

          <h1 className="h h1 lg:text-56 lg:leading-15 xl:text-64 xl:leading-17">{shortTitle}</h1>

          <div
            className="p mb-5 lg:mb-10"
            dangerouslySetInnerHTML={{ __html: description }}
          />



          {/* URLs */}
          <div className="flex items-center gap-2 md:mb-10 lg:gap-3 xl:mb-12">
            {urls.liveurl !== "" && (
              <Link
                href={urls.liveurl}
                className="btn btn-primary px-4 py-3 lg:px-6 lg:py-4 xl:px-9"
                target="_blank"
              >
                <FontAwesomeIcon icon={faChain} className="!w-[14px] !h-[14px] text-neutrals-1400 lg:!w-[18px] lg:!h-[18px]" />
                <span className="tracking-tight text-16 leading-4 whitespace-nowrap lg:text-20 lg:leading-5">Live url</span>
              </Link>
            )}

            {urls.figmaurl !== "" && (
              <Link
                href={urls.figmaurl}
                className="btn btn-secondary px-4 py-3 lg:px-6 lg:py-4 xl:px-9"
                target="_blank"
              >
                <span className="tracking-tight text-16 leading-4 whitespace-nowrap lg:text-20 lg:leading-5">Figma</span>
                <FontAwesomeIcon icon={faArrowRight} className="!w-[12px] !h-[12px] -rotate-45 relative top-px lg:!w-4 lg:!h-4" />
              </Link>
            )}

            {urls.githuburl !== "" && (
              <Link 
                href={urls.figmaurl} 
                className="btn btn-secondary px-4 py-3 lg:px-6 lg:py-4 xl:px-9"
                target="_blank"
              >
                <span className="tracking-tight text-16 leading-4 whitespace-nowrap lg:text-20 lg:leading-5">GitHub</span>
                <FontAwesomeIcon icon={faArrowRight} className="!w-[12px] !h-[12px] -rotate-45 relative top-px lg:!w-4 lg:!h-4" />
              </Link>
            )}
          </div>



          {/* Technologies */}
          <div className="hidden py-6 px-4 bg-neutrals-200 border-[0.4px] border-neutrals-400 md:block lg:py-7 lg:px-6">

            <div className="text-16 leading-6 tracking-tight text-neutrals-1300 mb-3 lg:text-20 lg:leading-26px lg:mb-4">
              Technologies/Frameworks used
            </div>

            <div className="flex gap-2 flex-wrap">
              {technologies.split(", ").map((technology: string, index: number) => (
                <div
                  key={index}
                  className="py-[6px] px-3 bg-prim-300 text-neutrals-1400 tracking-tight text-16 leading-4"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Image carousel */}
        <div className="w-full md:w-1/2 xl:w-[624px]">
          <Swiper
            className="mb-4 lg:mb-6 w-full"
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination-heroProject",
            }}
            navigation={{
              nextEl: ".swiper-button-next-heroProject",
              prevEl: ".swiper-button-prev-heroProject"
            }}
          >
            {Object.values(carouselImages).map((image: any, index: number) => (
              <SwiperSlide key={index} className="w-full aspect-[3/2] shadow-image relative border-[0.4px] border-neutrals-400">
                <Image
                  src={image.url}
                  alt="image props"
                  className="w-full h-full object-cover"
                  fill={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>



          {/* Swiper controls */}
          <div className="w-full relative flex justify-between items-start">

            {/* Swiper pagination - bullets */}
            <div className="swiper-pagination swiper-pagination-heroProject !relative flex items-center gap-1 !bottom-0 !top-0 !w-auto" />

            {/* Swiper navigation - arrows */}
            <div className="flex items-center gap-2">
              <div className="swiper-button-prev-heroProject swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1100 text-neutrals-1100 bg-neutrals-100 shadow-btnBlack transition-colors ease-in-out duration-300 hover:border-neutrals-1400 hover:text-neutrals-1400">
                <FontAwesomeIcon icon={faArrowLeft} className="text-16 leading-4 w-4 h-4" />
              </div>

              <div className="swiper-button-next-heroProject swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1300 text-neutrals-1100 bg-neutrals-100 shadow-btnBlack transition-colors ease-in-out duration-300 hover:border-neutrals-1400 hover:text-neutrals-1400">
                <FontAwesomeIcon icon={faArrowRight} className="text-16 leading-4 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>



        {/* Technologies */}
        <div className="py-6 px-4 bg-neutrals-200 border-[0.4px] border-neutrals-400 md:hidden">

          <div className="text-16 leading-6 tracking-tight text-neutrals-1300 mb-3">
            Technologies/Frameworks used
          </div>

          <div className="flex gap-2 flex-wrap">
            {technologies.split(", ").map((technology: string, index: number) => (
              <div
                key={index}
                className="py-[6px] px-3 bg-prim-300 text-neutrals-1400 tracking-tight text-16 leading-4"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}