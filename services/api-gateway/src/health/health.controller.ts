import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable, timeout } from "rxjs";

import { GLOBAL_CONFIGURATION } from "@supreme-memory/global-configuration";

@Controller("/api/health")
export class HealthController {
  constructor(
    @Inject(GLOBAL_CONFIGURATION.SERVICES.HEALTH_CHECKER.name)
    private readonly healthCheckerClient: ClientProxy,
  ) {}

  @Get("/")
  healthCheck(): Observable<string> {
    const pattern = { cmd: "check_health" };
    return this.healthCheckerClient
      .send<string>(pattern, {})
      .pipe(timeout(GLOBAL_CONFIGURATION.SERVICE_DEFAULT_TIMEOUT));
  }
}
