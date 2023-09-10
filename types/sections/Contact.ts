// Types
import { SocialProps } from "../organisms/Social";



export interface ContactProps {
    data: {
        content: {
            contactlabel: string;
            contacttitle: string;
            contactparagraph: string;
            socials: SocialProps[];
        }
        isHidden: Boolean;
    }
}