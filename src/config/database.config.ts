import { registerAs } from "@nestjs/config";

export default registerAs("database", () => {
  return {
    databaseUrl: process.env.DATABASE_URL,
  };
});
