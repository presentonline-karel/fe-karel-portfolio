// Imported types
import { FeatureProps } from "../organisms/Feature";

export interface FeaturesProps {
    data: {
        content: {
            featureslabel: string;
            featurestitle: string;
            features: FeatureProps[];
        }
    }
}