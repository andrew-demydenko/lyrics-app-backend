import { HttpException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll({ name }: { name?: string }) {
    const users = await this.prisma.user.findMany({
      where: { name: { contains: name?.toLowerCase() } },
    });
    if (!users) {
      throw new HttpException("No users found", 501);
    } else {
      return users;
    }
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException(`User with id ${id} not found`, 501);
    } else {
      return user;
    }
  }

  async findUserByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new HttpException(`User with email ${email} not found`, 501);
    } else {
      return user;
    }
  }

  async findUserByGoogleId(googleId: string) {
    let user = await this.prisma.user.findUnique({ where: { googleId } });

    if (!user) {
      throw new HttpException(`User with googleId ${googleId} not found`, 501);
    } else {
      return user;
    }
  }

  async update(id: string, data: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new HttpException(`User with id ${id} not found`, 501);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      throw new HttpException(`User with id ${id} not found`, 501);
    }
  }
}
