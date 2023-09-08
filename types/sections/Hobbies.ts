// Imported types
import { HobbyProps } from "../organisms/Hobby";

export interface HobbiesProps {
    data: {
        content: {
            hobbieslabel: string;
            hobbiestitle: string;
            hobbies: HobbyProps[];
        }
        isHidden: Boolean;
    }
}