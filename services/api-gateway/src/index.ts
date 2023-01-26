import { NestFactory } from "@nestjs/core";

import { API_GATEWAY_PORT } from "@supreme-memory/global-configuration";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(API_GATEWAY_PORT);
}

bootstrap().then();
