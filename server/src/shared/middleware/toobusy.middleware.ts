import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import tooBusy from "toobusy-js";

@Injectable()
export class TooBusyMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		if (tooBusy()) {
			res.status(503).send("Server is too busy right now, sorry.");
		} else {
			next();
		}
	}
}

tooBusy.onLag(function (currentLag: number) {
	console.error("Event loop lag detected! Latency: " + currentLag + "ms");
});
