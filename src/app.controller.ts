import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { domainToASCII } from 'url';

// your-domainToASCII.com/products
// @Controller('products')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): {name: string} {
    return {name: 'Mad'};
  }
}
