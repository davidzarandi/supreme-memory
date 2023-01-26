import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { HealthCheckResult } from "@nestjs/terminus";
import { Observable } from "rxjs";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: "check_health" })
  checkHealth(): Observable<HealthCheckResult> {
    return this.appService.checkHealth();
  }
}
