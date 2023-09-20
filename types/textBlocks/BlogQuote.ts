export interface BlogQuoteProps {
    data: {
        content: {
            blogquote: string;
            blogquoteauthor: string;
            blogquotecompany: string;
        }
        isHidden: Boolean;
    }
}