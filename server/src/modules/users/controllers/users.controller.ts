import { Controller, Get, Ip } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";

import { UsersService } from "../services";
import { LoggerService } from "../../logger/services";

@Controller()
export class UsersController {
	private readonly logger = new LoggerService(UsersService.name);

	constructor(private readonly usersService: UsersService) {}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("user")
	async getUser(@Ip() ip: string) {
		this.logger.log(`User data requested from ip:\t${ip}`, UsersController.name);
		return await this.usersService.getUser();
	}
}
