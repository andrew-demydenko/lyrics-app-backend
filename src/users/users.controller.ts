import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Prisma } from "@prisma/client";
import { JWTGuard } from "../auth/guards/jwt.guard";
import { UserFieldsExcludeInterceptor } from "./interceptors/user-fields.interceptor";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JWTGuard)
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

  @UseGuards(JWTGuard)
  @Delete(":id")
  @UseInterceptors(UserFieldsExcludeInterceptor)
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
