import { registerAs } from "@nestjs/config";

export default registerAs("app", () => {
  return {
    nodeEnv: process.env.NODE_ENV || "development",
    port: parseInt(process.env.PORT, 10) || 3000,
    frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
    mobileAppUrl: process.env.MOBILE_APP_URL || "http://localhost:8081",
  };
});
