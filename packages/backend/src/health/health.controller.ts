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
    const protocol = this.configService.get<string>("protocol");
    const host = this.configService.get<string>("host");
    const port = this.configService.get<number>("port");
    const baseUrl = `${protocol}://${host}:${port}`;

    return this.healthCheckService.check([
      () => this.http.pingCheck("Static site", baseUrl),
      () => this.http.pingCheck("Api check", `${baseUrl}/api`),
    ]);
  }
}
