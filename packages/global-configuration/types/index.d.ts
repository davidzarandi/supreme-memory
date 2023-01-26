import { Transport } from "@nest/microservices";
export declare const API_GATEWAY_PORT = 3000;
export declare enum SERVICES {
    AUTH = 0,
    HEALTH_CHECKER = 1
}
type ServiceMap = {
    [key in keyof typeof SERVICES]: {
        name: string;
        transport: Transport;
        options: {
            port: number;
            retryAttempts: number;
            retryDelay: number;
            host: string;
        };
    };
};
type GlobalConfiguration = {
    SERVICES: ServiceMap;
    SERVICE_DEFAULT_TIMEOUT: number;
};
export declare const GLOBAL_CONFIGURATION: GlobalConfiguration;
export {};
