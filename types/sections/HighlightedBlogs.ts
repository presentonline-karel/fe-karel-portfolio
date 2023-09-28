// Imported types
import { HighlightedBlogProps } from "../organisms/HighlightedBlog";

export interface HighlightedBlogsProps {
	data: {
		content: {
			highlightedblogstitle: string;
			highlightedblogsparagraph: string;
			highlightedblogs: HighlightedBlogProps[];
            bgcolor: string;
		};
		isHidden: Boolean;
	};
}
