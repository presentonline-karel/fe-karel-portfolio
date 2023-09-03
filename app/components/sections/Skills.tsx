// Next & React
import Image from "next/image";

// Types
import { SkillsProps } from "@/types/sections/Skills";
import { ArchitectureProps } from "@/types/organisms/Architecture";

// Components
import Architecture from "../components/Architecture";

// Utils
import getKirbyFiles from "@/utils/helper-functions";



export default function Skills({ data }: SkillsProps) {
  return (
    <div className="section bg-neutrals-200">
      <div className="Container px-4">

        {/* Image group */}
        <div className="hidden relative w-full aspect-square">
          <Image
            src={getKirbyFiles(data.content.skillsimage[0])}
            alt="temp alt message"
            fill={true}
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="">

          {/* Heading */}
          <div className="mb-10">
            <div className="label light">
              {data.content.skillslabel}
            </div>

            <h2 className="h h2">
              {data.content.skillstitle}
            </h2>
          </div>

          {/* Architectures */}
          <div className="Achitectures / flex flex-col gap-10">
            {data.content.architectures.map((architecture: ArchitectureProps, index: number) => (
              <Architecture {...architecture} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}