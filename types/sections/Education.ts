export interface EducationProps {
	data: {
		content: {
			educationlabel: string;
			educationtitle: string;
			educationcard: {
				title: string;
				school: string;
				addwebsite: string;
				website: string;
				startdate: string;
				iscurrentjob: string;
				enddate: string;
				paragraph: string;
				tags: string;
			};
			educationimage: string[];
            bgcolor: string;
		};
		isHidden: Boolean;
	};
}
