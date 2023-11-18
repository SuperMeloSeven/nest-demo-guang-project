import {
  Controller,
  Get,
  HostParam,
  Req,
  Res,
  Next,
  Header,
  Render,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hello(@HostParam('host') host) {
    return host;
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.log(req.hostname, '---req.hostname');
    console.log(req.url, '---req.url');
  }

  @Get('ddd')
  ddd(@Res({ passthrough: true }) res: Response) {
    return 'ddd';
  }

  @Get('eee')
  eee(@Next() next: NextFunction) {
    console.log(`handler 1`);
    next();
    return '111';
  }

  @Get('eee')
  eee2(@Next() next: NextFunction) {
    console.log(`handler 2`);
    next();
    return 'eee2';
  }

  @Get('ggg')
  @Header('aaa', 'bbb')
  ggg() {
    return 'aaa/ggg';
  }

  @Get('user')
  @Render('user')
  user() {
    return {
      name: 'hu',
      age: 18,
    };
  }
}
