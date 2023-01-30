# API Gateway Application

The application creates a new instance of the Nest.js application using `NestFactory.create(AppModule)`, and then starts
listening on the port specified in the `API_GATEWAY_PORT` constants, which is imported
from `@workspaces/global-configuration`.

The `AppModule` is the root module of the application.

The `bootstrap` function is called immediately after the file is imported, and it starts the application by creating an
instance of `AppModule` and listening on the specified port.
