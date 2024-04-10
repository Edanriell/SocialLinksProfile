import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { randomBytes } from "crypto";
import "winston-mongodb";

import { LogIndentation } from "../../../config";

// Fix THIS CONFIG its bad
const appConfig = {
	packageVersion: "1.0.0",
	isEndpointLogsSilenced: "NotSilenced",
	dbUrl:
		"mongodb://127.0.0.1:27017/RecipePage?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2"
};

const { combine, timestamp, colorize, json, label, printf, metadata } = winston.format;

const timestampFormat = "MMM-DD-YYYY HH:mm:ss";
const appVersion = process.env.npm_package_version ?? appConfig.packageVersion;

const generateLogId = (): string => randomBytes(16).toString("hex");

// Logger for API endpoints
const endpointsLogger = winston.createLogger({
	format: combine(
		timestamp({ format: timestampFormat }),
		json(),
		printf(({ timestamp, level, message, ...data }) => {
			const response = {
				level,
				logId: generateLogId(),
				timestamp,
				appInfo: {
					appVersion,
					environment: process.env.NODE_ENV, // development/staging/production
					processId: process.pid
				},
				message,
				data
			};

			return JSON.stringify(response, null, LogIndentation.MD);
		})
	),
	transports: [
		// log to console
		new winston.transports.Console({
			// if set to true, logs will not appear
			silent: appConfig.isEndpointLogsSilenced === "Silenced" // true/false
		}),
		// log to file
		new winston.transports.File({
			filename: "logs/application-logs.log"
		}),
		// log to file, but rotate daily
		new DailyRotateFile({
			filename: "logs/rotating-logs-%DATE%.log", // file name includes current date
			datePattern: "MMMM-DD-YYYY",
			zippedArchive: false, // zip logs true/false
			maxSize: "20m", // rotate if file size exceeds 20 MB
			maxFiles: "14d" // max files
		})
	]
});

// Logger for CLI outputs
const cliLogger = winston.createLogger({
	format: combine(
		label({ label: appVersion }),
		timestamp({ format: timestampFormat }),
		colorize({ level: true }),
		printf(
			({ level, message, label, timestamp }) => `[${timestamp}] ${level} (${label}): ${message}`
		)
	),
	transports: [new winston.transports.Console()]
});

// Logger for MongoDB
const dbLogger = winston.createLogger({
	// in this case we do not need to worry about logId or Timestamp as MongoDB will generate that for us
	// the req, res data will be stored to "meta" object via metadata()
	format: combine(json(), metadata()),
	transports: [
		new winston.transports.MongoDB({
			db: String(appConfig.dbUrl),
			collection: "logs", // name of the table/collection where you want to store your logs
			options: { useUnifiedTopology: true } // some stuff that CLI complains about
		})
	]
});

export { endpointsLogger, cliLogger, dbLogger };
