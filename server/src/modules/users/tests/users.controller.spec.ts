import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "../controllers";
import { UsersService } from "../services";

describe("UsersController", () => {
	let usersController: UsersController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [UsersController],
			providers: [UsersService]
		}).compile();

		usersController = app.get<UsersController>(UsersController);
	});

	describe("root", () => {
		it('should return "Hello World!"', () => {
			expect(usersController.getHello()).toBe("Hello World!");
		});
	});
});
