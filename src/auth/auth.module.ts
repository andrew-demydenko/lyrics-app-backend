import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaService } from "../prisma.service";
import { CryptoService } from "./crypto.service";
import { UsersModule } from "@/users/users.module";
import { GoogleService } from "./google.service";
import { JWTGuard } from "./guards/jwt.guard";

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    CryptoService,
    GoogleService,
    JWTGuard,
  ],
  exports: [AuthService],
  imports: [forwardRef(() => UsersModule)],
})
export class AuthModule {}
