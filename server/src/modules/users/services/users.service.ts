import { Model } from "mongoose";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";

import { User } from "../models";
import { GetUserQueryDto } from "../dtos";
import { LoggerService } from "../../logger/services";

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
}
