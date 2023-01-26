import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";

import { GLOBAL_CONFIGURATION, SERVICES } from "@supreme-memory/global-configuration";
import { HealthController } from "./health.controller";

@Module({
  imports: [ClientsModule.register([GLOBAL_CONFIGURATION.SERVICES[SERVICES.HEALTH_CHECKER]])],
  controllers: [HealthController],
})
export class HealthModule {}
