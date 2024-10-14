import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "prisma/prisma-client";

@Injectable()
export class UserFieldsExcludeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const removeFields = (user: User) => {
      if (typeof user.password !== "undefined") {
        delete user.password;
      }
      if (typeof user.salt !== "undefined") {
        delete user.salt;
      }
    };
    return next.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          data.forEach((user) => removeFields(user));
        } else {
          removeFields(data);
        }
        return data;
      })
    );
  }
}
