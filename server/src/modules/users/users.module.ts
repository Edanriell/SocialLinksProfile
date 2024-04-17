import { Module } from "@nestjs/common";

import { UsersController } from "./controllers";
import { UsersService } from "./services";
import { userProviders } from "./providers";
import { DatabaseModule } from "../database/database.module";

@Module({
	imports: [DatabaseModule],
	controllers: [UsersController],
	providers: [UsersService, ...userProviders]
})
export class UsersModule {}
