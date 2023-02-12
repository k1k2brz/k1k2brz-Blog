import { User } from "@auth/user.entity";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PostStatus } from "./post.model";

@Entity('post')
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn()
    postId: number;

    @Column()
    title: string;

    @Column()
    content: string;
    
    @Column()
    status: PostStatus;

    @ManyToOne(type => User, user => user.posts, { eager: false})
    user: User;
}