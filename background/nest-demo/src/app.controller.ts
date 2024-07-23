import {
  Controller,
  Get,
  Inject,
  Post,
  Req,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import * as fs from 'fs';
import { join } from 'path';
import { CatsService } from './cats/cats.service';

@Controller('/api')
export class AppController {
  constructor(@Inject(CatsService) private readonly cat) {}

  @Get()
  getHello(): any {
    return 'ddd';
  }
  @Get('/download')
  add(@Res() res): StreamableFile {
    const file = fs.readFileSync(join(process.cwd(), 'carousel.html'));
    res.setHeader('Content-Type', 'text/html');
    return res.send(file);
  }
  @Post('/upload')
  @UseInterceptors(FileInterceptor('files'))
  upload(@UploadedFile() file: Express.Multer.File): string {
    console.log(file);
    // fs.writeFileSync(join(process.cwd(), file.originalname), file.buffer);
    return 'ok';
  }
  @Get('/cookie')
  cookie(
    @Res({ passthrough: true }) response: Response,
    @Req() res: Request,
  ): string {
    console.log(res.cookies);
    response.header(
      'Access-Control-Allow-Origin',
      'http://staticlocal.eeo.im:5501',
    );
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.header('Access-Control-Allow-Credentials', 'true');
    response.cookie('test1', 'test2221', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
    return 'cookie';
  }
}
