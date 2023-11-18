import {
  Controller,
  Get,
  Inject,
  Headers,
  Ip,
  Session,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  // @Inject('app_service')
  // @Inject('person')
  // private readonly appService: AppService;

  constructor(
    @Inject('app_service') private readonly appService: AppService,
    @Inject('person') private readonly person: { name: string; age: number },
    @Inject('person2') private readonly person2: { name: string; desc: number },
    @Inject('person5') private readonly person5: { name: string; desc: string },
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ccc')
  header(
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
  ) {
    console.log(accept, '--accept');
    console.log(headers, '--headers');
  }

  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log(ip, '---ip');
  }

  @Get('/session')
  session(@Session() session) {
    console.log(session, '---session');
    if (!session.count) {
      session.count = 0;
    }

    session.count = session.count + 1;
    return session.count;
  }
}
