describe("Configuration", () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV; // Restore old environment
  });

  it("should receive process.env variables", () => {
    process.env.APPLICATION_URL = "https://local.test.de:8999";

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const module = require("./configuration").default;

    expect(module()).toMatchObject({
      applicationUrl: "https://local.test.de:8999",
    });
  });

  it("should default to the default values", () => {
    process.env.APPLICATION_URL = undefined;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const module = require("./configuration").default;

    expect(module()).toMatchObject({
      applicationUrl: "http://localhost:3001",
    });
  });
});

export {};
