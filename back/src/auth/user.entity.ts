import { AbstractEntity } from "@root/abstract.entity";
import { Comment } from "@root/comment/comment.entity";
import { Posts } from "@root/post/post.entity";
import { Column, Entity, OneToMany, Unique } from "typeorm";
import { ApiProperty } from '@nestjs/swagger'

@Entity('user')
@Unique(['email']) // 같은 유저이름이면 에러 반환
export class User extends AbstractEntity {
    @Column()
    @ApiProperty({ description: '이메일' })
    email: string;

    @Column()
    @ApiProperty({ description: '닉네임' })
    nickname: string;

    @Column()
    @ApiProperty({ description: '비밀번호' })
    password: string;

    @OneToMany(type => Posts, posts => posts.user, { eager: true })
    posts: Posts[];

    @OneToMany(type => Comment, comment => comment.user, { eager: true })
    comment: Comment[];
}