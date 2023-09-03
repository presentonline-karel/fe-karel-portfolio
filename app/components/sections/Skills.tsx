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
            <div className="px-4 sm:px-12 md:flex md:gap-20 md:items-start lg:gap-[109px] lg:px-20 xl:max-w-8xl xl:mx-auto hd:border-x-[0.4px] hd:border-neutrals-400 hd:py-[120px]">

                {/* Image group */}
                <div className="hidden relative w-full aspect-[4/5] md:block xl:w-[515px]">
                    <Image
                        src={getKirbyFiles(data.content.skillsimage[0])}
                        alt="temp alt message"
                        fill={true}
                        className="object-cover border-[0.4px] border-neutrals-400 shadow-image z-10"
                    />

                    {/* Decorative rectangles */}
                    <div className="w-10 h-10 bg-prim-400 absolute z-0 -left-2 top-7 sm:w-20 sm:h-20 sm:-left-4 sm:top-14 sm:bg-prim-300 md:w-10 md:h-10 md:-left-2 md:top-7 lg:w-20 lg:h-20 lg:-left-4 lg:top-14" />
                    <div className="w-10 h-6 bg-prim-300 absolute z-20 -right-2 bottom-11 sm:w-20 sm:h-12 sm:-right-4 sm:bottom-[88px] sm:bg-prim-200 md:w-10 md:h-6 md:-right-2 md:bottom-14 lg:w-20 lg:h-12 lg:-right-4 lg:bottom-[88px]" />
                </div>

                {/* Text */}
                <div className="md:w-full xl:w-[656px]">

                    {/* Heading */}
                    <div className="mb-10">
                        <div className="label light">
                            {data.content.skillslabel}
                        </div>

                        <h2 className="h h2 lg:text-48 lg:leading-13 xl:text-56 xl:leading-15">
                            {data.content.skillstitle}
                        </h2>
                    </div>

                    {/* Architectures */}
                    <div className="Achitectures / flex flex-col gap-10 lg:gap-14">
                        {data.content.architectures.map((architecture: ArchitectureProps, index: number) => (
                            <Architecture {...architecture} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}