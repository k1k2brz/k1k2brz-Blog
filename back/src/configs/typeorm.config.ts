import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "@auth/user.entity";
import { Posts } from "@post/post.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Comment } from "@root/comment/comment.entity";

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT, 10),
          username: process.env.DB_USERNAME,
          database: process.env.DB_NAME,
          password: process.env.DB_PASSWORD,
          entities: [Posts, User, Comment],
          synchronize: true,
        };
      },
}