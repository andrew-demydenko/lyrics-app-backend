import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AdminGuard } from "../auth/guards/admin.guard";
import { JWTGuard } from "../auth/guards/jwt.guard";
import { UserFieldsExcludeInterceptor } from "./interceptors/user-fields.interceptor";
import { AuthenticatedRequest } from "@/auth/types/authenticated-request.type";
import { AuthService } from "@/auth/auth.service";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Get("current-user")
  async getCurrentUser(@Req() request: AuthenticatedRequest) {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedException("Authorization token missing");
    }

    const token = authHeader.split(" ")[1];

    try {
      const userData = await this.authService.validateToken(token);

      const user = await this.usersService.findOne(userData.id);

      if (user) {
        delete user.password;
        return user;
      } else {
        throw new UnauthorizedException("User not found");
      }
    } catch (err) {
      throw new UnauthorizedException("Invalid or expired token");
    }
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AdminGuard)
  @UseInterceptors(UserFieldsExcludeInterceptor)
  @Get()
  findAll(@Query() query: { name?: string }) {
    return this.usersService.findAll({ name: query.name });
  }

  @UseGuards(JWTGuard)
  @Get(":id")
  @UseInterceptors(UserFieldsExcludeInterceptor)
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(JWTGuard)
  @Patch(":id")
  @UseInterceptors(UserFieldsExcludeInterceptor)
  update(@Param("id") id: string, @Body() data: UpdateUserDto) {
    return this.usersService.update(id, data);
  }

  @UseGuards(AdminGuard)
  @Delete(":id")
  @UseInterceptors(UserFieldsExcludeInterceptor)
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
