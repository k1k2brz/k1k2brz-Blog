import { Posts } from "@root/post/post.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('user')
@Unique(['username']) // 같은 유저이름이면 에러 반환
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(type => Posts, posts => posts.user, { eager: true })
    posts: Posts[];
}