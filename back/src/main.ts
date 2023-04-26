import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppLogger } from './app.logger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger(),
    cors: true,
  });

  const configService = app.get(ConfigService);
  const host = configService.get('serverport');

  app.enableCors();
  await app.listen(host);
  console.log(`Application listening on port ${host}`);
}
bootstrap();
