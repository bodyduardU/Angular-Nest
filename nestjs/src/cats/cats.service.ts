import { Injectable } from '@nestjs/common';
// import { Cat } from 'src/interfaces/cat.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from 'src/schemas/cat.schema';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  async create(createCatDto: CreateCatDto) {}

  findAll(): Cat[] {
    return this.cats;
  }
}
