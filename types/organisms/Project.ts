// Imported types
import { ImageProps } from "../components/Image";

export interface ProjectProps {
	isprojectnew: string;
	longtitle: string;
	descriptioncard: string;
	tags: string;
	cover: ImageProps;
	slug: string;
    uri?: string;
}
