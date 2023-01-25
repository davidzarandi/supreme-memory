import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import { AppController } from "./app.controller";

@Module({
  imports: [ClientsModule.registerAsync([])],
  controllers: [AppController],
})
export class AppModule {}
