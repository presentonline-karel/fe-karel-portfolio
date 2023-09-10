// Components
import HeroPrimary from "@/app/components/sections/HeroPrimary";
import HeroSecondary from "@/app/components/sections/HeroSecondary";
import Services from "@/app/components/sections/Services";
import Skills from "@/app/components/sections/Skills";
import Faq from "@/app/components/sections/Faq";
import Features from "@/app/components/sections/Features";
import Cta from "@/app/components/sections/Cta";
import Experiences from "@/app/components/sections/Experiences";
import Process from "@/app/components/sections/Process";
import Testimonials from "@/app/components/sections/Testimonials";
import Header from "@/app/components/sections/Header";
import Education from "@/app/components/sections/Education";
import Hobbies from "@/app/components/sections/Hobbies";
import HeroService from "@/app/components/sections/HeroService";
import HighlightedProjects from "@/app/components/sections/HighlightedProjects";
import HighlightedBlogs from "@/app/components/sections/HighlightedBlogs";
import TextWithImage from "@/app/components/sections/TextWithImage";



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
    case "process":
      return <Process key={index} data={section} />
    case "testimonials":
      return <Testimonials key={index} data={section} />
    case "header":
      return <Header key={index} data={section} />
    case "education":
      return <Education key={index} data={section} />
    case "hobbies":
      return <Hobbies key={index} data={section} />
    case "heroService":
      return <HeroService key={index} data={section} />
    case "highlightedProjects":
      return <HighlightedProjects key={index} data={section} />
    case "highlightedBlogs":
      return <HighlightedBlogs key={index} data={section} />
    case "textWithImage":
      return <TextWithImage key={index} data={section} />
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}