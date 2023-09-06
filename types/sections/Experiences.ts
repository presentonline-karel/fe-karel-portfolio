// Imported types
import { ButtonProps } from "../components/Button";
import { ExperienceProps } from "../organisms/Experience";

export interface ExperiencesProps {
    data: {
        content: {
            experiencelabel: string;
            experiencetitle: string;
            experiences: ExperienceProps[];
            ctatitle: string;
            ctabutton: ButtonProps;
        }
        isHidden: Boolean;
    }
}