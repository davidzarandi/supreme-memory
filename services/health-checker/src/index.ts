import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions } from "@nestjs/microservices";

import { GLOBAL_CONFIGURATION } from "@workspaces/global-config-env";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    GLOBAL_CONFIGURATION.SERVICES.HEALTH_CHECKER,
  );
  await app.listen();
}

bootstrap().then();
