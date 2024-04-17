import * as mongoose from "mongoose";
import { ConfigService } from "@nestjs/config";

export const databaseProviders = () => {
	return [
		{
			provide: "DATABASE_CONNECTION",
			inject: [ConfigService],
			useFactory: async (configService: ConfigService): Promise<typeof mongoose> => {
				const mongoUri = configService.get<string>("DB_URL");
				return mongoose.connect(mongoUri);
			}
		}
	];
};
