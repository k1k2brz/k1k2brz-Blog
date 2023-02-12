import { Repository } from "typeorm"
import { CustomRepository } from "@custom/typeorm-ex.decorator";
import { CreatePostDTO } from "../dto/createPosts.dto";
import { Posts } from "../post.entity";
import { PostStatus } from "../post.model";
import { User } from "@root/auth/user.entity";

@CustomRepository(Posts)
export class PostRepository extends Repository<Posts> {
    
    async createPost(CreatePostDto: CreatePostDTO, user: User) : Promise<Posts> {
        const {title, content} = CreatePostDto;

        const posts = this.create({ 
            title, 
            content,
            status: PostStatus.PUBLIC,
            user
        })

        await this.save(posts);
        return posts;
    }
}