// Types
import { ServicesProps } from "@/types/sections/Services";
import { ServiceProps } from "@/types/organisms/Service";

// Components
import Button from "../components/Button";
import Service from "../components/Service";



export default function Services({ data }: ServicesProps) {
  return (
    <div className="section bg-neutrals-1300">
      <div className="Container / px-4 sm:px-12 lg:px-20 xl:max-w-8xl xl:mx-auto hd:py-[120px] hd:border-x-[0.4px] hd:border-neutrals-1200">

        {/* Heading */}
        <div className="flex flex-col items-center gap-2 mb-10 sm:mb-12 lg:gap-3 lg:mb-[72px]">
          <div className="label dark !mb-0 inline w-auto">
            {data.content.serviceslabel}
          </div>

          <h2 className="h h2 text-neutrals-100">
            {data.content.servicestitle}
          </h2>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-6 xl:gap-8">
          {data.content.services.map((service: ServiceProps, index: number) => (
            <Service {...service} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}