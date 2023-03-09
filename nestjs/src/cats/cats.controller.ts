import {
  Controller,
  Get,
  Req,
  Res,
  Post,
  Body,
  HttpStatus,
  HttpException,
  ForbiddenException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from 'src/interfaces/cat.interface';
import { Query } from '@nestjs/common/decorators';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findAll();
  }
  //   @Get()
  //   async xxx() {
  //     try {
  //       await this.catsService.findAll();
  //     } catch (error) {
  //       throw new HttpException(
  //         {
  //           status: HttpStatus.FORBIDDEN,
  //           error: 'This is a custom message',
  //         },
  //         HttpStatus.FORBIDDEN,
  //         {
  //           cause: error,
  //         },
  //       );
  //     }
  //   }
  //   @Get()
  //   async findAll() {
  //     throw new ForbiddenException();
  //   }

  //   @Get()
  //   async findAll(): Promise<Cat[]> {
  //     return this.catsService.findAll();
  //   }
}
