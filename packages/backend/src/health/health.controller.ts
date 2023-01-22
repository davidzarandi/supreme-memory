import { Controller, Get } from "@nestjs/common";
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from "@nestjs/terminus";
import { ConfigService } from "@nestjs/config";

@Controller("health")
export class HealthController {
  constructor(
    private configService: ConfigService,
    private healthCheckService: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  checkHealth() {
    const applicationUrl = this.configService.getOrThrow<string>("applicationUrl");

    return this.healthCheckService.check([
      () => this.http.pingCheck("Static site", applicationUrl),
      () => this.http.pingCheck("Api check", `${applicationUrl}/api`),
    ]);
  }
}
