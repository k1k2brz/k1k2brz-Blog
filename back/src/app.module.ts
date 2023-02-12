import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmAsyncConfig } from './configs/typeorm.config';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV !== 'production' ? '.env.dev' : '.env.prod',
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    PostModule,
    AuthModule],
})
export class AppModule {}
