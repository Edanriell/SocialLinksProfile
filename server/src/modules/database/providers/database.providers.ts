import * as mongoose from "mongoose";
import { ConfigService } from "@nestjs/config"; // Import ConfigService

export const databaseProviders = () => {
	return [
		{
			provide: "DATABASE_CONNECTION",
			inject: [ConfigService],
			useFactory: async (configService: ConfigService): Promise<typeof mongoose> => {
				const mongoUri = configService.get<string>("DB_URL"); // Accessing MONGO_URI from environment variables
				return mongoose.connect(mongoUri);
			}
		}
	];
};
