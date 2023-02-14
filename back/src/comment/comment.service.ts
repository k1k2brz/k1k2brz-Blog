import { Injectable } from '@nestjs/common';
import { User } from '@root/auth/user.entity';
import { Posts } from '@root/post/post.entity';
import { CommentRepository } from './comment.repository';
import { CommentResponse, CreateCommentDTO } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
    constructor(
        private commentRepository: CommentRepository
    ) { }

    async createComment(user: User, posts: Posts, createCommentDTO: CreateCommentDTO): Promise<CommentResponse> {
        return this.commentRepository.createComment(user, posts, createCommentDTO);
    }
}
