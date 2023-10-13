import { Body, Controller, Get, Header, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { request } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
}
