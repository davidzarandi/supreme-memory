# Global Configuration package

This package that exports various constants and enums used throughout the application. It includes a
constant `API_GATEWAY_PORT` that is used to set the port the API Gateway service will run on. The package also includes
an `SERVICES` enum that lists the different services in the application, and a `SERVICE_DEFAULT_TIMEOUT` constant that
is calculated from `NUMBER_OF_RETRY_ATTEMPTS` and `RETRY_DELAY_IN_MS`. Additionally, the package exports a
constant `GLOBAL_CONFIGURATION` which contains a `SERVICES` object that maps the services in the enum to their
corresponding transport, options, and other information.

The package also include a function `getPort` that is used to calculate the port number of the service based
on `API_GATEWAY_PORT` and `SERVICE_PORT_OFFSET` and the service selected.