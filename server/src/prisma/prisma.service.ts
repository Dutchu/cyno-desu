import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DB_URL'),
        },
      },
    });
    console.log(config.get('DB_URL'));
  }
  cleanDB() {
    return this.$transaction([
      this.user.deleteMany(),
      this.dog.deleteMany(),
    ]);
  }
}
