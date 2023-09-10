// Imported types
import { HighlightedBlogProps } from "../organisms/HighlightedBlogProps";

export interface HighlightedBlogsProps {
	data: {
		content: {
			highlightedblogstitle: string;
			highlightedblogsparagraph: string;
			highlightedblogs: HighlightedBlogProps[];
		};
		isHidden: Boolean;
	};
}