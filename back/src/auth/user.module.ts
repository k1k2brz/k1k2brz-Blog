import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '@custom/typeorm-ex.module';
import { AuthController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { jwtConfig } from './configs/jwt-config';
import { Comment } from '@root/comment/comment.entity';
import { CommentRepository } from '@root/comment/comment.repository';
import { PostModule } from '@root/post/post.module';
import { CommentService } from '@root/comment/comment.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(jwtConfig),
    TypeOrmModule.forFeature([User, Comment]),
    TypeOrmExModule.forCustomRepository([UserRepository, CommentRepository]),
  ],
  exports: [TypeOrmModule, TypeOrmExModule, JwtStrategy, PassportModule],
  controllers: [AuthController],
  providers: [UserService, JwtStrategy, CommentService]
})
export class AuthModule {}
