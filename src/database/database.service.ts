import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks() {
    console.log('Enabling shutdown hooks');
    this.$on('beforeExit' as never, async () => {
      console.log('Disconnecting Prisma Client');
      await this.$disconnect();
    });
  }
}
