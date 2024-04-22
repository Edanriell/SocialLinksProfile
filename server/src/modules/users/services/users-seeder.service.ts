import {join} from "path";
import * as fs from "fs";
import * as mongoose from "mongoose";
import {Model} from "mongoose";
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

import {User} from "../models";
import {LoggerService} from "../../logger/services";
import {UserSchema} from "../schemas";

@Injectable()
export class UsersSeederService {
	private static readonly logger = new LoggerService(UsersSeederService.name);
	private static userModel: Model<User>;

	private static async establishDatabaseConnection() {
		const mongoUri = new ConfigService().get<string>("DB_URL");

		await mongoose.connect(mongoUri);
		UsersSeederService.userModel = mongoose.model<User>("Users", UserSchema);
	}

	private static async createUsersInDatabase({
		images,
		fullName,
		location,
		userInfo,
		socialLinks
	}: {
		images: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
		fullName: string;
		location: string;
		userInfo: string;
		socialLinks: Array<{
			linkText: string;
			linkHref: string;
		}>;
	}) {
		const user = await this.userModel.findOne({ fullName });

		if (user) {
			this.logger.warn(
				`User with full name ${fullName} already exists in the database.`,
				UsersSeederService.name
			);
			return;
		}

		await this.userModel.create({
			images,
			fullName,
			location,
			userInfo,
			socialLinks
		});
	}

	public static async seedUsersData() {
		const mode = new ConfigService().get<string>("NODE_ENV");
		let rootFolderPath: string;
		if (mode === "development") {
			rootFolderPath = join(__dirname, "..\\..\\..\\..\\src");
		} else {
			rootFolderPath = join(__dirname, "..\\..\\..\\");
		}
		const usersDataFilePath = `${rootFolderPath}\\data\\users.json`;

		await UsersSeederService.establishDatabaseConnection();

		const usersInitialized = await this.userModel.find();

		fs.readFile(usersDataFilePath, "utf8", (error, users) => {
			if (error) {
				this.logger.error(`Could not read the users data: ${error}`, UsersSeederService.name);
				throw new Error("Unexpected error occurred. Could not read the necessary data for users.");
			}

			try {
				const usersData = JSON.parse(users);

				if (usersData.length === usersInitialized.length) {
					this.logger.warn(
						`All users from users data file, already exists in the database.`,
						UsersSeederService.name
					);
					this.logger.warn(
						`!!  Please remove UsersSeederService, seedUsersData function call from the codebase.  !!`,
						UsersSeederService.name
					);
					return;
				}

				for (const user of usersData) {
					UsersSeederService.createUsersInDatabase({
						images: user.images,
						fullName: user.fullName,
						location: user.location,
						userInfo: user.userInfo,
						socialLinks: user.socialLinks
					});
				}

				this.logger.log(
					`Successfully created ${usersData.length} recipes in the database.`,
					UsersSeederService.name
				);
			} catch (error) {
				this.logger.error(
					`An error occurred while parsing JSON data: ${error}`,
					UsersSeederService.name
				);
				throw new Error("Failed to parse JSON data.");
			}
		});
	}
}
