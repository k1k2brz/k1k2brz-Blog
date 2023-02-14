import { User } from "@auth/user.entity";
import { AbstractEntity } from "@root/abstract.entity";
import { Comment } from "@root/comment/comment.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { PostStatus } from "./post.model";

@Entity('post')
export class Posts extends AbstractEntity {
    @PrimaryGeneratedColumn()
    postId: number;

    @Column()
    title: string;

    @Column()
    content: string;
    
    @Column()
    status: PostStatus;

    @ManyToOne(type => User, user => user.posts, { eager: false })
    user: User;
    
    @OneToMany(type => Comment, comment => comment.posts, { eager: true })
    commentId: Comment[];
}