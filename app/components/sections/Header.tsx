// Types
import { HeaderProps } from "@/types/sections/Header";

// Components
import Wrapper from "../helpers/Wrapper";



export default function Header({ data }: HeaderProps) {
  return (!data.isHidden && (
    <section id="header" className="pt-[157px] hd:pt-0">
      <Wrapper className="hd:pb-0">
        <h1 className="h h1 max-w-[547px] lg:text-56 lg:leading-15 xl:text-64 xl:leading-[68px]">
          {data.content.headertitle}
        </h1>

        <p className="p max-w-[547px]">
          {data.content.headerparagraph}
        </p>
      </Wrapper>
    </section>
  ))
}