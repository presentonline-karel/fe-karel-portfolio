"use client";

// Next
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faClock, faChain, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Types
import { BlogHeaderProps } from "@/types/sections/BlogHeader";

// Utils
import { stringToDate } from "@/utils/helper-functions";

// Classnames
import cx from "classnames";



export default function BlogHeader({ blogTitle, blogIntro, publishDate, minutesRead }: BlogHeaderProps) {

  // States
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");



  // Copy link functionality
  const base = "https://localhost:3000";
  const pathname = usePathname();

  const copylink = () => {
    navigator.clipboard.writeText(shareUrl);
    setShowLinkCopied(true);

    setTimeout(function () {
      setShowLinkCopied(false);
    }, 3000);
  }

  useEffect(() => {
    setShareUrl(base + pathname);
  }, [])



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

        <div
          className="p font-normal mb-6 text-18 leading-[28px] lg:mb-10"
          dangerouslySetInnerHTML={{ __html: blogIntro }}
        />



        {/* Socials */}
        <div>
          <div className="text-16 leading-6 text-neutrals-1200 mb-3 lg:mb-4 lg:text-18 lg:leading-6">
            Share this article
          </div>

          <div className="flex items-center gap-5 lg:gap-6">
            <button onClick={copylink}>
              <FontAwesomeIcon icon={faChain} className="w-5 !h-5 text-neutrals-1300 lg:w-6 lg:!h-6" />
            </button>

            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=http://karrel.be`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-[18px] !h-5 text-neutrals-1300 lg:w-[21px] lg:!h-6" />
            </Link>

            <Link
              href={`https://wa.me/?text=${shareUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 !h-5 text-neutrals-1300 lg:w-6 lg:!h-6" />
            </Link>
          </div>

          {/* Link copied message */}
          <div className={cx("fixed hidden bg-success-100 text-success-500 bottom-8 left-4 w-[calc(100vw-32px)] items-center gap-2 py-2 px-4 z-20 border border-success-300 shadow-card sm:w-[calc(100vw-96px)] sm:left-12 sm:bottom-12 sm:py-4 sm:px-6 sm:gap-3 md:max-w-[842px] md:mx-auto md:left-auto", {
            "!flex": showLinkCopied === true,
          })}>
            <FontAwesomeIcon icon={faCheck} className="text-16 leading-4 w-4 !h-4 sm:text-20 sm:leading-5 sm:w-5 sm:!h-5" />
            <span className="tracking-tight text-16 leading-6 sm:text-20 sm:leading-26px">Link copied</span>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}