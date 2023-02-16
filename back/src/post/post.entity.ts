import { User } from "@auth/user.entity";
import { AbstractEntity } from "@root/abstract.entity";
import { Comment } from "@root/comment/comment.entity";
import { Entity, Column, ManyToOne, OneToMany } from "typeorm"
import { PostStatus } from "./post.model";

@Entity('post')
export class Posts extends AbstractEntity {
    @Column()
    title: string;

    @Column()
    content: string;
    
    @Column()
    status: PostStatus;

    @ManyToOne(type => User, user => user.posts, { nullable: false })
    user: User;
    
    @OneToMany(type => Comment, comments => comments.posts)
    comment: Comment[];
}