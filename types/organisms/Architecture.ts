// Imported types
import { ArchitectureProjectProps } from "./ArchitectureProject";

export interface ArchitectureProps {
    title: string;
    technologies: string;
    paragraph: string;
    projects: ArchitectureProjectProps[];
}