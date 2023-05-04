import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmAsyncConfig } from './configs/typeorm.config';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/user.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: process.env.NODE_ENV !== 'production' ? '.env.dev' : '.env.prod',
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    PostModule,
    AuthModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
