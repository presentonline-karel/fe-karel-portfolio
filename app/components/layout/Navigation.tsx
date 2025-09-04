"use client";

// Next & React
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Classnames
import cx from "classnames";

// Utils
import { fetcher } from "@/utils/fetcher";
import { getKirbyFiles } from "@/utils/helper-functions";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ProgressBar from "../components/ProgressBar";



export default function Navigation() {

  // States
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSmall, setMenuSmall] = useState(false);

  // Hooks
  const pathname = usePathname();



  // Adjust menu when scrolled
  if (typeof window !== "undefined") {
    window.addEventListener('scroll', () => {
      if (scrollY >= 36) {
        setMenuSmall(true);
      } else {
        setMenuSmall(false);
      }
    });
  }



  // Disbale body scrolling when menuOpen
  useEffect(() => {
    menuOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
  }, [menuOpen]);



  return (
    <nav className={cx("border-b-[0.4px] border-neutrals-300 fixed top-0 left-0 w-screen bg-neutrals-100 z-40", {
      "shadow-card border-neutrals-400": menuSmall === true,
    })}>
      <div className={cx("px-4 py-5 sm:px-12 lg:px-20 lg:py-6 xl:max-w-8xl xl:mx-auto")}>

        {/* Top */}
        <div className="flex justify-between items-center">

          {/* logo */}
          <Link href="/" className="a11y-focus relative w-[120px] h-11 xl:w-[154px] xl:h-14">
            <Image
              src={getKirbyFiles("site/logo-light.png")}
              alt="Logo Karel Decoene portfolio website"
              fill={true}
              sizes="(max-width: 1439px) 30vw, 11vw"
              className="object-contain"
            />
          </Link>



          {/* links */}
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-8 lg:pt-1 xl:gap-10">
            <Link
              href="/"
              className={cx("a11y-focus text-neutrals-1300 border-b-2 border-neutrals-100 font-medium hover:border-prim-400", {
                "!border-prim-700": pathname === "/" || pathname === "/home",
              })}
            >
              <span className="text-20 leading-26px tracking-tight xl:text-24 xl:leading-30px">Home</span>
            </Link>

            <Link
              href="/projects"
              className={cx("a11y-focus text-neutrals-1300 border-b-2 border-neutrals-100 font-medium hover:border-prim-400", {
                "!border-prim-700": pathname === "/projects",
              })}
            >
              <span className="text-20 leading-26px tracking-tight xl:text-24 xl:leading-30px">Projects</span>
            </Link>

            <Link
              href="/blog"
              className={cx("a11y-focus text-neutrals-1300 border-b-2 border-neutrals-100 font-medium hover:border-prim-400", {
                "!border-prim-700": pathname === "/blog",
              })}
            >
              <span className="text-20 leading-26px tracking-tight xl:text-24 xl:leading-30px">Blog</span>
            </Link>

            <Link
              href="/about"
              className={cx("a11y-focus text-neutrals-1300 border-b-2 border-neutrals-100 font-medium hover:border-prim-400", {
                "!border-prim-700": pathname === "/about",
              })}
            >
              <span className="text-20 leading-26px tracking-tight xl:text-24 xl:leading-30px">About</span>
            </Link>

            <Link
              href="/contact"
              className={cx("a11y-focus text-neutrals-1300 border-b-2 border-neutrals-100 font-medium hover:border-prim-400", {
                "!border-prim-700": pathname === "/contact",
              })}
            >
              <span className="text-20 leading-26px tracking-tight xl:text-24 xl:leading-30px">Contact</span>
            </Link>
          </div>



          {/* email */}
          <Link
            href="mailto:hi@karrel.dev"
            className="a11y-focus hidden tracking-tight text-18 leading-6 text-neutrals-1300 border-b-2 border-neutrals-900 cursor-pointer hover:border-prim-700 lg:block xl:text-20 xl:leading-26px"
          >
            hi@karrel.dev
          </Link>



          {/* Hamburger */}
          <div
            onClick={() => setMenuOpen(true)}
            className="py-2 lg:hidden"
          >
            <div className="relative w-6 h-2">
              <Image
                src="/Hamburger-menu.png"
                alt="Hamburger icon to open slide menu"
                fill={true}
                sizes="5vw"
                className=""
              />
            </div>
          </div>
        </div>



        {/* Sliding nav */}
        <div
          onClick={() => setMenuOpen(false)}
          className={cx("fixed top-0 right-0 w-screen h-screen translate-x-full z-50 bg-neutrals-1000 bg-opacity-70 lg:hidden", {
            "!translate-x-0": menuOpen === true,
          })}>
          <div className={cx("ml-auto w-[283px] h-full bg-neutrals-1300 py-5 px-4 flex flex-col justify-between border-l-[0.4px] border-neutrals-1100 sm:w-[400px] sm:px-12")}>
            <div className="">

              {/* top */}
              <div className="flex justify-between items-center mb-5 tall:mb-12 md:mb-8">
                <Link
                  href="/"
                  className="a11y-focus relative w-[120px] h-11"
                >
                  <Image
                    src={getKirbyFiles("site/logo-dark.png")}
                    alt="Logo Karel Decoene portfolio website"
                    fill={true}
                    sizes="(max-width: 1439px) 30vw, 0vw"
                    className="object-contain"
                  />
                </Link>

                <div onClick={() => setMenuOpen(false)} className="relative w-[18.5px] h-[18.5px]">
                  <Image
                    src="/Menu-cross.png"
                    alt="Cross icon to close slide menu"
                    fill={true}
                    sizes="5vw"
                    className=""
                  />
                </div>
              </div>



              {/* links */}
              <div className="flex flex-col gap-4 mb-8 tall:mb-10 tall:gap-6 md:gap-4 md:mb-8">
                <div className="p-4 border-[0.4px] border-neutrals-1100 bg-neutrals-1200">

                  {/* label */}
                  <div className="mb-5 text-14 leading-14px text-neutrals-300 tracking-tight hidden tall:block">
                    Main links
                  </div>

                  {/* links */}
                  <div className="flex flex-col gap-[2px]">
                    <Link
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className={cx("a11y-focus flex items-center gap-2 text-neutrals-100", {
                        "text-prim-500": pathname === "/" || pathname === "/home",
                      })}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("w-[14px] h-4 hidden", {
                          "!block": pathname === "/" || pathname === "/home",
                        })}
                      />
                      <span className="text-24 leading-30px tracking-tight">Home</span>
                    </Link>

                    <Link
                      href="/projects"
                      onClick={() => setMenuOpen(false)}
                      className={cx("a11y-focus flex items-center gap-2 text-neutrals-100", {
                        "text-prim-500": pathname === "/projects",
                      })}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("w-[14px] h-4 hidden", {
                          "!block": pathname === "/projects"
                        })}
                      />
                      <span className="text-24 leading-30px tracking-tight">Projects</span>
                    </Link>

                    <Link
                      href="/blog"
                      onClick={() => setMenuOpen(false)}
                      className={cx("a11y-focus flex items-center gap-2 text-neutrals-100", {
                        "text-prim-500": pathname === "/blog",
                      })}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("w-[14px] h-4 hidden", {
                          "!block": pathname === "/blog"
                        })}
                      />
                      <span className="text-24 leading-30px tracking-tight">Blog</span>
                    </Link>

                    <Link
                      href="/about"
                      onClick={() => setMenuOpen(false)}
                      className={cx("a11y-focus flex items-center gap-2 text-neutrals-100", {
                        "text-prim-500": pathname === "/about",
                      })}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("w-[14px] h-4 hidden", {
                          "!block": pathname === "/about"
                        })}
                      />
                      <span className="text-24 leading-30px tracking-tight">About</span>
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={cx("a11y-focus flex items-center gap-2 text-neutrals-100", {
                        "text-prim-500": pathname === "/contact",
                      })}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("w-[14px] h-4 hidden", {
                          "!block": pathname === "/contact"
                        })}
                      />
                      <span className="text-24 leading-30px tracking-tight">Contact</span>
                    </Link>
                  </div>
                </div>



                <div className="p-4 border-[0.4px] border-neutrals-1100 bg-neutrals-1200">

                  {/* label */}
                  <div className="mb-5 text-14 leading-14px text-neutrals-300 tracking-tight">
                    Services
                  </div>

                  {/* links */}
                  <div className="flex flex-col gap-[2px]">
                    <Link
                      href="/web-development-project"
                      onClick={() => setMenuOpen(false)}
                      className={cx("a11y-focus flex items-center gap-2 text-neutrals-100", {
                        "text-prim-500": pathname === "/web-development-project" || pathname === "/web-development-freelance",
                      })}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("w-[14px] h-4 hidden", {
                          "!block": pathname === "/web-development-project" || pathname === "/web-development-freelance",
                        })}
                      />
                      <span className="text-24 leading-30px tracking-tight">Web development</span>
                    </Link>

                    <Link
                      href="/web-design-project"
                      onClick={() => setMenuOpen(false)}
                      className={cx("a11y-focusflex items-center gap-2 text-neutrals-100", {
                        "text-prim-500": pathname === "/web-design-project" || pathname === "/web-design-freelance",
                      })}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("w-[14px] h-4 hidden", {
                          "!block": pathname === "/web-design-project" || pathname === "/web-design-freelance",
                        })}
                      />
                      <span className="text-24 leading-30px tracking-tight">Web design</span>
                    </Link>

                    <Link
                      href="/playground"
                      onClick={() => setMenuOpen(false)}
                      className={cx("a11y-focus flex items-center gap-2 text-neutrals-100", {
                        "text-prim-500": pathname === "/playground",
                      })}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx("w-[14px] h-4 hidden", {
                          "!block": pathname === "/playground"
                        })}
                      />
                      <span className="text-24 leading-30px tracking-tight">Playground</span>
                    </Link>
                  </div>
                </div>
              </div>



              {/* contact */}
              <div>

                {/* label */}
                <div className="mb-3 text-14 leading-14px text-neutrals-300 tracking-tight tall:mb-5 md:mb-4">
                  Contact me
                </div>


                <div className="flex flex-col gap-1 mb-6 tall:mb-10 md:mb-8">
                  <Link
                    href="mailto:hi@karrel.dev"
                    className="a11y-focus text-20 leading-26px tall:text-24 tall:leading-30px tracking-tight underline block font-normal text-neutrals-100"
                  >
                    hi@karrel.dev
                  </Link>

                  <Link
                    href="tel:+32476280902"
                    className="a11y-focus text-20 leading-26px tall:text-24 tall:leading-30px tracking-tight underline block font-normal text-neutrals-100"
                  >
                    +32 476 28 09 02
                  </Link>
                </div>



                {/* socials */}
                <div className="items-center gap-5 hidden tall:flex">
                  <Link
                    href="https://www.linkedin.com/in/karel-decoene-395478187/"
                    target="_blank"
                    aria-label="LinkedIn Karel Decoene"
                    className="a11y-focus"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="w-[18px] h-5 text-neutrals-100" />
                  </Link>
                </div>
              </div>
            </div>



            <div className="flex justify-center items-center font-light text-neutrals-100">
              ©2023 Karel - All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <ProgressBar />
    </nav>
  )
}