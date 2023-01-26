import { Test, TestingModule } from "@nestjs/testing";
import { HealthCheckService, MicroserviceHealthIndicator, TerminusModule } from "@nestjs/terminus";

import { AppService } from "./app.service";

describe("AppService", () => {
  let appService: AppService;
  const microservice: Partial<MicroserviceHealthIndicator> = { pingCheck: jest.fn() };
  const health: Partial<HealthCheckService> = { check: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule],
      providers: [AppService, HealthCheckService, MicroserviceHealthIndicator],
    })
      .overrideProvider(HealthCheckService)
      .useValue(health)
      .overrideProvider(MicroserviceHealthIndicator)
      .useValue(microservice)
      .compile();

    appService = module.get<AppService>(AppService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(appService).toBeDefined();
  });

  describe("checkHealth", () => {
    it("should call the health check functions", () => {
      health.check = jest.fn().mockImplementation((callbackArray: (() => void)[]) => {
        callbackArray.forEach((cb) => cb.apply(appService));
        return Promise.resolve("OK");
      });
      appService.checkHealth();
      expect(microservice.pingCheck).toBeCalledTimes(1);
    });
  });
});
