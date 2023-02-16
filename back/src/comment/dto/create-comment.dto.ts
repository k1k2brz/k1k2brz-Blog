import { User } from '@root/auth/user.entity';
import { Posts } from '@root/post/post.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDTO {
  @IsString()
  @IsNotEmpty()
  content: string;
}

export class CommentResponse {
  commentId?: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  content: string;
  user: User;
  posts: Posts;
}
