export interface TextWithImageProps {
	data: {
		content: {
            textwithimagelabel: string;
            textwithimagetitle: string;
            textwithimagetext: string;
            textwithimageimage: string[];
            textwithimageimageplacement: string;
        };
		isHidden: Boolean;
	};
}
