import { Injectable, Scope } from "@nestjs/common";
import { JwtPayload } from "@/auth/types/jwt-payload.type";

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  private currentUser: JwtPayload | null = null;

  setCurrentUser(user: JwtPayload): void {
    this.currentUser = user;
  }

  getCurrentUser(): JwtPayload | null {
    return this.currentUser;
  }
}
