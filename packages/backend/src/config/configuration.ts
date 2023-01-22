import * as process from "process";

export default () => ({
  applicationUrl: process.env.APPLICATION_URL ?? "http://localhost:3001",
});
