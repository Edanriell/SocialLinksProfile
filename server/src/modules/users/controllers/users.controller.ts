import { Controller, Get } from "@nestjs/common";
import { UsersService } from "../services";
import { Throttle } from "@nestjs/throttler";

@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("user")
	getHello(): string {
		return this.usersService.getUser();
	}
}
