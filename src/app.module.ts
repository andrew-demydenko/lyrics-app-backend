import { Module } from "@nestjs/common";
import { SongsModule } from "./songs/songs.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import appConfig from "./config/app.config";
import jwtConfig from "./config/jwt.config";
import googleConfig from "./config/google.config";
import databaseConfig from "./config/database.config";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    SongsModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig, databaseConfig, googleConfig],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config) => ({
        secret: config.get("jwt.secret"),
        signOptions: { expiresIn: config.get("jwt.expiresIn") },
      }),
      global: true,
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
