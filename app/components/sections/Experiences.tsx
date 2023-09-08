"use client";

// Next & React
import { useState } from "react";
import Link from "next/link";

// Types
import { ExperiencesProps } from "@/types/sections/Experiences";
import { ExperienceProps } from "@/types/organisms/Experience";

// Components
import Wrapper from "../helpers/Wrapper";
import Button from "../components/Button";

// ClassNames
import cx from "classnames";

// Utils
import { stringToDate } from "@/utils/helper-functions";



export default function Experiences({ data }: ExperiencesProps) {

  // States
  const [activeTab, setActiveTab] = useState<ExperienceProps>(data.content.experiences[0]);



  return (!data.isHidden && (
    <section className="section bg-neutrals-1300 lg:py-[100px] xl:py-0 xl:bg-neutrals-100">
      <div className="xl:max-w-8xl xl:mx-auto xl:py-[100px] hd:border-x-[0.4px] hd:border-neutrals-300">
        <Wrapper className="xl:max-w-[1280px] xl:px-[109px] xl:bg-neutrals-1300 xl:py-[100px] hd:!py-[100px]">

          {/* Heading */}
          <div className="mb-10 md:mb-12 lg:mb-[72px]">
            <div className="label dark">
              {data.content.experiencelabel}
            </div>

            <h2 className="h h2 text-neutrals-100">
              {data.content.experiencetitle}
            </h2>
          </div>

          {/* Experiences */}
          <div className="md:flex md:gap-8 md:mb-12 lg:pb-14 lg:border-b lg:border-neutrals-1100 lg:mb-14">

            {/* Tabs */}
            <div className="mb-5 relative md:mb-0">
              <div className="no-scrollbar flex items-center gap-6 flex-nowrap overflow-x-scroll overflow-y-hidden md:flex-col md:gap-3 md:items-start md:w-[240px] lg:w-[296px]">
                {data.content.experiences.map((experience: ExperienceProps, index: number) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(experience)}
                    className={cx("whitespace-nowrap cursor-pointer py-3 text-20 leading-26px border-b-2 relative z-10 md:border-b-0 md:w-full md:py-3 md:px-8 md:border-l-2 md:font-medium lg:text-24 lg:leading-30px lg:py-4 lg:px-10 lg:hover:bg-neutrals-1200", {
                      "text-prim-500 border-prim-500 md:bg-neutrals-1200": experience.company === activeTab.company,
                      "text-neutrals-400 border-neutrals-800": experience.company !== activeTab.company,
                    })}
                  >
                    {experience.company}
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neutrals-800 z-0 md:h-full md:w-[2px]" />
            </div>

            {/* Experience */}
            <div className="mb-10 py-8 px-6 bg-neutrals-1200 border-[0.4px] border-neutrals-1100 md:mb-0 lg:py-10 lg:px-8">
              <h5 className="h h5 text-neutrals-100 mb-2 sm:text-24 sm:leading-30px lg:mb-3 lg:text-32 lg:leading-38px">
                {activeTab.jobtitle} @ {activeTab.addwebsite === "true" ? (
                  <Link
                    href={activeTab.website}
                    className="underline"
                    target="_blank"
                  >
                    {activeTab.company}
                  </Link>
                ) : activeTab.company}
              </h5>

              {/* Period */}
              <div className="inline-flex items-center gap-3 py-1 px-2 bg-neutrals-1300 mb-5 lg:py-[6px] lg:px-3">
                <div className="text-14 leading-14px text-neutrals-200 lg:text-16 lg:leading-4">
                  {stringToDate(activeTab.startdate)}
                </div>

                {/* divider */}
                <div className="w-[14px] h-px bg-neutrals-1100" />

                <div className="text-14 leading-14px text-neutrals-200 lg:text-16 lg:leading-4">
                  {activeTab.enddate !== "" ? stringToDate(activeTab.enddate) : "Current"}
                </div>
              </div>

              <p className="p text-neutrals-200 mb-6">
                {activeTab.paragraph}
              </p>

              {/* Tags */}
              <div className="flex items-center gap-1 flex-wrap">
                {activeTab.tags.split(", ").map((tag: string, index: number) => (
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

          {/* CTA */}
          <div className="lg:flex lg:justify-between lg:items-start">
            <h3 className="h h3 text-neutrals-100 mb-6 lg:text-32 lg:leading-38px lg:max-w-[481px]">
              {data.content.ctatitle}
            </h3>

            <Button button={data.content.ctabutton[0]} className="flex-nowrap" />
          </div>
        </Wrapper>
      </div>
    </section>
  )
  )
}