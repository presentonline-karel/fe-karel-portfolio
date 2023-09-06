// Types
import { ExperiencesProps } from "@/types/sections/Experiences";

// Components
import Wrapper from "../helpers/Wrapper";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderIcon } from "@/utils/render-icon";



export default function Experiences({ data }: ExperiencesProps) {
  return (
    <section className="section bg-neutrals-1300 xl:py-0 xl:bg-neutrals-100">
      <div className="xl:max-w-8xl xl:mx-auto xl:py-[100px] hd:border-x-[0.4px] hd:border-neutrals-300">
        <Wrapper className="xl:max-w-[1280px] xl:px-[109px] xl:bg-neutrals-1300 xl:py-[100px] hd:py-[100px]">

          {/* Heading */}
          <div>
            <div className="label dark">
              What I do
            </div>

            <h2 className="h h2 text-neutrals-100">
              Working experience
            </h2>
          </div>

          {/* Experiences */}
          <div className="Experiences /">
             
             {/* Tabs */}
             <div>

             </div>

             {/* Experience */}
             <div>

             </div>
          </div>

          {/* CTA */}
          <div className="">
            <h3 className="h h3 text-neutrals-100">
              Find out what skills I acquired in these jobs
            </h3>

            <Button button={data.content.ctabutton[0]} />
          </div>
        </Wrapper>
      </div>
    </section>
  )
}