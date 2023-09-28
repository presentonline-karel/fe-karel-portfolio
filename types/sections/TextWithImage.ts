export interface TextWithImageProps {
	data: {
		content: {
            textwithimagelabel: string;
            textwithimagetitle: string;
            textwithimagetext: string;
            textwithimageimage: string[];
            alttag: string;
            textwithimageimageplacement: string;
            bgcolor: string;
            aspectSquareMobile?: Boolean | null;
        };
		isHidden: Boolean;
	};
}
