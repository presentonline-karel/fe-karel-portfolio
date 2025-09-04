"use client";

// Next & React
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Classnames
import cx from "classnames";



export default function BlogFooter() {

  // States
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");



  // Copy link functionality
  const base = "https://karrel.dev";
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
  }, []);



  return (
    <div className="border-t border-neutrals-400 pt-6 flex justify-between items-center w-full md:max-w-[842px] md:mx-auto lg:pt-8">
      <div className="text-16 leading-6 tracking-tight text-neutrals-1200 lg:text-18 lg:leading-6">
        Share this article
      </div>

      <div className="flex items-center gap-5 lg:gap-6">
        <button onClick={copylink} className="a11y-focus">
          <FontAwesomeIcon icon={faChain} className="w-5 !h-5 text-neutrals-1300 lg:w-6 lg:!h-6" />
        </button>

        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=http://karrel.be`}
          target="_blank"
          className="a11y-focus"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="w-[18px] !h-5 text-neutrals-1300 lg:w-[21px] lg:!h-6" />
        </Link>

        <Link
          href={`https://wa.me/?text=${shareUrl}`}
          target="_blank"
          rel="noreferrer"
          className="a11y-focus"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-5 !h-5 text-neutrals-1300 lg:w-6 lg:!h-6" />
        </Link>
      </div>

      {/* Link copied message */}
      <div className={cx("a11y-focus fixed hidden bg-success-100 text-success-500 bottom-8 left-4 w-[calc(100vw-32px)] items-center gap-2 py-2 px-4 z-20 border border-success-300 shadow-card sm:w-[calc(100vw-96px)] sm:left-12 sm:bottom-12 sm:py-4 sm:px-6 sm:gap-3 md:max-w-[842px] md:mx-auto md:left-auto", {
        "!flex": showLinkCopied === true,
      })}>
        <FontAwesomeIcon icon={faCheck} className="text-16 leading-4 w-4 !h-4 sm:text-20 sm:leading-5 sm:w-5 sm:!h-5" />
        <span className="tracking-tight text-16 leading-6 sm:text-20 sm:leading-26px">Link copied</span>
      </div>
    </div>
  )
}