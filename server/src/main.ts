import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import helmet from "helmet";
import * as compression from "compression";

import { corsOptions, httpsConfig } from "./config";

import { AppModule } from "./app.module";

async function startServer() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.enableCors(corsOptions);
	app.use(compression());
	app.useBodyParser("json", { limit: "50kb" });
	app.use(helmet());
	app.use(httpsConfig);

	await app.listen(3000);
}

startServer();
