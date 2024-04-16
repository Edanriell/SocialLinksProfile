import { Controller, Get } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";

import { UsersService } from "../services";

@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("user")
	async getUser() {
		return await this.usersService.getUser();
	}
}
