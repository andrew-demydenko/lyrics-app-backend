import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AccessControlService } from "./services/access-control.service";
import { RequestContextService } from "./services/request-context.service";
import { UserContextMiddleware } from "./middlewares/user-context.middleware";
import { PrismaService } from "@/prisma.service";

@Global()
@Module({
  providers: [AccessControlService, RequestContextService, PrismaService],
  exports: [AccessControlService, RequestContextService],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserContextMiddleware).forRoutes("*");
  }
}
