// Imported types
import { ArchitectureProps } from "../organisms/Architecture";

export interface SkillsProps {
    data: {
        content: {
            skillslabel: string;
            skillstitle: string;
            architectures: ArchitectureProps[];
            skillsimage: string[];
            alttag: string;
            bgcolor: string;
        }
        isHidden: Boolean;
    }
}