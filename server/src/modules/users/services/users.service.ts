import { Model } from "mongoose";
import { Inject, Injectable } from "@nestjs/common";
import { User } from "../models";
import { UserDto } from "../dtos";

@Injectable()
export class UsersService {
	constructor(
		@Inject("USER_MODEL")
		private catModel: Model<User>
	) {}

	getHello(): string {
		return "Test";
	}

	async create(createCatDto: UserDto): Promise<User> {
		const createdCat = new this.catModel(createCatDto);
		return createdCat.save();
	}

	async findAll(): Promise<User[]> {
		return this.catModel.find().exec();
	}
}

// METHODS ARE NOT QUITE GOOD HERE
