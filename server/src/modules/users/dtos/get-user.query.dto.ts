import { User } from "../models";

class UserDto {
	public id;
	public images;
	public fullName;
	public location;
	public userInfo;
	public socialLinks;

	constructor(model: User) {
		this.id = model._id;
		this.images = model.images;
		this.fullName = model.fullName;
		this.location = model.location;
		this.userInfo = model.userInfo;
		this.socialLinks = model.socialLinks;
	}
}

export { UserDto };
