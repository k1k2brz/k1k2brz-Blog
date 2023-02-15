import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@root/auth/user.entity';
import { Posts } from '@root/post/post.entity';
import { Comment } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CreateCommentDTO } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    private commentRepository: CommentRepository,
  ) {}

  async getCommentByPostId(post: Posts): Promise<Comment[]> {
    const query = this.commentRepository.createQueryBuilder('post');
    query.where({ postId: post.id });
    const comments = await query.getMany();

    return comments;
  }

  async getCommentByUserId(user: User) {
    const query = this.commentRepository.createQueryBuilder('user');
    query.where('comment.userId = :userId', { userId: user.id });
    const posts = await query.getMany();

    return posts;
  }

  async getCommentById(id: number) {
    const idFound = await this.commentRepository.findOne({
      where: { id },
    });

    if (!idFound) {
      throw new NotFoundException(
        `${id}는 존재하지 않는 댓글 번호입니다`,
      );
    }
    return idFound;
  }

  async createComment(
    user: User,
    post: Posts,
    createCommentDTO: CreateCommentDTO,
  ): Promise<Comment> {
    return this.commentRepository.createComment(user, post, createCommentDTO);
  }

  async deleteComment(id: number, user: { id: number }, post: { id: number}): Promise<void> {
    const result = await this.commentRepository.delete({ id, user, post });

    if (result.affected === 0) { 
      throw new NotFoundException(
        `${id}는 존재하지 않는 댓글 번호입니다.`,
      );
    }
  }
}
