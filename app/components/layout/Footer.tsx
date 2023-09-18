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



export default async function Footer() {

  // Fetch footer data
  // const api = `${process.env.NEXT_PUBLIC_KIRBYCMS_API_URL}`;
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch("http://be-karel-portfolio.int/_site", {
    method: "GET",
    mode: 'no-cors',
    headers,
  });

  //console.log("respFooter", resp);

  const data = await resp.json();



  return (
    <footer className="bg-neutrals-1300 py-12 pb-4 border-t-[0.4px] border-neutrals-1100 sm:pt-16 md:pb-6 lg:pt-[96px] lg:pb-8 hd:py-0">
      <Wrapper className="hd:pt-[96px] hd:pb-8 hd:!border-neutrals-1200">

        {/* Top part */}
        <div className="relative z-10 md:flex md:gap-20 md:justify-between md:items-start md:pr-20 md:pb-12 md:border-b md:border-neutrals-1200 xl:pr-[109px]">

          <Link
            href="#container"
            className="absolute right-0 top-3 md:top-0"
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="w-5 !h-5 text-neutrals-100 z-20 lg:w-6 lg:!h-6 xl:w-7 xl:!h-7"
            />
          </Link>

          {/* Info part */}
          <div className="border-b border-neutrals-1200 pb-9 md:w-[360px] md:border-none md:pb-0 xl:w-[405px]">
            <div className="flex items-center gap-8 mb-6 md:gap-12 lg:mb-10">

              {/* logo */}
              <div className="relative w-[120px] h-11 xl:w-[154px] xl:h-14">
                <Image
                  src={data.logoDark[Object.keys(data.logoDark)[0]].url}
                  alt="TEMP karel logo alt message"
                  fill={true}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* socials mobile */}
              <div className="flex items-center gap-5 lg:hidden">
                {data.socials.map((social: SocialProps, index: number) => (
                  <FontAwesomeIcon icon={renderIcon(social.social)} className="text-neutrals-100 w-5 !h-5" />
                ))}
              </div>
            </div>

            <p className="p text-neutrals-200 mb-4 lg:mb-8 lg:text-16 lg:leading-26px">
              {data.footerBlock[0].content.footerinfoparagraph}
            </p>

            {/* socials desktop */}
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              {data.socials.map((social: SocialProps, index: number) => (
                <FontAwesomeIcon icon={renderIcon(social.social)} className="text-neutrals-100 w-6 h-6" />
              ))}
            </div>

            {/* contact mobile */}
            <div className="py-2 px-3 bg-neutrals-1200 inline-flex items-center gap-4 lg:hidden">
              <Link
                href={`tel:${data.phone}`}
                className="flex items-center gap-[6px] text-neutrals-100"
                target="_blank"
              >
                <FontAwesomeIcon icon={renderIcon("phone")} className="w-3 h-3" />
                <span className="text-16 leading-4 font-normal">{data.phone}</span>
              </Link>

              {/* divider */}
              <div className="w-px h-4 bg-neutrals-1100" />

              <Link
                href={`mailto:${data.email}`}
                className="flex items-center gap-[6px] text-neutrals-100"
              >
                <FontAwesomeIcon icon={renderIcon("envelope")} className="w-3 h-3" />
                <span className="text-16 leading-4 font-normal">{data.email}</span>
              </Link>
            </div>
          </div>



          {/* Links part */}
          <div className="py-9 flex items-start gap-2 border-b border-neutrals-1200 md:w-2/3 md:max-w-[320px] md:gap-8 md:py-0 md:border-none lg:max-w-[480px] min-[1280px]:max-w-[560px] xl:max-w-[624px]">

            {/* main links */}
            <div className="w-full">
              <div className="text-14 leading-14px font-light text-neutrals-200 mb-5 lg:text-20 lg:leading-26px lg:mb-6 lg:font-medium xl:text-24 xl:leading-30px">
                {data.footerBlock[0].content.footermainlinkstitle}
              </div>

              <div className="flex flex-col gap-[2px] text-neutrals-100 xl:gap-2">
                {data.footerBlock[0].content.footermainlinks.map((link: NavigationLinkProps, index: number) => (
                  <Link
                    key={index}
                    href={`/${link.page[0]}`}
                    className="w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                  >
                    {link.mainlink}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full">
              <div className="text-14 leading-14px font-light text-neutrals-200 mb-5 lg:text-20 lg:leading-26px lg:mb-6 lg:font-medium xl:text-24 xl:leading-30px">
                {data.footerBlock[0].content.footerservicestitle}
              </div>

              <div className="flex flex-col gap-[2px] text-neutrals-100 xl:gap-2">
                {data.footerBlock[0].content.footerservices.map((link: NavigationLinkProps, index: number) => (
                  <Link
                    key={index}
                    href={`/${link.page[0]}`}
                    className="w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                  >
                    {link.servicelink}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden w-full lg:block">
              <div className="text-14 leading-14px font-light text-neutrals-200 mb-5 lg:text-20 lg:leading-26px lg:mb-6 lg:font-medium xl:text-24 xl:leading-30px">
                Contact me
              </div>

              <div className="flex flex-col gap-[2px] text-neutrals-100 xl:gap-2">
                <Link
                  href={`mailto:${data.email}`}
                  className="w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light xl:text-18 xl:leading-6"
                  target="_blank"
                >
                  {data.email}
                </Link>

                <Link
                  href={`tel:${data.phone}`}
                  className="w-full text-20 leading-26px font-medium lg:text-16 lg:leading-6 lg:underline lg:font-light"
                  target="_blank"
                >
                  {data.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom part */}
        <div className="pt-4 flex justify-center items-center gap-[3px] font-light text-neutrals-100 text-16 leading-26px md:pt-6 lg:pt-8 xl:text-18 xl:leading-18px">
          <span className="whitespace-nowrap">©2023 Karel - All rights reserved  /</span>

          <Link
            href="privacy-policy"
            className="underline whitespace-nowrap"
          >
            Privacy policy
          </Link>
        </div>
      </Wrapper>
    </footer>
  )
}