// Imported types
import { ImageProps } from "../components/Image";

export interface ProjectProps {
	isprojectnew: string;
	longtitle: string;
	descriptioncard: string;
	tags: string;
	cover: ImageProps;
    alt: string;
	slug: string;
    uri?: string;
}
