import { NestFactory } from "@nestjs/core";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";

import { AppModule } from "./app.module";

import { corsOptions, httpsConfig, tooBusyConfig } from "./config";

async function startServer() {
	const app = await NestFactory.create(AppModule);

	app.enableCors(corsOptions);
	app.use(bodyParser.json({ limit: "50kb" }));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(compression());
	app.use(helmet());
	app.use(httpsConfig);
	app.use(tooBusyConfig);

	await app.listen(app.get("ConfigService").get("PORT"));
}

startServer();
