import { Injectable, NotFoundException } from '@nestjs/common';
import { Posts, PostStatus } from './post.model';
import { v1 as uuid } from 'uuid';
import { CreatePostDTO } from './dto/createPosts.dto';

@Injectable()
export class PostService {
    private posts: Posts[] = [];

    getAllPosts(): Posts[] {
        return this.posts
    }

    // 게시글 생성
    createPost(CreatePostDTO: CreatePostDTO) {
        const { title, content } = CreatePostDTO;

        const posts: Posts = {
            // uuid로 고유한 값 생성
            id: uuid(),
            title,
            content,
            status: PostStatus.PUBLIC
        }

        this.posts.push(posts);
        return posts;
    }

    getPostById(id: string): Posts {
        const idFound = this.posts.find((v) => v.id === id);

        if(!idFound) {
            throw new NotFoundException(`${id} 아이디가 존재하지 않습니다`);
        }

        return idFound;
    }

    deletePost(id: string): void {
        const idFound = this.getPostById(id)
        // 굳이 값을 보내 줄 필요가 없으니 return은 필요없음
        this.posts = this.posts.filter((v) => v.id !== idFound.id);
    }

    updatePostStatus(id: string, status: PostStatus): Posts {
        const post = this.getPostById(id);
        post.status = status;
        return post;
    }
}
