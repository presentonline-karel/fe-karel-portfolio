// Types
import { EducationProps } from "@/types/sections/Education";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";



export default function Education({ data }: EducationProps) {
  return (!data.isHidden && (
    <section className="section">
      <Wrapper>

        {/* Text */}
        <div className="">

          {/* Heading */}
          <div className="mb-10">
            <div className="label light">
              Education
            </div>

            <h2 className="h h2">
              What did I study?
            </h2>
          </div>



          {/* Education card */}
          <div className="py-8 px-6 bg-neutrals-100 border-[0.4px] border-neutrals-400 shadow-card">

            {/* Icon */}
            <div className="w-[52px] h-[52px] flex justify-center items-center border border-prim-300 bg-prim-200 mb-6">
              <FontAwesomeIcon icon={faGraduationCap} className="text-24 leading-6 h-6 w-6 text-neutrals-1300" />
            </div>

            <h5 className="h h5">
              Multimedia & Creative technology
              @ KdG Hogeschool Hoboken
            </h5>

            {/* Period */}
            <div className="inline-flex items-center gap-3 py-1 px-2 bg-neutrals-1300 mb-5 lg:py-[6px] lg:px-3">
              <div className="text-14 leading-14px text-neutrals-200 lg:text-16 lg:leading-4">
                Oct '20'
              </div>

              {/* divider */}
              <div className="w-[14px] h-px bg-neutrals-1100" />

              <div className="text-14 leading-14px text-neutrals-200 lg:text-16 lg:leading-4">
                Current
              </div>
            </div>

            <p className="p">
              Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.
            </p>

            {/* Tags */}
            <div className="flex items-center gap-1 flex-wrap">
              <div className="label dark !mb-0">UX</div>
              <div className="label dark !mb-0">UI</div>
              <div className="label dark !mb-0">Web development</div>
              <div className="label dark !mb-0">Front-end development</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  ))
}