import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePostDTO } from './dto/createPosts.dto';
import { PostStatusValidationPipe } from './pipes/post-status-validation.pipe';
import { Posts, PostStatus } from './post.model';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) {}

    @Get('/')
    getAllPost(): Posts[] {
        return this.postService.getAllPosts();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createPost(@Body() CreatePostDTO: CreatePostDTO): Posts {
        // 하나만 return하기에 Posts만 타입을 준 것.
        return this.postService.createPost(CreatePostDTO)
    }

    @Get('/:id')
    getPostById(@Param('id') id: string): Posts {
        return this.postService.getPostById(id)
    }

    @Delete('/:id')
    deletePost(@Param('id') id: string): void {
        this.postService.deletePost(id);
    }

    @Patch('/:id/status')
    updatePostStatus(
        @Param('id') id: string,
        @Body('status', PostStatusValidationPipe) status: PostStatus
    ) {
        return this.postService.updatePostStatus(id, status);
    }
}
