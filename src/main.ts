import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import cookieParser from "cookie-parser";
import { ValidationPipe, BadRequestException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request, Response, NextFunction } from "express";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const helmetWithCSP = helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:"],
        connectSrc: [
          "'self'",
          configService.get("app.frontendUrl"),
          configService.get("app.mobileAppUrl"),
        ],
      },
    },
    crossOriginEmbedderPolicy: false,
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.includes("/auth/google")) {
      return next();
    }
    return helmetWithCSP(req, res, next);
  });

  app.setGlobalPrefix("api");
  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const result = errors.map((error) => ({
          property: error.property,
          message: error.constraints[Object.keys(error.constraints)[0]],
        }));
        return new BadRequestException(result);
      },
      stopAtFirstError: true,
    }),
  );

  app.enableCors({
    origin: [
      configService.get("app.frontendUrl"),
      configService.get("app.mobileAppUrl"),
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
  });
  await app.listen(configService.get("app.port"));
}
bootstrap();
