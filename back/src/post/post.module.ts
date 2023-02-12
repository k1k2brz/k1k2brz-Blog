import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './controller/post.controller';
import { PostService } from './service/post.service';
import { PostRepository } from './repository/post.repository';
import { TypeOrmExModule } from '@custom/typeorm-ex.module';
import { Posts } from './post.entity';
import { AuthModule } from '@root/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts]), // 배열형태로 리포지터리나 엔티티 객체 받음
    TypeOrmExModule.forCustomRepository([PostRepository]),
    AuthModule
  ],
  exports: [TypeOrmModule, TypeOrmExModule],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
