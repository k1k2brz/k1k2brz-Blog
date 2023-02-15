import { AbstractEntity } from "@root/abstract.entity";
import { User } from "@root/auth/user.entity";
import { Posts } from "@root/post/post.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('comment')
export class Comment extends AbstractEntity {
  @Column()
  comment: string;

  @ManyToOne(type => User, user => user.comment, { eager: false })
  user: User
  
  @ManyToOne(type => Posts, post => post.comment)
  post: Posts
}