// Components
import HeroPrimary from "@/app/components/sections/HeroPrimary";
import Services from "@/app/components/sections/Services";
import Skills from "@/app/components/sections/Skills";



export function sectionRenderer(section: any, index: number) {
	switch (section.type) {
    case "heroPrimary":
      return <HeroPrimary key={index} data={section} />;
    case "services":
      return <Services key={index} data={section} />
    case "skills":
      return <Skills key={index} data={section} />
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}