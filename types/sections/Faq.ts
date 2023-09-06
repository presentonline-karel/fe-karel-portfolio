// Imported types
import { FaqAccordionProps } from "@/types/organisms/FaqAccordion";
import { ButtonProps } from "../components/Button";

export interface FaqProps {
    data: {
        content: {
            faqtitle: string;
            faqparagraph: string;
            faqbutton: ButtonProps[];
            faqs: FaqAccordionProps[];
        }
        isHidden: Boolean;
    }
}