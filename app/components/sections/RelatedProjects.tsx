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
            href="projects"
            className="btn btn-secondary py-3 px-4 text-16 leading-4 lg:px-9 lg:py-4 lg:text-20 lg:leading-5 lg:gap-3"
          >
            <span className="tracking-tight whitespace-nowrap">All projects</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3 lg:text-16 lg:leading-4 lg:w-[14px] lg:h-4" />
          </Link>
        </div>



        {/* Next projects */}
        <div className="flex items-stretch gap-6 lg:w-2/3">

          {/* project 1 */}
          <Link
            // @ts-ignore
            href={data.data[Object.keys(data.data)[0]].slug}
            className="bg-neutrals-1200 flex flex-col justify-between w-full"
          >
            <div>

              {/* Project cover */}
              <div className="relative aspect-[3/2]">
                <Image
                  // @ts-ignore
                  src={data.data[Object.keys(data.data)[0]].cover.url}
                  fill={true}
                  alt="Temp alt message"
                  className="object-cover"
                />
              </div>

              {/* Project content */}
              <div className="py-6 px-5 relative lg:py-8 lg:px-6">
                <div>
                  {/* @ts-ignore */}
                  {data.data[Object.keys(data.data)[0]].isprojectnew === "true" && (
                    <div className="label light shadow-btnPrimary absolute left-5 top-0 -translate-y-1/2">
                      New
                    </div>
                  )}

                  <h3 className="h h3 mb-1 text-neutrals-100 lg:text-24 lg:leading-30px">
                    {/* @ts-ignore */}
                    {data.data[Object.keys(data.data)[0]].longtitle}
                  </h3>

                  <p className="p text-neutrals-200 mb-3 lg:mb-4">
                    {/* @ts-ignore */}
                    {data.data[Object.keys(data.data)[0]].descriptioncard}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-1 flex-wrap mb-6 lg:mb-8">
                    {/* @ts-ignore */}
                    {data.data[Object.keys(data.data)[0]].tags.split(", ").map((tag: string, index: number) => (
                      <div
                        key={index}
                        className="label dark !mb-0"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary !text-16 !leading-4 !px-4 !py-3 !inline-flex !w-min !relative bottom-6 left-5 lg:left-6 lg:bottom-8"
            >
              <span className="tracking-tight whitespace-nowrap">Discover project</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3" />
            </button>
          </Link>



          {/* project 2 */}
          <Link
            // @ts-ignore
            href={data.data[Object.keys(data.data)[1]].slug}
            className="bg-neutrals-1200 flex-col justify-between w-full hidden sm:flex"
          >
            <div>

              {/* Project cover */}
              <div className="relative aspect-[3/2]">
                <Image
                  // @ts-ignore
                  src={data.data[Object.keys(data.data)[1]].cover.url}
                  fill={true}
                  alt="Temp alt message"
                  className="object-cover"
                />
              </div>

              {/* Project content */}
              <div className="py-6 px-5 relative lg:py-8 lg:px-6">
                <div>
                  {/* @ts-ignore */}
                  {data.data[Object.keys(data.data)[1]].isprojectnew === "true" && (
                    <div className="label light shadow-btnPrimary absolute left-5 top-0 -translate-y-1/2">
                      New
                    </div>
                  )}

                  <h3 className="h h3 mb-1 text-neutrals-100 lg:text-24 lg:leading-30px">
                    {/* @ts-ignore */}
                    {data.data[Object.keys(data.data)[1]].longtitle}
                  </h3>

                  <p className="p text-neutrals-200 mb-3 lg:mb-4">
                    {/* @ts-ignore */}
                    {data.data[Object.keys(data.data)[1]].descriptioncard}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-1 flex-wrap mb-6 lg:mb-8">
                    {/* @ts-ignore */}
                    {data.data[Object.keys(data.data)[1]].tags.split(", ").map((tag: string, index: number) => (
                      <div
                        key={index}
                        className="label dark !mb-0"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary !text-16 !leading-4 !px-4 !py-3 !inline-flex !w-min !relative bottom-6 left-5 lg:left-6 lg:bottom-8"
            >
              <span className="tracking-tight whitespace-nowrap">Discover project</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-12 leading-3 w-[11px] h-3" />
            </button>
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}