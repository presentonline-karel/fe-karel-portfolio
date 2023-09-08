// Next & React
import Link from "next/link";
import Image from "next/image";

// Types
import { HeroServiceProps } from "@/types/sections/HeroService";
import { ButtonProps } from "@/types/components/Button";

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";

// Components
import Wrapper from "../helpers/Wrapper";
import Button from "../components/Button";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";



export default function HeroService({ data }: HeroServiceProps) {
  return (!data.isHidden && (
    <section className="section pt-6 sm:pt-12 md:pt-0">
      <Wrapper className="flex flex-col gap-10 sm:gap-12 md:pt-[146px] md:relative md:flex-row md:items-center md:gap-20 lg:gap-[109px] lg:pt-[160px] hd:border-neutrals-300 hd:pt-[160px]">

        {/* Freelance/project switch */}
        <div className="md:absolute md:top-10 md:left-1/2 md:-translate-x-1/2 md:flex md:items-center md:gap-3">

          {/* freelance option */}
          {data.content.isfreelanceorproject === "false" ? (
            <div className="py-3 px-4 flex items-center gap-3 border-[0.4px] bg-prim-100 border-prim-300 cursor-default">
              <div className="w-6 h-6 rounded-full bg-neutrals-100 border-[6px] border-prim-600" />

              <div className="text-18 leading-6 text-neutrals-1300 whitespace-nowrap lg:text-20 lg:leading-26px">
                Hire me as a freelancer
              </div>
            </div>
          ) : (
            <Link
              href={data.content.freelancepage[0]}
              className="py-3 px-4 flex items-center gap-3 border-[0.4px] bg-neutrals-100 border-neutrals-400 shadow-input hover:border-neutrals-800"
            >
              <div className="w-6 h-6 rounded-full bg-neutrals-100 border border-neutrals-600" />

              <div className="text-18 leading-6 text-neutrals-1300 whitespace-nowrap lg:text-20 lg:leading-26px">
                Hire me as a freelancer
              </div>
            </Link>
          )}

          {/* project option */}
          {data.content.isfreelanceorproject === "true" ? (
            <div className="py-3 px-4 flex items-center gap-3 border-[0.4px] bg-prim-100 border-prim-300 cursor-default">
              <div className="w-6 h-6 rounded-full bg-neutrals-100 border-[6px] border-prim-600" />

              <div className="text-18 leading-6 text-neutrals-1300 whitespace-nowrap lg:text-20 lg:leading-26px">
                One-time project collaboration
              </div>
            </div>
          ) : (
            <Link
              href={data.content.projectpage[0]}
              className="py-3 px-4 flex items-center gap-3 border-[0.4px] bg-neutrals-100 border-neutrals-400 shadow-input hover:border-neutrals-800"
            >
              <div className="w-6 h-6 rounded-full bg-neutrals-100 border border-neutrals-600" />

              <div className="text-18 leading-6 text-neutrals-1300 whitespace-nowrap lg:text-20 lg:leading-26px">
                One-time project collaboration
              </div>
            </Link>
          )}
        </div>

        {/* Text */}
        <div className="w-full xl:w-[547px]">

          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 mb-4 lg:gap-4 lg:mb-8">
            <Link
              href="/"
              className="underline py-2 text-14 leading-14px text-neutrals-1300 lg:text-18 lg:leading-18px"
            >
              Home
            </Link>

            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[10px] leading-3 text-neutrals-1200 w-[7px] h-3 lg:w-[9px] lg:h-4"
            />

            <Link
              href="/#services"
              className="underline py-2 text-14 leading-14px text-neutrals-1300 lg:text-18 lg:leading-18px"
            >
              Services
            </Link>

            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[10px] leading-3 text-neutrals-1200 w-[7px] h-3 lg:w-[9px] lg:h-4"
            />

            <div className="py-2 text-14 leading-14px text-neutrals-1000 lg:text-18 lg:leading-18px">
              {data.content.service}
            </div>
          </div>



          <h1 className="h h1 text-32 leading-38px lg:text-48 lg:leading-13 xl:text-56 xl:leading-15">
            {data.content.herotitle}
          </h1>

          <p className="p mb-6 lg:mb-10">
            {data.content.heroparagraph}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            {data.content.herobuttons.map((button: ButtonProps, index: number) => (
              <Button button={button} key={index} />
            ))}
          </div>
        </div>

        {/* Image group */}
        <div className="relative w-full aspect-[4/3] xl:w-[624px]">
          <Image
            src={getKirbyFiles(data.content.heroimage[0])}
            alt="Temp alt message"
            fill={true}
            priority={true}
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