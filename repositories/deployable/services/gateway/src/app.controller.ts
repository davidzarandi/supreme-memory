import "reflect-metadata";

function Controller(basePath: string = "/"): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata("BASE_PATH", basePath, target.prototype);

    return target;
  };
}

function Get(path: string): MethodDecorator {
  return function <T>(target, propertyKey) {
    let HTTPGetMethods: Record<string, typeof propertyKey> = Reflect.getMetadata("HTTP_GET_METHODS", target);
    if (!HTTPGetMethods) {
      Reflect.defineMetadata("HTTP_GET_METHODS", (HTTPGetMethods = {}), target);
    }

    HTTPGetMethods[path] = propertyKey;

    return target;
  };
}

@Controller("/")
export class AppController {
  /* private static instance: AppController;
  private constructor() {}

  public static getInstance() {
    if (!AppController.instance) {
      AppController.instance = new AppController();
    }

    return AppController.instance;
  }*/

  @Get("/hello")
  hello() {
    return "hi";
  }
}
