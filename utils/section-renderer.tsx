// Components
import HeroPrimary from "@/app/components/sections/HeroPrimary";

export function sectionRenderer(section: any, index: number) {
	switch (section.type) {
    case "heroPrimary":
      console.log("heroPrimary Works!!!")
      return <HeroPrimary key={index} data={section} />;
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}
