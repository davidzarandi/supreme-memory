import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";

import { GLOBAL_CONFIGURATION } from "@workspaces/global-config-env";
import { HealthController } from "./health.controller";

@Module({
  imports: [ClientsModule.register([GLOBAL_CONFIGURATION.SERVICES.HEALTH_CHECKER])],
  controllers: [HealthController],
})
export class HealthModule {}
