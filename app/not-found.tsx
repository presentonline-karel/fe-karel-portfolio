// Next & React
import Link from "next/link";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGears } from "@fortawesome/free-solid-svg-icons";

// Components
import Wrapper from "./components/helpers/Wrapper";



export default function PostNotFound() {
  return (
    <div className="py-[72px] h-[calc(100vh-84px)] flex items-center md:h-auto md:py-[136px] hd:py-0">
      <Wrapper className="mx-auto xl:w-[1440px] hd:py-[136px]">

        {/* Icon-Container */}
        <div className="mx-auto w-[112px] h-[112px] flex justify-center items-center bg-prim-100 mb-16 lg:w-[148px] lg:h-[148px] lg:mb-[72px]">
          <FontAwesomeIcon icon={faGears} className="text-56 leading-15 w-[70px] h-[70px] text-prim-700 lg:text-[100px] lg:leading-[100px] lg:w-[100px] lg:h-[100px]" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center sm:max-w-[624px] sm:mx-auto">
          <h1 className="h h1 text-center lg:mb-6">
            Page not found
          </h1>
          
          <p className="p mb-6 text-center lg:mb-10">
            Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.
          </p>

          <Link
            href="/"
            className="btn btn-primary"
          >
            <span className="whitespace-nowrap">Go to home</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-14 leading-14px text-neutrals-1400 w-[14px] h-[14px] lg:text-16 lg:leading-4 lg:h-4" />
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}