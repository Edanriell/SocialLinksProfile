import { Controller, Get } from "@nestjs/common";
import { UsersService } from "../services";

@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get("user")
	getHello(): string {
		return this.usersService.getUser();
	}
}
