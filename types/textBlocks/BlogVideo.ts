export interface BlogVideoProps {
	data: {
		content: {
			blogvideotoggle: string;
			blogvideo?: string | null;
			blogvideoyturl: string;
		};
		isHidden: Boolean;
	};
}
