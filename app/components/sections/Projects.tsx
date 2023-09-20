"use client";

// Next & React
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Types
import { ProjectsProps } from "@/types/sections/Projects";

// Components
import Wrapper from "../helpers/Wrapper";
import { ProjectProps } from "@/types/organisms/Project";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Classnames
import cx from "classnames";



export default function Projects({ labelTags, tags, projects }: ProjectsProps) {

  // States
  const [activeTag, setActiveTag] = useState("");



  // @ts-ignore
  console.log("projectProjects", Object.values(projects.data));



  useEffect(() => {
    console.log(activeTag);
  }, [activeTag])



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
              {`All (${Object.keys(projects.data).length})`}
            </button>

            {/* divider */}
            <div className="block w-[1px] h-10 bg-neutrals-600 lg:h-14" />

            <div className="flex items-center gap-1 flex-nowrap overflow-x-scroll overflow-y-hidden no-scrollbar sm:gap-2 lg:gap-3">
              {tags.split(", ").map((tag: string, index: number) => (
                <button
                  onClick={() => activeTag === tag ? setActiveTag("") : setActiveTag(tag)}
                  className={cx("btn btn-secondary whitespace-nowrap py-3 px-4 text-16 leading-4 !border-neutrals-600 hover:!border-neutrals-1300 lg:px-8 lg:py-4 lg:text-20 lg:leading-5", {
                    "!border-neutrals-1300 !bg-neutrals-1300 !text-neutrals-100": activeTag === tag,
                  })}
                >
                  {/* @ts-ignore */}
                  {`${tag} (${Object.values(projects.data).filter((project: ProjectProps) => (project.category.includes(tag))).length})`}
                </button>
              ))}
            </div>
          </div>
        </div>



        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {activeTag === "" && (
            <>
              {/* @ts-ignore */}
              {Object.values(projects.data).map((project: ProjectProps, index: number) => (
                <Link
                  // @ts-ignore
                  href={project.uri}
                  className="bg-neutrals-1200 flex flex-col justify-between w-full border-[0.4px] border-neutrals-400 shadow-card"
                >
                  <div>

                    {/* Project cover */}
                    <div className="relative aspect-[3/2]">
                      <Image
                        // @ts-ignore
                        src={project.cover.url}
                        fill={true}
                        alt="Temp alt message"
                        className="object-cover"
                      />
                    </div>

                    {/* Project content */}
                    <div className="py-6 px-5 relative lg:py-8 lg:px-6">
                      <div>
                        {/* @ts-ignore */}
                        {project.isprojectnew === "true" && (
                          <div className="label light shadow-btnPrimary absolute left-5 top-0 -translate-y-1/2">
                            New
                          </div>
                        )}

                        <h3 className="h h3 mb-1 text-neutrals-100 lg:text-24 lg:leading-30px">
                          {/* @ts-ignore */}
                          {project.longtitle}
                        </h3>

                        <p className="p text-neutrals-200 mb-3 lg:mb-4">
                          {/* @ts-ignore */}
                          {project.descriptioncard}
                        </p>

                        {/* Tags */}
                        <div className="flex items-center gap-1 flex-wrap mb-6 lg:mb-8">
                          {/* @ts-ignore */}
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
                  </div>

                  <button
                    className="btn btn-primary !text-16 !leading-4 !px-4 !py-3 !inline-flex !w-min !relative bottom-6 left-5 lg:left-6 lg:bottom-8"
                  >
                    <span className="tracking-tight whitespace-nowrap">Discover project</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3" />
                  </button>
                </Link>
              ))}
            </>
          )}



          {activeTag !== "" && (
            <>
              {/* @ts-ignore */}
              {Object.values(projects.data).filter((project: ProjectProps) => (project.category.includes(activeTag))).map((project: ProjectProps, index: number) => (
                <Link
                  // @ts-ignore
                  href={project.uri}
                  className="bg-neutrals-1200 flex flex-col justify-between w-full border-[0.4px] border-neutrals-400 shadow-card"
                >
                  <div>

                    {/* Project cover */}
                    <div className="relative aspect-[3/2]">
                      <Image
                        // @ts-ignore
                        src={project.cover.url}
                        fill={true}
                        alt="Temp alt message"
                        className="object-cover"
                      />
                    </div>

                    {/* Project content */}
                    <div className="py-6 px-5 relative lg:py-8 lg:px-6">
                      <div>
                        {/* @ts-ignore */}
                        {project.isprojectnew === "true" && (
                          <div className="label light shadow-btnPrimary absolute left-5 top-0 -translate-y-1/2">
                            New
                          </div>
                        )}

                        <h3 className="h h3 mb-1 text-neutrals-100 lg:text-24 lg:leading-30px">
                          {/* @ts-ignore */}
                          {project.longtitle}
                        </h3>

                        <p className="p text-neutrals-200 mb-3 lg:mb-4">
                          {/* @ts-ignore */}
                          {project.descriptioncard}
                        </p>

                        {/* Tags */}
                        <div className="flex items-center gap-1 flex-wrap mb-6 lg:mb-8">
                          {/* @ts-ignore */}
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
                  </div>

                  <button
                    className="btn btn-primary !text-16 !leading-4 !px-4 !py-3 !inline-flex !w-min !relative bottom-6 left-5 lg:left-6 lg:bottom-8"
                  >
                    <span className="tracking-tight whitespace-nowrap">Discover project</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3" />
                  </button>
                </Link>
              ))}
            </>
          )}
        </div>



        {/* <div className="flex justify-center items-center">
          <button className="btn btn-secondary py-3 px-4">
            <span className="text-16 leading-4">Load more</span>
            <FontAwesomeIcon icon={faArrowDown} className="w-[11px] !h-3" />
          </button>
        </div> */}
      </Wrapper>
    </section >
  )
}