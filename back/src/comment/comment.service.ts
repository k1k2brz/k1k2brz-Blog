import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@root/auth/user.entity';
import { Posts } from '@root/post/post.entity';
import { Comment } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CommentResponse, CreateCommentDTO } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private commentRepository: CommentRepository) {}

  async getCommentByUserId(userId: User): Promise<Comment[]> {
    const comments = await this.commentRepository
    .createQueryBuilder('comment')
    .leftJoinAndSelect('comment.user', 'user')
    .where('user.id = :userId', { userId })
    .getMany();
    
    if (!comments) {
      throw new NotFoundException(`코멘트가 존재하지 않습니다.`);
    }

    return comments;
  }

  async createComment(
    user: User,
    posts: Posts,
    createCommentDTO: CreateCommentDTO,
  ): Promise<CommentResponse> {
    return this.commentRepository.createComment(user, posts, createCommentDTO);
  }

  async deleteComment(
    id: number,
    user: { id: number; username: string; password: string },
    post: { id: number; content: string; },
  ): Promise<void> {
    const result = await this.commentRepository.delete({ id, user, post });

    if (result.affected === 0) {
      throw new NotFoundException(`${id}는 존재하지 않는 댓글 번호입니다.`);
    }
  }
}
