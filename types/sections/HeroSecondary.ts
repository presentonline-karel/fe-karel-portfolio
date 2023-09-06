// Imported types
import { ButtonProps } from "../components/Button";

export interface HeroSecondaryProps {
    data: {
        content: {
            herolabel: string;
            herotitle: string;
            heroparagraph: string;
            herobuttons: ButtonProps[];
            heroimage: string[];
        },
        isHidden: Boolean;
    }
}