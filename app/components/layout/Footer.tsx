// Next & React
import Link from "next/link";

// Components
import Image from "next/image";
import Wrapper from "../helpers/Wrapper";

// Utils
import { renderIcon } from "@/utils/render-icon";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Types
import { SocialProps } from "@/types/organisms/Social";
import { NavigationLinkProps } from "@/types/organisms/NavigationLink";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



export default async function Footer() {
  return (
    <footer className="bg-neutrals-1300 py-12 pb-4 border-t-[0.4px] border-neutrals-1100 sm:pt-16 md:pb-6 lg:pt-[96px] lg:pb-8 hd:py-0">
      <Wrapper className="hd:pt-[96px] hd:pb-8 hd:!border-neutrals-1200">

        <div className="relative z-10 md:flex md:gap-20 md:justify-between md:items-start md:pr-20 md:pb-12 md:border-b md:border-neutrals-1200 xl:pr-[109px]">

          <Link
            href="#container"
            className="a11y-focus absolute right-0 top-3 md:top-0"
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="w-5 !h-5 text-neutrals-100 z-20 lg:w-6 lg:!h-6 xl:w-7 xl:!h-7"
            />
          </Link>

          <div className="border-b border-neutrals-1200 pb-9 md:w-[360px] md:border-none md:pb-0 xl:w-[405px]">
            <div className="flex items-center gap-8 mb-6 md:gap-12 lg:mb-10">

              <div className="relative w-[120px] h-11 xl:w-[154px] xl:h-14">
                <Image
                  src="/KarelDecoene-logo-dark.png"
                  alt="Logo Karel Decoene portfolio website"
                  fill={true}
                  sizes="(max-width: 1439px) 30vw, 11vw"
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="flex items-center gap-5 lg:hidden">
                <Link
                  href="https://www.linkedin.com/in/karel-decoene-395478187/"
                  className="a11y-focus text-neutrals-100 w-5 !h-5"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div
              className="p text-neutrals-200 mb-4 lg:mb-8"
            >
              I’m a UX designer who likes to make things clear, simple and useful. This website was designed and developed by me.
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <Link
                href="https://www.linkedin.com/in/karel-decoene-395478187/"
                className="a11y-focus text-neutrals-100 w-6 !h-6"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
              </Link>
            </div>

            <div className="py-2 px-3 bg-neutrals-1200 inline-flex items-center gap-4 lg:hidden">
              <Link
                href={`tel:+32476280902`}
                className="a11y-focus flex items-center gap-[6px] text-neutrals-100"
                target="_blank"
              >
                <FontAwesomeIcon icon={renderIcon("phone")} className="w-3 h-3" />
                <span className="text-16 leading-4 font-normal">+32 476 28 09 02</span>
              </Link>

              <div className="w-px h-4 bg-neutrals-1100" />

              <Link
                href={`mailto:hi@karrel.dev`}
                className="a11y-focus flex items-center gap-[6px] text-neutrals-100"
              >
                <FontAwesomeIcon icon={renderIcon("envelope")} className="w-3 h-3" />
                <span className="text-16 leading-4 font-normal">hi@karrel.dev</span>
              </Link>
            </div>
          </div>



          <div className="py-9 flex items-start gap-2 border-b border-neutrals-1200 md:w-2/3 md:max-w-[320px] md:gap-8 md:py-0 md:border-none lg:max-w-[480px] min-[1280px]:max-w-[560px] xl:max-w-[624px]">
            <div className="w-full">
              <div className="text-14 leading-14px font-light text-neutrals-200 mb-5 lg:text-20 lg:leading-26px lg:mb-6 lg:font-medium xl:text-24 xl:leading-30px">
                Main links
              </div>

              <div className="flex flex-col gap-[2px] text-neutrals-100 xl:gap-2">
                <Link
                  href={`/`}
                  className="a11y-focus w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                >
                  Home
                </Link>

                <Link
                  href={`/projects`}
                  className="a11y-focus w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                >
                  Projects
                </Link>

                <Link
                  href={`/blog`}
                  className="a11y-focus w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                >
                  Blog
                </Link>

                <Link
                  href={`/about`}
                  className="a11y-focus w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                >
                  About
                </Link>

                <Link
                  href={`/contact`}
                  className="a11y-focus w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden w-full lg:block">
              <div className="text-14 leading-14px font-light text-neutrals-200 mb-5 lg:text-20 lg:leading-26px lg:mb-6 lg:font-medium xl:text-24 xl:leading-30px">
                Contact me
              </div>

              <div className="flex flex-col gap-[2px] text-neutrals-100 xl:gap-2">
                <Link
                  href={`mailto:hi@karrel.dev`}
                  className="a11y-focus w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                  target="_blank"
                >
                  hi@karrel.dev
                </Link>

                <Link
                  href={`tel:+32476280902`}
                  className="a11y-focus w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light"
                  target="_blank"
                >
                  +32 476 28 09 02
                </Link>
              </div>
            </div>
          </div>
        </div>



        <div className="pt-4 flex justify-center items-center gap-[3px] font-light text-neutrals-100 text-16 leading-26px md:pt-6 lg:pt-8 xl:text-18 xl:leading-18px">
          <span className="whitespace-nowrap">©{new Date().getFullYear()} Karel - All rights reserved  /</span>

          <Link
            href="/privacy-policy"
            className="a11y-focus underline whitespace-nowrap"
          >
            Privacy policy
          </Link>
        </div>
      </Wrapper>
    </footer>
  )
}