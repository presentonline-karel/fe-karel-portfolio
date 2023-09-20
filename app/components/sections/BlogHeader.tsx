// Next
import Link from "next/link";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faClock, faChain } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// Types
import { BlogHeaderProps } from "@/types/sections/BlogHeader";

// Utils
import { stringToDate } from "@/utils/helper-functions";



export default function BlogHeader({blogTitle, blogIntro, publishDate, minutesRead}: BlogHeaderProps) {
  return (
    <section className="pt-[157px] pb-6">
      <Wrapper>

        {/* Top */}
        <div className="flex justify-between items-center mb-6">

          {/* Breadcrumb mobile */}
          <Link href="/blog" className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-[10px] leading-3 text-neutrals-1200 !w-[7px] !h-3 lg:!w-[9px] lg:!h-4"
            />

            <span className="underline py-2 text-14 leading-14px text-neutrals-1300 tracking-tight lg:text-18 lg:leading-18px">
              Blog
            </span>
          </Link>

          {/* Details */}
          <div className="flex items-center gap-1">
            <div className="py-[6px] px-3 bg-neutrals-300 text-neutrals-1300 flex items-center gap-[6px]">
              <FontAwesomeIcon icon={faClock} className="w-[10px] !h-[10px]" />
              <span className="text-14 leading-14px">{`${minutesRead}m`}</span>
            </div>

            <div className="py-[6px] px-3 bg-neutrals-300 text-neutrals-1300 flex items-center gap-[6px]">
              <span className="text-14 leading-14px">{stringToDate(publishDate)}</span>
            </div>
          </div>
        </div>



        <h1 className="h h1 text-32 leading-38px mb-4">
          {blogTitle}
        </h1>

        <p className="p font-normal mb-6 text-18 leading-[28px]">
          {blogIntro}
        </p>



        {/* Socials */}
        <div>
          <div className="text-16 leading-6 text-neutrals-1200 mb-3">
            Share this article
          </div>

          <div className="flex items-center gap-5">
            <Link href="https://google.com" target="_blank">
              <FontAwesomeIcon icon={faChain} className="w-5 !h-5 text-neutrals-1300" />
            </Link>

            <Link href="https://google.com" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="w-[13px] !h-5 text-neutrals-1300" />
            </Link>

            <Link href="https://google.com" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="w-5 !h-5 text-neutrals-1300" />
            </Link>

            <Link href="https://google.com" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-[18px] !h-5 text-neutrals-1300" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}