import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions } from "@nestjs/microservices";

import { GLOBAL_CONFIGURATION, SERVICES } from "@supreme-memory/global-configuration";
import { AppModule } from "./app.module";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    GLOBAL_CONFIGURATION.SERVICES[SERVICES.HEALTH_CHECKER],
  );
  await app.listen();

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap().then();
