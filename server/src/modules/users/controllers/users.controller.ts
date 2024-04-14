import { Controller, Get, Ip } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";

import { UsersService } from "../services";
import { LoggerService } from "../../logger/logger.service";

@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	private readonly logger = new LoggerService(UsersController.name);

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("user")
	getHello(@Ip() ip: string): string {
		this.logger.warn(`Request for ALL Employees\t${ip}`, UsersController.name);
		return this.usersService.getUser();
	}
}
