import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [TerminusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
