import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set global prefix for all routes
  app.setGlobalPrefix('api');

  // enable validations
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true
  }));
  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
