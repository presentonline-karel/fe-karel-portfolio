// Next & React
import Link from "next/link";
import Image from "next/image";

// Components
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Types
import { ProjectProps } from "@/types/organisms/Project";
import { RelatedProjectsProps } from "@/types/sections/RelatedProjects";

// Utils
import { getKirbyFiles } from "@/utils/helper-functions";
import Project from "../organisms/Project";



export default function RelatedProjects({ data }: RelatedProjectsProps) {
  return (
    <section className="section">
      <Wrapper className="lg:flex lg:items-start lg:gap-8">

        {/* Heading */}
        <div className="mb-10 flex justify-between items-start lg:mb-0 lg:w-1/3 lg:flex-col lg:justify-start">
          <h2 className="h h2 lg:mb-10 lg:text-48 lg:leading-13 xl:text-56 xl:leading-15">
            Next project
          </h2>

          <Link
            href="/projects"
            className="btn btn-secondary py-3 px-4 text-16 leading-4 lg:px-9 lg:py-4 lg:text-20 lg:leading-5 lg:gap-3"
          >
            <span className="tracking-tight whitespace-nowrap">All projects</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3 lg:text-16 lg:leading-4 lg:w-[14px] lg:h-4" />
          </Link>
        </div>



        {/* Next projects */}
        <div className="flex items-stretch gap-6 lg:w-2/3">
          <Project {...Object.values(data.data)[0]} />

          <div className="hidden w-full sm:block">
            <Project {...Object.values(data.data)[1]} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}