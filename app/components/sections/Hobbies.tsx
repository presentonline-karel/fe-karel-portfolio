// Types
import { HobbiesProps } from "@/types/sections/Hobbies";
import { HobbyProps } from "@/types/organisms/Hobby";

// Components
import Wrapper from "../helpers/Wrapper";

// Utils
import { renderIcon } from "@/utils/render-icon";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Hobbies({ data }: HobbiesProps) {
  return (!data.isHidden && (
    <section id="hobbies" className="section sm:hidden">
      <Wrapper>

        {/* Heading */}
        <div className="mb-10">
          <div className="label light">
            {data.content.hobbieslabel}
          </div>

          <h2 className="h h2">
            {data.content.hobbiestitle}
          </h2>
        </div>

        {/* Hobbies */}
        <div className="flex flex-col gap-3">
          {data.content.hobbies.map((hobby: HobbyProps, index: number) => (
            <div key={index} className="flex items-center gap-3 p-2 bg-neutrals-200 border-[0.4px] border-neutrals-300">
              <div className="w-10 h-10 bg-neutrals-1300 flex justify-center items-center">
                <FontAwesomeIcon icon={renderIcon(hobby.icon)} className="text-18 leading-18px w-[18px] h-[18px] text-prim-600" />
              </div>

              <div className="text-24 leading-30px text-neutrals-1300 tracking-tight">
                {hobby.title}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  ))
}