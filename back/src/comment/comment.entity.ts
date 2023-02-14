import { AbstractEntity } from "@root/abstract.entity";
import { User } from "@root/auth/user.entity";
import { Posts } from "@root/post/post.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comments')
export class Comment extends AbstractEntity {
  @PrimaryGeneratedColumn()
  commentId: number;
    
  @Column()
  comment: string;

//   @ManyToOne(type => User, user => user.comment, { eager: true })
//   user: User

  @ManyToOne(type => Posts, posts => posts.commentId , { eager: false })
  posts: Posts
}