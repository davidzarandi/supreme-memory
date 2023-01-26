import { Transport } from "@nest/microservices";

export const API_GATEWAY_PORT = 3000;
const SERVICE_PORT_OFFSET = 1;
const NUMBER_OF_RETRY_ATTEMPTS = 5;
const RETRY_DELAY_IN_MS = 1000;

export enum SERVICES {
  AUTH,
  HEALTH_CHECKER,
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

const getPort = (service: SERVICES) => {
  return API_GATEWAY_PORT + SERVICE_PORT_OFFSET + service;
};

export const GLOBAL_CONFIGURATION: GlobalConfiguration = {
  SERVICES: {
    [SERVICES.AUTH]: {
      name: "AUTH",
      transport: Transport.TCP,
      options: {
        port: getPort(SERVICES.AUTH),
        retryAttempts: NUMBER_OF_RETRY_ATTEMPTS,
        retryDelay: RETRY_DELAY_IN_MS,
        host: "::",
      },
    },
    [SERVICES.HEALTH_CHECKER]: {
      name: "HEALTH_CHECKER",
      transport: Transport.TCP,
      options: {
        port: getPort(SERVICES.HEALTH_CHECKER),
        retryAttempts: NUMBER_OF_RETRY_ATTEMPTS,
        retryDelay: RETRY_DELAY_IN_MS,
        host: "::",
      },
    },
  },
};
