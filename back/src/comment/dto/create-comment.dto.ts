import { User } from '@root/auth/user.entity';
import { Posts } from '@root/post/post.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDTO {
  @IsString()
  @IsNotEmpty()
  comment: string;
}

export class CommentResponse {
  commentId: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  deletedAt: string | Date;
  comment: string;
//   userId: User;
  posts: Posts;
}
