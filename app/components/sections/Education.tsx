// Next & React
import Link from "next/link";
import Image from "next/image";

// Types
import { EducationProps } from "@/types/sections/Education";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";
import { stringToDate } from "@/utils/helper-functions";

// ClassNames
import cx from "classnames";



export default function Education({ data }: EducationProps) {
  return (!data.isHidden && (
    <section id="education" className={cx("section", {
      "bg-neutrals-200": data.content.bgcolor === "grey",
      "bg-neutrals-100": data.content.bgcolor === "white",
    })}>
      <Wrapper className={cx("md:flex md:items-start md:gap-20 lg:gap-[109px]", {
        "hd:border-neutrals-400": data.content.bgcolor === "grey",
        "hd:border-neutrals-300": data.content.bgcolor === "white",
      })}>

        {/* Text */}
        <div className="md:w-full xl:max-w-[624px]">

          {/* Heading */}
          <div className="mb-10 lg:mb-14">
            <div className="label light">
              {data.content.educationlabel}
            </div>

            <h2 className="h h2">
              {data.content.educationtitle}
            </h2>
          </div>



          {/* Education card */}
          <div className="py-8 px-6 bg-neutrals-100 border-[0.4px] border-neutrals-400 shadow-card lg:py-10 lg:px-8">

            {/* Icon */}
            <div className="w-[52px] h-[52px] flex justify-center items-center border border-prim-300 bg-prim-200 mb-6 lg:w-16 lg:h-16 lg:mb-8">
              <FontAwesomeIcon icon={faGraduationCap} className="text-24 leading-6 h-6 w-6 text-neutrals-1300 lg:text-28 lg:leading-7" />
            </div>

            <h5 className="h h5 mb-2 sm:text-24 sm:leading-30px lg:text-32 lg:leading-38px lg:mb-3">
              {data.content.educationcard.title}<br className="lg:hidden xl:block" /> @

              {data.content.educationcard.addwebsite === "true" ? (
                <Link
                  className="a11y-focus underline"
                  href={data.content.educationcard.website}
                  target="_blank"
                >
                  {` ${data.content.educationcard.school}`}
                </Link>
              ) : ` ${data.content.educationcard.school}`}
            </h5>

            {/* Period */}
            <div className="inline-flex items-center gap-3 py-1 px-2 bg-neutrals-300 mb-5 lg:py-[6px] lg:px-3 lg:mb-6">
              <div className="text-14 leading-14px text-neutrals-1300 lg:text-16 lg:leading-4">
                {stringToDate(data.content.educationcard.startdate)}
              </div>

              {/* divider */}
              <div className="w-[14px] h-px bg-neutrals-1100" />

              <div className="text-14 leading-14px text-neutrals-1300 lg:text-16 lg:leading-4">
                {data.content.educationcard.enddate !== "" ? stringToDate(data.content.educationcard.enddate) : "Current"}
              </div>
            </div>

            <div
              className="p mb-6"
              dangerouslySetInnerHTML={{ __html: data.content.educationcard.paragraph }}
            />

            {/* Tags */}
            <div className="flex items-center gap-1 flex-wrap">
              {data.content.educationcard.tags.split(", ").map((tag: string, index: number) => (
                <div
                  key={index}
                  className="label light !mb-0"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image group */}
        <div className="hidden relative w-full aspect-[4/5] md:block md:w-full xl:max-w-[547px]">
          <Image
            src={getKirbyFiles(data.content.educationimage[0])}
            alt="Karel Decoene at graduation party KdG Hogeschool"
            fill={true}
            sizes="(max-width: 1023px) 0vw, 50vw"
            className="object-cover border-[0.4px] border-neutrals-400 shadow-image z-10"
          />

          {/* Decorative rectangles */}
          <div className="w-10 h-10 bg-prim-400 absolute z-0 -left-2 top-7 sm:w-20 sm:h-20 sm:-left-4 sm:top-14 sm:bg-prim-300 md:w-10 md:h-10 md:-left-2 md:top-7 lg:w-20 lg:h-20 lg:-left-4 lg:top-14" />
          <div className="w-10 h-6 bg-prim-300 absolute z-20 -right-2 bottom-11 sm:w-20 sm:h-12 sm:-right-4 sm:bottom-[88px] sm:bg-prim-200 md:w-10 md:h-6 md:-right-2 md:bottom-14 lg:w-20 lg:h-12 lg:-right-4 lg:bottom-[88px]" />
        </div>
      </Wrapper>
    </section>
  ))
}