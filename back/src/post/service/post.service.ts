import { Injectable, NotFoundException } from '@nestjs/common';
import { PostStatus } from '../post.model';
import { CreatePostDTO } from '../dto/createPosts.dto';
import { PostRepository } from '../repository/post.repository';
import { Posts } from '../post.entity';
import { User } from '@root/auth/user.entity';

@Injectable()
export class PostService {
  constructor(private PostRepository: PostRepository) {}

  async getAllPosts(): Promise<Posts[]> {
    return this.PostRepository.find();
  }

  async getUserPosts(user: User): Promise<Posts[]> {
    const query = this.PostRepository.createQueryBuilder('post');
    query.where('post.userId = :userId', { userId: user.id });
    const posts = await query.getMany();

    return posts;
  }

  async getPostById(id: number): Promise<Posts> {
    const idFound = await this.PostRepository.findOne({ where: { id } });

    if (!idFound) {
      throw new NotFoundException(`${id}는 존재하지 않는 게시글입니다`);
    }

    return idFound;
  }

  async createPost(CreatePostDTO: CreatePostDTO, user: User): Promise<Posts> {
    return this.PostRepository.createPost(CreatePostDTO, user);
  }

  async deletePost(
    id: number,
    user: { id: number; username: string; password: string },
  ): Promise<void> {
    const result = await this.PostRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`${id}는 존재하지 않는 게시글 번호입니다.`);
    }
  }

  async updatePostStatus(
    postId: number,
    status: PostStatus,
    title: string,
    content: string,
  ): Promise<Posts> {
    const post = await this.getPostById(postId);
    post.status = status;
    post.title = title;
    post.content = content;
    await this.PostRepository.save(post);
    return post;
  }
}
