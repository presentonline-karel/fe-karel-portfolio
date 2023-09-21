// Imported types
import { ListItemProps } from "../organisms/ListItem";

export interface BlogUnorderedListProps {
	data: {
		content: {
			blogunorderedlist: ListItemProps[];
		};
		isHidden: Boolean;
	};
}
