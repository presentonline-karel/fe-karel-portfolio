"use client";

// Next & React
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Types
import { PlaygroundProjectsProps } from "@/types/sections/PlaygroundProjects";
import { PlaygroundProjectProps } from "@/types/organisms/PlaygroundProject";

// Components
import Wrapper from "../helpers/Wrapper";
import Button from "../components/Button";
import PlaygroundProject from "../organisms/PlaygroundProject";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// Classnames
import cx from "classnames";

// Utils
import { getKirbyFiles, stringToDate } from "@/utils/helper-functions";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default function PlaygroundProjects({ labelTags, tags, projects }: PlaygroundProjectsProps) {
  console.log("playgroundProjectsDATA", projects);
  console.log("project1", Object.values(projects)[0]);

  // States
  const [activeTag, setActiveTag] = useState("");



  return (
    <section className="pt-10 pb-[72px] lg:pb-[120px] hd:pt-0 hd:pb-0">
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
              className="btn btn-primary whitespace-nowrap py-3 px-4 text-16 leading-4 lg:text-20 lg:leading-5 lg:px-8 lg:py-4"
            >
              {/* @ts-ignore */}
              {`All (${Object.keys(projects).length})`}
            </button>

            {/* divider */}
            <div className="block w-[1px] h-10 bg-neutrals-600 lg:h-14" />

            <div className="flex items-center gap-1 flex-nowrap overflow-x-scroll overflow-y-hidden no-scrollbar sm:gap-2 lg:gap-3">
              {tags.split(", ").map((tag: string, index: number) => (
                <button
                  onClick={() => activeTag === tag ? setActiveTag("") : setActiveTag(tag)}
                  className={cx("btn btn-secondary whitespace-nowrap py-3 px-4 text-16 leading-4 !border-neutrals-600 hover:!bg-neutrals-100 hover:!text-neutrals-1300 focus:border-neutrals-600 focus:bg-neutrals-100 focus:text-neutrals-1300 lg:px-8 lg:py-4 lg:text-20 lg:leading-5", {
                    "!border-neutrals-1300 !bg-neutrals-1300 !text-neutrals-100 focus:!border-neutrals-1300 focus:!bg-neutrals-1300 focus:!text-neutrals-100": activeTag === tag,
                  })}
                >
                  {/* @ts-ignore */}
                  {`${tag} (${Object.values(projects).filter((project: ProjectProps) => (project.tag.includes(tag))).length})`}
                </button>
              ))}
            </div>
          </div>
        </div>



        {/* Projects */}
        <div className="flex flex-col gap-8 sm:gap-16 md:gap-24">
          {activeTag === "" && (
            <>
              {Object.values(projects).map((project: PlaygroundProjectProps, index: number) => (
                <PlaygroundProject {...project} key={index} />
              ))}
            </>
          )}



          {activeTag !== "" && (
            <>
              {Object.values(projects).filter((project: PlaygroundProjectProps) => (project.tag.includes(activeTag))).map((project: PlaygroundProjectProps, index: number) => (
                <PlaygroundProject {...project} key={index} />
              ))}
            </>
          )}
        </div>
      </Wrapper>
    </section>
  )
}