export type User = {
	images: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
	fullName: string;
	location: string;
	userInfo: string;
	socialLinks: Array<SocialLink>;
};

type SocialLink = {
	linkText: string;
	linkHref: string;
};
