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
  const host = configService.get<number>('DB_PORT');
  const port = configService.get<number>('PORT');

<<<<<<< Updated upstream
  app.enableCors();
  await app.listen(port || 3000);
  console.log(`Application listening on port ${host}`);
=======
  app.enableCors({
    origin: 'http://localhost:3060',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(port || 3065);
  console.log(`Application listening on port ${port}`);
>>>>>>> Stashed changes
}
bootstrap();
