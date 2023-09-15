// Imported types
import { ArchitectureProps } from "../organisms/Architecture";

export interface SkillsProps {
    data: {
        content: {
            skillslabel: string;
            skillstitle: string;
            architectures: ArchitectureProps[];
            skillsimage: string[];
            bgcolor: string;
        }
        isHidden: Boolean;
    }
}