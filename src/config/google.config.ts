import { registerAs } from "@nestjs/config";

export default registerAs("google", () => {
  return {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  };
});
