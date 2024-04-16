import { join } from "path";
import * as fs from "fs";
import { Model } from "mongoose";
import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";

import { User } from "../models";
import { GetUserQueryDto } from "../dtos";
import { LoggerService } from "../../logger/services";

const rootFolderPath = join(__dirname, "..");
const usersDataFilePath = `${rootFolderPath}\\data\\users.json`;

@Injectable()
export class UsersService {
	private readonly logger = new LoggerService(UsersService.name);

	constructor(
		@Inject("USER_MODEL")
		private userModel: Model<User>
	) {}

	public async getUser() {
		const usersCount = await this.userModel.countDocuments();

		if (usersCount === 0) {
			this.logger.error(`No user data to return.`, UsersService.name);
			throw new NotFoundException("Did not found any user data to return.", {
				cause: new Error(),
				description: "There is no users in the database."
			});
		}

		const randomUserIndex = Math.floor(Math.random() * usersCount);

		const randomUser = await this.userModel.findOne().skip(randomUserIndex).exec();

		return new GetUserQueryDto(randomUser);
	}

	public async createUsersInDatabase({
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
			this.logger.warn(`Users already exists in the database.`, UsersService.name);
			throw new BadRequestException("Users are already created.", {
				cause: new Error(),
				description: "Users already exists in the database."
			});
		}

		const newUser = await this.userModel.create({
			images,
			fullName,
			location,
			userInfo,
			socialLinks
		});
	}

	public async seedUsersData() {
		const usersInitialized = await this.userModel.find();

		if (usersInitialized.length > 0) return;

		fs.readFile(usersDataFilePath, "utf8", (error, users) => {
			if (error) {
				this.logger.error(`Could not read the users data: ${error}`, UsersService.name);
				throw new Error("Unexpected error occurred. Could not read the necessary data for users.");
			}

			try {
				const usersData = JSON.parse(users);

				for (const user of usersData) {
					this.createUsersInDatabase({
						images: user.images,
						fullName: user.fullName,
						location: user.location,
						userInfo: user.userInfo,
						socialLinks: user.socialLinks
					});
				}

				this.logger.log(
					`Successfully created ${usersData.length} recipes in the database.`,
					UsersService.name
				);
			} catch (error) {
				this.logger.error(`An error occurred while parsing JSON data: ${error}`, UsersService.name);
				throw new Error("Failed to parse JSON data.");
			}
		});
	}
}
