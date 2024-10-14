import { registerAs } from "@nestjs/config";

export default registerAs("jwt", () => {
  return {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRED_IN,
    refreshSecret: process.env.REFRESH_JWT_SECRET,
    refreshExpiresIn: process.env.REFRESH_JWT_ACCESS_TOKEN_EXPIRED_IN,
  };
});
