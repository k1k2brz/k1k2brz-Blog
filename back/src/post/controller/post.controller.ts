import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreatePostDTO } from '../dto/createPosts.dto';
import { Posts } from '../post.entity';
import { PostStatusValidationPipe } from '../pipes/post-status-validation.pipe';
import { PostStatus } from '../post.model';
import { PostService } from '../service/post.service';
import { GetUser } from '@auth/get-user.decorator';
import { User } from '@auth/user.entity';
import { CommentService } from '@root/comment/comment.service';
import { Comment } from '@root/comment/comment.entity';
import {
  CommentResponse,
  CreateCommentDTO,
} from '@root/comment/dto/create-comment.dto';

@Controller('post')
@UseGuards(AuthGuard()) // 토큰 없이 post에 접근 불가
export class PostController {
  constructor(
    private postService: PostService,
    private commentService: CommentService,
  ) {}

  @Get('')
  getAllPost(): Promise<Posts[]> {
    return this.postService.getAllPosts();
  }

  // 내 게시글 조회
  @Get('/user')
  getUserPost(@GetUser() user: User): Promise<Posts[]> {
    return this.postService.getUserPosts(user);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createPost(
    @Body() CreatePostDTO: CreatePostDTO,
    @GetUser() user: User,
    @Body() comments: CreateCommentDTO[]
  ): Promise<Posts> {
    // 게시글 생성시 토큰 필요하게
    // 하나만 return하기에 Posts만 타입을 준 것.
    return this.postService.createPost(CreatePostDTO, user, comments);
  }

  @Get('/:postId')
  getPostById(@Param('postId') postId: number): Promise<Posts> {
    return this.postService.getPostById(postId);
  }

  @Delete('/:postId')
  deletePost(
    @Param('postId', ParseIntPipe) postId: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.postService.deletePost(postId, user);
  }

  @Patch('/:postId/modify')
  updatePost(
    @Param('postId', ParseIntPipe) postId: number,
    @Body('status', PostStatusValidationPipe) status: PostStatus,
    @Body('title') title: string,
    @Body('content') content: string,
  ): Promise<Posts> {
    return this.postService.updatePost(postId, status, title, content);
  }

  /* ======== Comment ========== */

  @Post('/comment/create')
  @UsePipes(ValidationPipe)
  createComment(
    @Body() createCommentDTO: CreateCommentDTO,
    @GetUser() user: User,
    @Body() posts: Posts,
  ): Promise<CommentResponse> {
    console.log(user, posts)
    return this.commentService.createComment(user, posts, createCommentDTO)
  }

  // @Get('/comment/user/:userId')
  // getCommentByUserId(@Param('userId') user: User): Promise<Comment[]> {
  //   return this.commentService.getCommentByUserId(user)
  // }

  @Delete('/comment/:commentId')
  deleteComment(
    @Param('commentId', ParseIntPipe) commentId: number,
    @GetUser() user: User,
    @Body() post: Posts
  ): Promise<void> {
    return this.commentService.deleteComment(commentId, user, post);
  }
}
