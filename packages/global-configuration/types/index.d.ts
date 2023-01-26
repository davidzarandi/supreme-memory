import { Transport } from "@nest/microservices";
export declare const API_GATEWAY_PORT = 3000;
export declare enum SERVICES {
    AUTH = 0,
    HEALTH_CHECKER = 1
}
type ServiceMap = {
    [value in SERVICES]: {
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
};
export declare const GLOBAL_CONFIGURATION: GlobalConfiguration;
export {};
