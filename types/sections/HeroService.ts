// Imported types
import { ButtonProps } from "../components/Button";

export interface HeroServiceProps {
	data: {
		content: {
			service: string;
			addfreelanceprojectswitch: string;
			isfreelanceorproject: string;
			freelancepage: string[];
			projectpage: string[];
            linkdisabled: string;
			herotitle: string;
			heroparagraph: string;
			herobuttons: ButtonProps[];
			heroimage: string[];
		};
		isHidden: Boolean;
	};
}
