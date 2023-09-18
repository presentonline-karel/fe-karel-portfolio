// Imported types
import { ImageProps } from "next/image";

export interface HeroProjectProps {
    period: string;
    shortTitle: string;
    description: string;
    urls: {
        url: string;
    }
    technologies: string;
    carouselImages: ImageProps[];
}