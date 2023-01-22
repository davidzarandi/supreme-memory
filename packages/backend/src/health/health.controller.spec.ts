import { Test, TestingModule } from "@nestjs/testing";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { HealthCheckService, HttpHealthIndicator, TerminusModule } from "@nestjs/terminus";
import { HttpModule } from "@nestjs/axios";
import { HealthController } from "./health.controller";

describe("HealthController", () => {
  let controller: HealthController;
  const configService = { getOrThrow: jest.fn() };
  const healthCheckService = {
    check: jest.fn(),
  };
  const http = { pingCheck: () => "" };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      imports: [ConfigModule, TerminusModule, HttpModule],
    })
      .overrideProvider(ConfigService)
      .useValue(configService)
      .overrideProvider(HealthCheckService)
      .useValue(healthCheckService)
      .overrideProvider(HttpHealthIndicator)
      .useValue(http)
      .compile();

    controller = module.get<HealthController>(HealthController);
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("checkHealth", () => {
    it("should return with a healthy response", () => {
      healthCheckService.check = jest
        .fn()
        .mockReturnValue('{"status": "ok","info": {},"error": {},"details": {}}');
      expect(controller.checkHealth()).toBe(
        '{"status": "ok","info": {},"error": {},"details": {}}',
      );
    });

    it("should call the health check functions", () => {
      healthCheckService.check = jest
        .fn()
        .mockImplementation((callbackArray: Array<() => void>) => {
          for (const callbackArrayKey in callbackArray) {
            callbackArray[callbackArrayKey]();
          }
        });
      controller.checkHealth();
      expect(configService.getOrThrow).toHaveBeenCalled();
    });
  });
});
