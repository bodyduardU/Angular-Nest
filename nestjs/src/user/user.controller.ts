import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { Body, Post, Param } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async findOne(
    @Param('email') email: string,
    @Param('password') password: string,
  ) {
    return await this.service.findOne(email, password);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.service.create(createUserDto);
  }
}
