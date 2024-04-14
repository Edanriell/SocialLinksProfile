import { Module } from "@nestjs/common";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

import { EnvConfigModule, RouterConfigModule, throttleConfig } from "./config";

@Module({
	imports: [EnvConfigModule, RouterConfigModule, ThrottlerModule.forRoot(throttleConfig)],
	providers: [
		{
			provide: APP_GUARD,
			useClass: ThrottlerGuard
		}
	]
})
export class AppModule {}

// ENVConfigModule is broken!
