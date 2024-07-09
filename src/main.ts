import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaNotFoundFilter } from 'src/exception-filters/prisma-not-found.exception-filer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
    }),
  );
  app.useGlobalFilters(new PrismaNotFoundFilter());

  await app.listen(3000);
}
bootstrap();
