// Imported types
import { ButtonProps } from "../components/Button";
import { ImageProps } from "../components/Image";

export interface PlaygroundProjectProps {
    id: number;
    title: string;
    paragraph: string;
    tag: string;
    publishdate: string;
    images: string[];
    ctabutton: ButtonProps[];
}