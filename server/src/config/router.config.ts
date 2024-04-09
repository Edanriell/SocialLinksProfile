import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { UsersModule } from "../modules";

@Module({
	imports: [
		UsersModule,
		RouterModule.register([
			{
				path: "api",
				children: [UsersModule]
			}
		])
	]
})
export class RouterConfigModule {}
