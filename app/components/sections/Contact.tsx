// Next & React
import Link from "next/link";

// Types
import { ContactProps } from "@/types/sections/Contact";
import { SocialProps } from "@/types/organisms/Social";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderIcon } from "@/utils/render-icon";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// ClassNames
import cx from "classnames";



export default function Contact({ data }: ContactProps) {
  return (!data.isHidden && (
    <section id="contact" className={cx("section bg-neutrals-1300 lg:py-[100px] xl:py-0", {
      "xl:bg-neutrals-200": data.content.bgcolor === "grey",
      "xl:bg-neutrals-100": data.content.bgcolor === "white",
    })}>
      <div className={cx("xl:max-w-8xl xl:mx-auto xl:py-[100px] hd:border-x-[0.4px]", {
        "hd:border-neutrals-400": data.content.bgcolor === "grey",
        "hd:border-neutrals-300": data.content.bgcolor === "white",
      })}>
        <Wrapper className="md:flex md:items-start md:gap-20 lg:gap-[109px] xl:max-w-[1280px] xl:px-[109px] xl:bg-neutrals-1300 xl:py-[100px] hd:!py-[100px]">

          {/* Text */}
          <div className="mb-10 w-full xl:w-[438px]">
            <div className="label dark">
              {data.content.contactlabel}
            </div>

            <h2 className="h h2 text-neutrals-100 mb-4 lg:mb-6">
              {data.content.contacttitle}
            </h2>

            <p className="p text-neutrals-200 mb-6 lg:mb-10">
              {data.content.contactparagraph}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-5 mb-12 md:mb-0 lg:gap-6">
              {data.content.socials.map((social: SocialProps, index: number) => (
                <Link
                  href={social.url}
                  className="w-5 h-5 flex justify-center items-center lg:w-6 lg:h-6"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={renderIcon(social.social)} className="text-20 leading-5 w-5 h-5 text-neutrals-100 lg:text-24 lg:leading-6 lg:w-6 lg:h-6" />
                </Link>
              ))}
            </div>
          </div>



          {/* Form */}
          <form className="w-full xl:w-[515px]">

            {/* Inputs */}
            <div className="flex flex-col gap-5 mb-6 lg:gap-7 lg:mb-8">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="text-14 leading-14px text-neutrals-200 mb-2 block w-full lg:text-16 lg:leading-4 lg:mb-3"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="block py-3 px-4 bg-neutrals-1100 text-neutrals-100 border-none text-16 leading-6 w-full focus:border-none focus:outline-none focus:outline-0 focus-visible:outline-none lg:text-20 lg:leading-26px lg:px-6 lg:py-4"
                  type="text"
                  name="name"
                />
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="text-14 leading-14px text-neutrals-200 mb-2 block w-full lg:text-16 lg:leading-4 lg:mb-3"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="block py-3 px-4 bg-neutrals-1100 text-neutrals-100 border-none text-16 leading-6 w-full focus:border-none focus:outline-none focus:outline-0 focus-visible:outline-none lg:text-20 lg:leading-26px lg:px-6 lg:py-4"
                  type="email"
                  name="email"
                />
              </div>

              <div className="">
                <label
                  htmlFor="subject"
                  className="text-14 leading-14px text-neutrals-200 mb-2 block w-full lg:text-16 lg:leading-4 lg:mb-3"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  className="block py-3 px-4 bg-neutrals-1100 text-neutrals-100 border-none text-16 leading-6 w-full focus:border-none focus:outline-none focus:outline-0 focus-visible:outline-none lg:text-20 lg:leading-26px lg:px-6 lg:py-4"
                  type="text"
                  name="subject"
                />
              </div>

              <div className="">
                <label
                  htmlFor="message"
                  className="text-14 leading-14px text-neutrals-200 mb-2 block w-full lg:text-16 lg:leading-4 lg:mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="resize-none block h-[200px] py-3 px-4 bg-neutrals-1100 text-neutrals-100 border-none text-16 leading-6 w-full focus:border-none focus:outline-none focus:outline-0 focus-visible:outline-none lg:text-20 lg:leading-26px lg:px-6 lg:py-4"
                  name="message"
                />
              </div>
            </div>

            <button
              id="submit"
              name="submit"
              type="submit"
              className="btn btn-primary"
            >
              <span className="tracking-tight whitespace-nowrap">Send message</span>
              <FontAwesomeIcon icon={faPaperPlane} className="text-14 leading-14px text-neutrals-1400 w-[14px] h-[14px] lg:text-16 lg:leading-4 lg:h-4" />
            </button>
          </form>
        </Wrapper>
      </div>
    </section>
  ))
}