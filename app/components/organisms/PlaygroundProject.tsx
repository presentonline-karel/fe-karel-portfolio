"use client";

// Next & React
import Link from "next/link";
import Image from "next/image";

// Types
import { PlaygroundProjectProps } from "@/types/organisms/PlaygroundProject";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// Utils
import { getKirbyFiles, stringToDate } from "@/utils/helper-functions";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Classnames
import cx from "classnames";

// Components
import Button from "../components/Button";



export default function PlaygroundProject(project: PlaygroundProjectProps, index: number) {
  return (
    <div
      key={index}
      className="border-[0.4px] border-neutrals-400 shadow-card md:flex md:items-center md:gap-20 md:border-none md:shadow-none even:md:flex-row-reverse even:md:bg-neutrals-200 md:px-12 md:py-20 first:md:pt-0 lg:px-20 lg:gap-[109px]"
    >

      {/* swiper container */}
      <div className="w-full md:w-1/2 xl:w-[624px]">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          pagination={{
            el: `.swiper-pagination-plagroundProject-${project.id}`,
          }}
          navigation={{
            nextEl: `.swiper-button-next-plagroundProject-${project.id}`,
            prevEl: `.swiper-button-prev-plagroundProject-${project.id}`
          }}
          className="w-full"
        >
          {project.images.map((image: string, index: number) => (
            <SwiperSlide className="relative aspect-[3/2] w-full h-full">
              <Image
                src={getKirbyFiles(image)}
                alt="test alt"
                fill={true}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* controls */}
        {project.images.length > 1 && (
          <div className="px-3 flex justify-between items-center w-full border-y-[0.4px] border-neutrals-400 md:relative md:border-none md:justify-end md:items-start md:mt-4 md:gap-2 md:px-0">
            <div className={`swiper-button-prev-plagroundProject-${project.id} swiper-button swiper-button-playground w-8 h-8 flex justify-center items-center cursor-pointer md:w-10 md:h-10 md:border md:border-neutrals-1100 md:text-neutrals-1100 md:bg-neutrals-200 md:shadow-btnBlack md:transition-colors md:ease-in-out md:duration-300 hover:md:border-neutrals-1400 hover:md:text-neutrals-1400`}>
              <FontAwesomeIcon icon={faArrowLeft} className="w-[14px] !h-4 text-neutrals-1400 md:text-16 md:leading-4 md:w-4 md:!h-4 md:text-inherit" />
            </div>

            <div className={`swiper-pagination swiper-pagination-plagroundProject-${project.id} !relative flex items-center gap-1 !h-2 !bottom-0 !top-0 !w-auto md:!absolute md:left-0`} />

            <div className={`swiper-button-next-plagroundProject-${project.id} swiper-button swiper-button-playground w-8 h-8 flex justify-center items-center cursor-pointer md:w-10 md:h-10 md:border md:border-neutrals-1100 md:text-neutrals-1100 md:bg-neutrals-200 md:shadow-btnBlack md:transition-colors md:ease-in-out md:duration-300 hover:md:border-neutrals-1400 hover:md:text-neutrals-1400`}>
              <FontAwesomeIcon icon={faArrowRight} className="w-[14px] !h-4 text-neutrals-1400 md:text-16 md:leading-4 md:w-4 md:!h-4 md:text-inherit" />
            </div>
          </div>
        )}
      </div>



      {/* Project content */}
      <div className="py-6 px-5 bg-neutrals-200 md:w-1/2 md:bg-transparent md:py-0 md:px-0 xl:w-[547px]">

        {/* Top */}
        <div className="flex items-center gap-2 mb-3 lg:gap-3">
          <div className="label light !mb-0">
            {project.tag}
          </div>

          <div className="py-[6px] px-3 text-14 leading-14px text-neutrals-1100">
            {stringToDate(project.publishdate)}
          </div>
        </div>

        <h2 className="h h2 text-24 leading-30px mb-1 lg:text-48 lg:leading-13 lg:mb-6">
          {project.title}
        </h2>

        <p className={cx("p lg:mb-10", {
          "mb-6": project.ctabutton.length !== 0,
        })}>
          {project.paragraph}
        </p>

        {project.ctabutton.length !== 0 && (
          <Button
            button={project.ctabutton[0]}
            className="px-4 py-3 text-16 leading-4 lg:px-9 lg:py-4 lg:text-20 lg:leading-5"
          />
        )}
      </div>
    </div>
  )
}