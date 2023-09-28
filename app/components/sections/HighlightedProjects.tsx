"use client";

// Next & React
import Link from "next/link";
import Image from "next/image";

// Types
import { HighlightedProjectsProps } from "@/types/sections/HighlightedProjects";
import { HighlightedProjectProps } from "@/types/organisms/HighlightedProject";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";

// Classnames
import cx from "classnames";



export default function HighlightedProjects({ data }: HighlightedProjectsProps) {

  // console.log("highLightedProjects", data.content.highlightedprojects);

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
    <section id="highlightedProjects" className={cx("section", {
      "bg-neutrals-200": data.content.bgcolor === "grey",
      "bg-neutrals-100": data.content.bgcolor === "white",
    })}>
      <Wrapper className={cx("", {
        "hd:border-neutrals-400": data.content.bgcolor === "grey",
        "hd:border-neutrals-300": data.content.bgcolor === "white",
      })}>

        {/* Heading */}
        <div className="mb-10 flex justify-between items-start lg:mb-[72px]">
          <div className="lg:max-w-[547px]">
            <h2 className="h h2 lg:mb-6">
              {data.content.highlightedprojectstitle}
            </h2>

            <div
              className="p hidden lg:block"
              dangerouslySetInnerHTML={{ __html: data.content.highlightedprojectsparagraph }}
            >

            </div>
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
            el: ".swiper-pagination-highlightedProjects",
          }}
          navigation={{
            nextEl: ".swiper-button-next-highlightedProjects",
            prevEl: ".swiper-button-prev-highlightedProjects"
          }}
          breakpoints={sliderSettings}
        >
          {data.content.highlightedprojects.map((project: HighlightedProjectProps, index: number) => (
            <SwiperSlide
              key={index}
              className="border-[0.4px] border-neutrals-400 shadow-card !h-auto !flex flex-col justify-between bg-neutrals-1200"
            >
              <Link href={project.project[0]}>

                {/* Project cover */}
                <div className="relative aspect-[3/2]">
                  <Image
                    src={getKirbyFiles(project.coverimage[0])}
                    fill={true}
                    sizes="(max-width: 639px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    alt={project.alttag}
                    className="object-cover"
                  />
                </div>

                {/* Project content */}
                <div className="py-6 px-5 relative lg:py-8 lg:px-6">
                  <div>
                    {project.addnewlabel === "true" && (
                      <div className="label light shadow-btnPrimary absolute left-5 top-0 -translate-y-1/2">
                        New
                      </div>
                    )}

                    <h3 className="h h3 mb-1 text-neutrals-100 lg:text-24 lg:leading-30px">
                      {project.title}
                    </h3>

                    <div
                      className="p text-neutrals-200 mb-3 lg:mb-4"
                      dangerouslySetInnerHTML={{ __html: project.intro }}
                    />

                    {/* Tags */}
                    <div className="flex items-center gap-1 flex-wrap mb-6 lg:mb-8">
                      {project.tags.split(", ").map((tag: string, index: number) => (
                        <div
                          key={index}
                          className="label dark !mb-0"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={project.project[0]}
                className="btn btn-primary !text-16 !leading-4 !px-4 !py-3 !inline-flex !w-min !relative bottom-6 left-5 lg:left-6 lg:bottom-8"
              >
                <span className="tracking-tight whitespace-nowrap">Discover project</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>



        {/* Swiper controls */}
        <div className="w-full relative flex justify-between items-start">

          {/* Swiper pagination - bullets */}
          <div className="swiper-pagination swiper-pagination-highlightedProjects !relative flex items-center gap-1 !bottom-0 !top-0 !w-auto" />

          {/* Swiper navigation - arrows */}
          <div className="flex items-center gap-2">
            <div className="swiper-button-prev-highlightedProjects swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1100 text-neutrals-1100 bg-neutrals-100 shadow-btnBlack transition-colors ease-in-out duration-300 hover:border-neutrals-1400 hover:text-neutrals-1400">
              <FontAwesomeIcon icon={faArrowLeft} className="text-16 leading-4 w-4 h-4" />
            </div>

            <div className="swiper-button-next-highlightedProjects swiper-button cursor-pointer w-10 h-10 flex justify-center items-center border border-neutrals-1100 text-neutrals-1100 bg-neutrals-100 shadow-btnBlack transition-colors ease-in-out duration-300 hover:border-neutrals-1400 hover:text-neutrals-1400">
              <FontAwesomeIcon icon={faArrowRight} className="text-16 leading-4 w-4 h-4" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  ))
}