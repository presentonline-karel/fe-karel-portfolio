// Types
import { HeroProjectProps } from "@/types/sections/HeroProject";

// Components
import Wrapper from "../helpers/Wrapper";



export default function HeroProject({ period, shortTitle, description, urls, technologies, carouselImages }: HeroProjectProps) {
  console.log("period", period);
  console.log("shortTitle", shortTitle);
  console.log("description", description);
  console.log("urls", urls);
  console.log("technologies", technologies);
  console.log("carouselImages", carouselImages);
  
  return (
    <section className="section">
      <Wrapper className="">

        {/* Text */}
        <div>

        </div>
      </Wrapper>
    </section>
  )
}