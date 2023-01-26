import { Test, TestingModule } from "@nestjs/testing";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;
  const appService: Partial<AppService> = { checkHealth: jest.fn() };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    appController = moduleRef.get<AppController>(AppController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(appController).toBeDefined();
  });

  describe("checkHealth", () => {
    it("should call the appService", () => {
      appController.checkHealth();
      expect(appService.checkHealth).toBeCalled();
    });
  });
});
