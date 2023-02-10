import { PipeTransform, BadRequestException } from "@nestjs/common"
import { PostStatus } from "../post.model";

export class PostStatusValidationPipe implements PipeTransform  {
    readonly StatusOptions = [
        PostStatus.PRIVATE,
        PostStatus.PUBLIC
    ]
    
    transform(value: any) {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`${value}라는 값은 올바르지 않습니다.`)
        }
        
        return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1
    }
}