import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EnvConfigModule, RouterConfigModule } from "./config";

@Module({
	imports: [EnvConfigModule, RouterConfigModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}

// ENVConfigModule is broken!
