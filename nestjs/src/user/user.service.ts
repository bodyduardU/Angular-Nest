import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { string } from 'joi';

import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async findOne(email: string, password: string): Promise<any> {
    return await this.model.find({ email: email, password: password }).exec();
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    if (
      this.model.find({
        email: createUserDto.email,
        password: createUserDto.password,
      })
    )
      console.log(typeof createUserDto.password);
    const password = this.hashPassword(createUserDto.password);
    console.log(password);
    const payload = {
      password: password,
      email: createUserDto.email,
      name: createUserDto.name,
      address: createUserDto.address,
    };
    console.log(payload);
    // createUserDto.password = this.hashPassword(createUserDto.password);
    return await new this.model({
      ...payload,
      createAt: new Date(),
    }).save();
  }

  async hashPassword(password: string): Promise<any> {
    const salt = 10;
    return await bcrypt.hash(password, salt);
  }
}
