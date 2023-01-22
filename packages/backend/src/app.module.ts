import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ConfigModule } from "@nestjs/config";
import { join } from "path";
import configuration from "./config/configuration";
import { HealthModule } from "./health/health.module";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "public"),
      renderPath: "*",
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
