// Imported types
import { ImageProps } from "../components/Image";

export interface BlogProps {
    blogTitle: string;
    slug: string;
    uri: string;
    isblognew: string;
    tag: string;
    publishDate: string;
    minutesRead: string;
    coverImage: ImageProps
}