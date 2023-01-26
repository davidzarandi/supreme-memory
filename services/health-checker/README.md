# Health checker service

This microservice comprises two main components: the `AppService` and the `AppController`.

The `AppService` is responsible for performing the actual health checks. It uses the `HealthCheckService` and
`MicroserviceHealthIndicator` from the `@nestjs/terminus` package to perform the checks. The `checkHealth()` method of
the `AppService` is the main entry point for performing health checks. It returns an Observable of `HealthCheckResult`,
which is a type from `@nestjs/terminus`, and invokes the private method `checkAuthService()`. The `checkAuthService()`
method is responsible for checking the health of the `"auth-service"` by calling the `pingCheck()` method of the
`MicroserviceHealthIndicator` and passing in the `auth-service`'s configuration.

The `AppController` is responsible for handling the incoming requests and invoking the `AppService`. The `AppController`
has a single endpoint, "check_health", which is decorated with the `MessagePattern` decorator from the
`@nestjs/microservices` package. This decorator is used to handle incoming message pattern and when the message pattern
is matched to `"check_health"` the `checkHealth()` method of the `AppService` is invoked which returns an Observable of
`HealthCheckResult`.

Overall, this microservice is intended to provide a simple, easy-to-use way to check the health of other services in a
microservice architecture using Nest.js and @nestjs/terminus package.