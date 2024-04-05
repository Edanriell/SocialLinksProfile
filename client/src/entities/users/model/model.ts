export type User = {
	name: string;
	surname: string;
	location: string;
	info: string;
	links: Array<Link>;
};

type Link = {
	name: string;
	address: string;
};
