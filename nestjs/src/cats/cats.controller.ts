import { Controller, Get, Req, Res, Post, HttpStatus } from '@nestjs/common';
import { HttpCode, Param } from '@nestjs/common/decorators';
// import { Request } from '@nestjs/common/decorators';
import { Request } from 'express';
@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action asd';
  }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    // res.status(HttpStatus.OK);
    return ['123'];
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this is ${id}`;
  }
  //   @Get(':id')
  //   findOne(@Param() params): string {
  //     console.log(params.id);
  //     return `123 ${params.id}`;
  //   }
  // @Get('')
  // findAll(@Req() request: Request): string {
  //   return 'asdasd';
  // }
  //   @Get()
  //   find(): string {
  //     return 'ok';
  //   }
}
