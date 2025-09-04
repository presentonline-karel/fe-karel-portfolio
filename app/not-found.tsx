// Next & React
import Link from "next/link";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGears } from "@fortawesome/free-solid-svg-icons";

// Components
import Wrapper from "./components/helpers/Wrapper";

// Utils
import { fetcher } from "@/utils/fetcher";



export default async function PostNotFound() {
  return (
    <div className="py-[72px] h-screen flex items-center sm:h-auto sm:pt-[157px] lg:pt-[221px] lg:pb-[120px] xl:pt-0 hd:py-0">
      <Wrapper className="mx-auto flex flex-col justify-center xl:!pt-[257px] xl:w-[1440px] xl:min-h-[calc(100vh-466px)] hd:pb-[136px] hd:pt-[272px]">

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
            Ooopps. It seems this page does not exist!
          </p>

          <Link
            href="/"
            className="btn btn-primary a11y-focus"
          >
            <span className="whitespace-nowrap">Home</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-14 leading-14px text-neutrals-1400 w-[14px] h-[14px] lg:text-16 lg:leading-4 lg:h-4" />
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}