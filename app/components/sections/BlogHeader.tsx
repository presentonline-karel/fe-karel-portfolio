// Next
import Link from "next/link";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faClock, faChain } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// Types
import { BlogHeaderProps } from "@/types/sections/BlogHeader";

// Utils
import { stringToDate } from "@/utils/helper-functions";



export default function BlogHeader({blogTitle, blogIntro, publishDate, minutesRead}: BlogHeaderProps) {
  return (
    <section className="pt-[157px] pb-6 lg:pt-[221px] lg:pb-0 xl:pt-0">
      <Wrapper className="md:max-w-[842px] md:mx-auto md:!px-0 lg:pb-10 xl:max-w-8xl xl:!px-[299px] xl:!pt-[257px] hd:!pb-10">

        {/* Top */}
        <div className="flex justify-between items-center mb-6 lg:mb-10">

          {/* Breadcrumb mobile */}
          <Link href="/blog" className="flex items-center gap-3 md:hidden">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-[10px] leading-3 text-neutrals-1200 !w-[7px] !h-3 lg:!w-[9px] lg:!h-4"
            />

            <span className="underline py-2 text-14 leading-14px text-neutrals-1300 tracking-tight lg:text-18 lg:leading-18px">
              Blog
            </span>
          </Link>

          {/* Breadcrumbs desktop */}
          <div className="hidden items-center gap-3 lg:gap-4 md:flex">
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
              href="/blog"
              className="underline py-2 text-14 leading-14px text-neutrals-1300 tracking-tight lg:text-18 lg:leading-18px"
            >
              Blog
            </Link>

            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[10px] leading-3 text-neutrals-1200 w-[7px] h-3 lg:w-[9px] lg:h-4"
            />

            <div className="py-2 text-14 leading-14px text-neutrals-1000 tracking-tight lg:text-18 lg:leading-18px">
              {`${blogTitle.substr(0, 36)}...`}
            </div>
          </div>

          {/* Details */}
          <div className="flex items-center gap-1">
            <div className="py-[6px] px-3 bg-neutrals-300 text-neutrals-1300 flex items-center gap-[6px]">
              <FontAwesomeIcon icon={faClock} className="w-[10px] !h-[10px] lg:!w-3 lg:!h-3" />
              <span className="text-14 leading-14px lg:text-16 lg:leading-4">{`${minutesRead}m`}</span>
            </div>

            <div className="py-[6px] px-3 bg-neutrals-300 text-neutrals-1300 flex items-center gap-[6px]">
              <span className="text-14 leading-14px lg:text-16 lg:leading-4">{stringToDate(publishDate)}</span>
            </div>
          </div>
        </div>



        <h1 className="h h1 text-32 leading-38px mb-4 lg:text-64 lg:leading-17 lg:mb-6">
          {blogTitle}
        </h1>

        <p className="p font-normal mb-6 text-18 leading-[28px] lg:mb-10">
          {blogIntro}
        </p>



        {/* Socials */}
        <div>
          <div className="text-16 leading-6 text-neutrals-1200 mb-3 lg:mb-4 lg:text-18 lg:leading-6">
            Share this article
          </div>

          <div className="flex items-center gap-5 lg:gap-6">
            <Link href="https://google.com" target="_blank">
              <FontAwesomeIcon icon={faChain} className="w-5 !h-5 text-neutrals-1300 lg:w-6 lg:!h-6" />
            </Link>

            <Link href="https://google.com" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="w-[13px] !h-5 text-neutrals-1300 lg:w-[15px] lg:!h-6" />
            </Link>

            <Link href="https://google.com" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="w-5 !h-5 text-neutrals-1300 lg:w-6 lg:!h-6" />
            </Link>

            <Link href="https://google.com" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-[18px] !h-5 text-neutrals-1300 lg:w-[21px] lg:!h-6" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}