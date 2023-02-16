import { AbstractEntity } from "@root/abstract.entity";
import { User } from "@root/auth/user.entity";
import { Posts } from "@root/post/post.entity";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('comment')
export class Comment extends AbstractEntity {
  @Column()
  @IsNotEmpty()
  content: string;

  @ManyToOne(type => User, user => user.comment, { nullable: false })
  user: User
  
  @ManyToOne(type => Posts, posts => posts.comment, { nullable: false })
  posts: Posts
} 