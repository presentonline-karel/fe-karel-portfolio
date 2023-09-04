// Imported types
import { FaqAccordionProps } from "@/app/components/components/FaqAccordion";
import { ButtonProps } from "../components/Button";

export interface FaqProps {
    data: {
        content: {
            faqtitle: string;
            faqparagraph: string;
            faqbutton: ButtonProps[];
            faqs: FaqAccordionProps[];
        }
    }
}