import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EnvConfigModule, RouterConfigModule, throttleConfig } from "./config";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

@Module({
	imports: [EnvConfigModule, RouterConfigModule, ThrottlerModule.forRoot(throttleConfig)],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_GUARD,
			useClass: ThrottlerGuard
		}
	]
})
export class AppModule {}

// ENVConfigModule is broken!
