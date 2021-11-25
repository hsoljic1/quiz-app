import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { str: string } {
    return {
      str: 'Hello world'
    };
  }
}
