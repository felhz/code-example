import { Controller, Get, Post } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('/cat')
export class CatsController {
  constructor(private readonly appService: CatsService) {}

  @Get()
  async getHello(): Promise<Cat[]> {
    const cats = await this.appService.findAll();
    console.log(cats);
    return cats;
  }
  @Post()
  async create(): Promise<string> {
    const cats = await this.appService.create({
      user: 'test',
      name: 'test',
    });
    console.log(cats);
    return '1';
  }
}
