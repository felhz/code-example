import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
@Controller('gitlab')
export class GitlabController {
  @Get('work')
  getHello(@Query('time', ParseIntPipe) time: number): string {
    console.log(Reflect.getMetadata('path', GitlabController));
    return '';
  }
}
