// Next & React
import Link from "next/link";

// Types
import { ServiceProps } from "@/types/organisms/Service";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default function Service(service: ServiceProps) {
  console.log("service", service);

  return (
    <div className={`p-6 border-[0.4px] border-neutrals-1100 w-full ${service.ishighlighted === "true" ? "bg-neutrals-1200" : ""}`}>
      <h3 className="h h3 text-neutrals-100 mb-3 lg:text-32 lg:leading-38px lg:mb-4">
        {service.title}
      </h3>

      <p className="p text-neutrals-200 mb-5 lg:mb-8">
        {service.paragraph}
      </p>

      <Link 
        href={`/${service.destination[0]}`}
        className="btn btn-primary py-3 px-4 w-auto text-16 leading-4 lg:py-4 lg:px-7 lg:text-18 lg:leading-18px"
      >
        <span>More info</span>
        <FontAwesomeIcon icon={faArrowRight} className="text-14 leading-14px text-neutrals-1400 w-[14px] h-[14px]" />
      </Link>
    </div>
  )
}