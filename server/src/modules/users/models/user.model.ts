import { Document } from "mongoose";

type User = {
	images: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
	fullName: string;
	location: string;
	userInfo: string;
	socialLinks: Array<SocialLink>;
} & Document;

type SocialLink = {
	linkText: string;
	linkHref: string;
};

export { type User };
