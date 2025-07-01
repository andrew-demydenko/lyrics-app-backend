import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { RequestContextService } from "../services/request-context.service";
import { AuthenticatedRequest } from "@/auth/types/authenticated-request.type";

@Injectable()
export class UserContextMiddleware implements NestMiddleware {
  constructor(private requestContextService: RequestContextService) {}

  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const authenticatedReq = req as AuthenticatedRequest;

    if (authenticatedReq.user) {
      this.requestContextService.setCurrentUser(authenticatedReq.user);
    }

    next();
  }
}
