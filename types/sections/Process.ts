// Imported types
import { StepProps } from "../organisms/Step";

export interface ProcessProps {
    data: {
        content: {
            processlabel: string;
            processtitle: string;
            processparagraph: string;
            steps: StepProps[];
        }
        isHidden: Boolean;
    }
}