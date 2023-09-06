// Imported types
import { ServiceProps } from "../organisms/Service";

export interface ServicesProps {
    data: {
        content: {
            serviceslabel: string;
            servicestitle: string;
            services: ServiceProps[];
        }
        isHidden: Boolean;
    }
}