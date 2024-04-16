import { Model } from "mongoose";
import { Inject, Injectable, Ip } from "@nestjs/common";

import { User } from "../models";
import { UserDto } from "../dtos";
import { UsersController } from "../controllers";
import { LoggerService } from "../../logger/services";

@Injectable()
export class UsersService {
	private readonly logger = new LoggerService(UsersController.name);

	constructor(
		@Inject("USER_MODEL")
		private userModel: Model<User>
	) {}

	getUser(@Ip() ip?: string): string {
		this.logger.warn(`Request for ALL Employees\t${ip}`, UsersController.name);
		return "Test";
	}

	async createUser(createCatDto: UserDto): Promise<User> {
		const createdCat = new this.userModel(createCatDto);
		return createdCat.save();
	}

	async seedUsersData() {}

	async findAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}
}
