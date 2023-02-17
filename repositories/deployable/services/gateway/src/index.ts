import fastify from "fastify";
import { AppController } from "./app.controller";
import "reflect-metadata";

(function bootstrap() {
  const app = fastify();

  const appController = new AppController();
  const appControllerProto = Object.getPrototypeOf(appController);

  const BASE_PATH = Reflect.getMetadata("BASE_PATH", AppController.prototype);
  const HTTPGetMethods = Reflect.getMetadata("HTTP_GET_METHODS", AppController.prototype) ?? [];
  for (let path in HTTPGetMethods) {
    app.get(`${BASE_PATH}${path}`.replaceAll("//", "/"), appControllerProto[HTTPGetMethods[path]]);
  }

  app.listen({ port: 3000 }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
})();
