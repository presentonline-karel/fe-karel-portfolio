// Next & React
import Link from "next/link";

// Types
import { ArchitectureProps } from "@/types/organisms/Architecture";
import { ArchitectureProjectProps } from "@/types/organisms/ArchitectureProject";

// Utils
import { getPage } from "@/utils/helper-functions";



export default function Architecture(architecture: ArchitectureProps) {
  return (
    <div>
      <h3 className="h h3 mb-3 lg:text-32 lg:leading-38px">
        {architecture.title}
      </h3>

      {/* Technologies */}
      <div className="flex flex-wrap items-center gap-1 mb-6">
        {architecture.technologies.split(", ").map((technology: string, index: number) => (
          <div
            key={index}
            className="label dark !mb-0"
          >
            {technology}
          </div>
        ))}
      </div>

      <div
        className="p mb-5 lg:mb-6"
        dangerouslySetInnerHTML={{ __html: architecture.paragraph }}
      />

      {/* Projects */}
      <div className="flex items-center gap-5 flex-wrap">
        {architecture.projects.map((project: ArchitectureProjectProps, index: number) => (
          <>
            <Link
              href={`/${project.project[0]}`}
              className="underline text-18 leading-6 font-normal text-neutrals-1300 whitespace-nowrap lg:text-20 lg:leading-26px"
              key={index}
            >
              {project.anchor}
            </Link>

            <div className="w-px h-[18px] bg-neutrals-1100 last:hidden lg:w-[2px]" />
          </>
        ))}
      </div>
    </div>
  )
}