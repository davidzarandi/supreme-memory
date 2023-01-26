import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions } from "@nestjs/microservices";

import { GLOBAL_CONFIGURATION } from "@supreme-memory/global-configuration";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    GLOBAL_CONFIGURATION.SERVICES.AUTH,
  );
  await app.listen();
}

bootstrap().then();
