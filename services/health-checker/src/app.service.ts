import { Injectable } from "@nestjs/common";
import {
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  MicroserviceHealthIndicator,
} from "@nestjs/terminus";
import { from, Observable } from "rxjs";

import { GLOBAL_CONFIGURATION, SERVICES } from "@supreme-memory/global-configuration";

@Injectable()
export class AppService {
  constructor(
    private readonly health: HealthCheckService,
    private readonly microservice: MicroserviceHealthIndicator,
  ) {}

  checkHealth(): Observable<HealthCheckResult> {
    return from(this.health.check([this.checkAuthService]));
  }

  private checkAuthService(): Promise<HealthIndicatorResult> {
    return this.microservice.pingCheck(
      "auth-service",
      GLOBAL_CONFIGURATION.SERVICES[SERVICES.AUTH],
    );
  }
}
