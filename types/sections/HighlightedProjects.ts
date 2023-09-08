// Imported types
import { HighlightedProjectProps } from "../organisms/HighlightedProject";

export interface HighlightedProjectsProps {
    data: {
        content: {
            highlightedprojectstitle: string;
            highlightedprojectsparagraph: string;
            highlightedprojects: HighlightedProjectProps[];
        }
        isHidden: Boolean;
    }
}