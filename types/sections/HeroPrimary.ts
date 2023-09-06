// Imported types
import { ButtonProps } from "../components/Button";

export interface HeroPrimaryProps {
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
