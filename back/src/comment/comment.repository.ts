import { User } from "@root/auth/user.entity";
import { CustomRepository } from "@root/custom/typeorm-ex.decorator";
import { Posts } from "@root/post/post.entity";
import { Repository } from "typeorm";
import { Comment } from "./comment.entity";
import { CreateCommentDTO } from "./dto/create-comment.dto";

@CustomRepository(Comment)
export class CommentRepository extends Repository<Comment> {

    async createComment(user: User, posts: Posts, createCommentDTO: CreateCommentDTO ) : Promise<Comment> {
        const { comment } = createCommentDTO
        
        const comments = this.create({ 
            // user,
            posts,
            comment,
        })

        await this.save(comments);
        return comments;
    }
}