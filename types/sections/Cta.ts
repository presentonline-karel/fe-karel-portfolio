// Imported types
import { ButtonProps } from "../components/Button";

export interface CtaProps {
    data: {
        content: {
            ctatitle: string;
            ctaparagraph: string;
            ctabuttons: ButtonProps[];
            ctabgcolor: string;
        },
        isHidden: Boolean;
    }
}