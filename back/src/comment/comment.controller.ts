import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetUser } from '@root/auth/get-user.decorator';
import { User } from '@root/auth/user.entity';
import { Posts } from '@root/post/post.entity';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentResponse, CreateCommentDTO } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
    constructor(
        private commentService: CommentService
    ) { }

    @Post('/create')
    createComment(
        @GetUser() user: User, post: Posts, @Body() comment: CreateCommentDTO): Promise<CommentResponse> {
        return this.commentService.createComment(user, post, comment);
    }
}
