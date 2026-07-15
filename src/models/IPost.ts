export interface IPost {
	title?: string;
	description?: string;
	cover?: string;
	date?: string;
}

export function Post(
	title?: string,
	description?: string,
	cover?: string,
	date: string = new Date().toDateString()
): IPost {
	return {
		title,
		description,
		cover,
		date
	};
}
