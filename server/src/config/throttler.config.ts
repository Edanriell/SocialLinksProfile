// import rateLimit from "express-rate-limit";
//
// const rateLimiterConfig = rateLimit({
// 	windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
// 	limit: 100, // maximum number of request inside a window
// 	message: "You have exceeded the 100 requests in 24 hrs limit!", // the message when they exceed limit
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false // Disable the `X-RateLimit-*` headers
// });
//
// export { rateLimiterConfig };

import { Module } from "@nestjs/common";
import { ThrottlerModule } from "@nestjs/throttler";

@Module({
	imports: [
		ThrottlerModule.forRoot([
			{
				name: "short",
				ttl: 1000,
				limit: 3
			},
			{
				name: "medium",
				ttl: 10000,
				limit: 20
			},
			{
				name: "long",
				ttl: 60000,
				limit: 100
			}
		])
	]
})
export class AppModule {}
