// Next & React
import Link from "next/link";
import Image from "next/image";

// Types
import { ProjectsProps } from "@/types/sections/Projects";

// Components
import Wrapper from "../helpers/Wrapper";
import { ProjectProps } from "@/types/organisms/Project";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default function Projects({ labelTags, tags, projects }: ProjectsProps) {
  console.log("projectProjects", Object.values(projects.data));

  return (
    <section className="pt-10 pb-[72px]">
      <Wrapper>

        {/* Heading */}
        <div>
          <div className="mb-4 tracking-tight text-16 leading-6 text-neutrals-1200">
            {labelTags}
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2">
            <button className="btn btn-primary whitespace-nowrap py-3 px-4 text-16 leading-4">
              {/* @ts-ignore */}
              {`All (${Object.keys(projects.data).length})`}
            </button>

            {/* divider */}
            <div className="block w-[1px] h-10 bg-neutrals-600" />

            <div className="flex items-center gap-1 flex-nowrap overflow-x-scroll overflow-y-hidden no-scrollbar">
              {tags.split(", ").map((tag: string, index: number) => (
                <button className="btn btn-secondary whitespace-nowrap py-3 px-4 text-16 leading-4 !border-neutrals-600">
                  {tag} (5)
                </button>
              ))}
            </div>
          </div>
        </div>



        <div className="flex flex-col gap-8">
          {/* @ts-ignore */}
          {Object.values(projects.data).map((project: ProjectProps, index: number) => (
            <Link
              // @ts-ignore
              href={project.slug}
              className="bg-neutrals-1200 flex flex-col justify-between w-full"
            >
              <div>

                {/* Project cover */}
                <div className="relative aspect-[3/2]">
                  <Image
                    // @ts-ignore
                    src={project.cover.url}
                    fill={true}
                    alt="Temp alt message"
                    className="object-cover"
                  />
                </div>

                {/* Project content */}
                <div className="py-6 px-5 relative lg:py-8 lg:px-6">
                  <div>
                    {/* @ts-ignore */}
                    {project.isprojectnew === "true" && (
                      <div className="label light shadow-btnPrimary absolute left-5 top-0 -translate-y-1/2">
                        New
                      </div>
                    )}

                    <h3 className="h h3 mb-1 text-neutrals-100 lg:text-24 lg:leading-30px">
                      {/* @ts-ignore */}
                      {project.longtitle}
                    </h3>

                    <p className="p text-neutrals-200 mb-3 lg:mb-4">
                      {/* @ts-ignore */}
                      {project.descriptioncard}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-1 flex-wrap mb-6 lg:mb-8">
                      {/* @ts-ignore */}
                      {project.tags.split(", ").map((tag: string, index: number) => (
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
          ))}
        </div>
      </Wrapper>
    </section>
  )
}