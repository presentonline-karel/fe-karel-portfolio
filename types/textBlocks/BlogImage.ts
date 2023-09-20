// Imported types
import { ImageProps } from "../components/Image";

export interface BlogImageProps {
	data: {
		content: {
			blogimage: string[];
		};
		isHidden: Boolean;
	};
}
