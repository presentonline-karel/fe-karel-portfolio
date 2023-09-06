// Components
import HeroPrimary from "@/app/components/sections/HeroPrimary";
import HeroSecondary from "@/app/components/sections/HeroSecondary";
import Services from "@/app/components/sections/Services";
import Skills from "@/app/components/sections/Skills";
import Faq from "@/app/components/sections/Faq";
import Features from "@/app/components/sections/Features";
import Cta from "@/app/components/sections/Cta";
import Experiences from "@/app/components/sections/Experiences";



export function sectionRenderer(section: any, index: number) {
  switch (section.type) {
    case "heroPrimary":
      return <HeroPrimary key={index} data={section} />;
    case "heroSecondary":
      return <HeroSecondary key={index} data={section} />;
    case "services":
      return <Services key={index} data={section} />
    case "skills":
      return <Skills key={index} data={section} />
    case "faq":
      return <Faq key={index} data={section} />
    case "features":
      return <Features key={index} data={section} />
    case "cta":
      return <Cta key={index} data={section} />
    case "experiences":
      return <Experiences key={index} data={section} />
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}
