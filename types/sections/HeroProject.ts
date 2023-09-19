// Imported types
import { ImageProps } from "next/image";

export interface HeroProjectProps {
	period: string;
	shortTitle: string;
	description: string;
	urls: {
		liveurl: string;
		figmaurl: string;
		githuburl: string;
	};
	technologies: string;
	carouselImages: ImageProps[];
}
