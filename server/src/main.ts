import { NestFactory } from "@nestjs/core";
import helmet from "helmet";
import * as compression from "compression";
import type { NestExpressApplication } from "@nestjs/platform-express";

import { corsOptions, httpsConfig } from "./config";

import { AppModule } from "./app.module";

const startServer = async () => {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.enableCors(corsOptions);
	app.use(compression());
	app.useBodyParser("json", { limit: "50kb" });
	app.use(helmet());
	app.use(httpsConfig);

	await app.listen(3000);
};

startServer();
