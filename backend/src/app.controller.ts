import { Controller, Get, Ip, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('s')
  shortener(@Query('url') url: string, @Ip() ip) {
    return this.appService.shortener(url, ip);
  }

  @Get(':urlShortened')
  backToUrl(@Req() request: Request) {
    return this.appService.backToUrl(request.url);
  }
}
