import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	images: {
		mobile: {
			_id: false,
			type: String,
			required: true
		},
		tablet: {
			_id: false,
			type: String,
			required: true
		},
		desktop: {
			_id: false,
			type: String,
			required: true
		}
	},
	fullName: {
		_id: false,
		type: String,
		required: true
	},
	location: {
		_id: false,
		type: String,
		required: true
	},
	userInfo: {
		_id: false,
		type: String,
		required: true
	},
	socialLinks: [
		{
			linkText: {
				_id: false,
				type: String,
				required: true
			},
			linkHref: {
				_id: false,
				type: String,
				required: true
			}
		}
	]
});

export { UserSchema };
