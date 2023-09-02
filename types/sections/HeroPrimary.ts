// Imported types
import { Button } from "../components/Button";

export interface HeroPrimaryProps {
    data: {
        content: {
            herolabel: string;
            herotitle: string;
            heroparagraph: string;
            herobuttons: Button[];
            heroimage: string[];
        };
    }
}
