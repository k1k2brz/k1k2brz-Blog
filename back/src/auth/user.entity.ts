import { AbstractEntity } from "@root/abstract.entity";
import { Comment } from "@root/comment/comment.entity";
import { Posts } from "@root/post/post.entity";
import { Column, Entity, OneToMany, Unique } from "typeorm";

@Entity('user')
@Unique(['email']) // 같은 유저이름이면 에러 반환
export class User extends AbstractEntity {
    @Column()
    email: string;

    @Column()
    nickname: string;

    @Column()
    password: string;

    @OneToMany(type => Posts, posts => posts.user, { eager: true })
    posts: Posts[];

    @OneToMany(type => Comment, comment => comment.user, { eager: true })
    comment: Comment[];
}