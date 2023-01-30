import { NestFactory } from "@nestjs/core";

import { API_GATEWAY_PORT } from "@workspaces/global-config-env";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(API_GATEWAY_PORT);
}

bootstrap().then();
