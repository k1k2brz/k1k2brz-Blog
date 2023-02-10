import { IsNotEmpty } from "class-validator";

export class CreatePostDTO {
    // IsNotEmpty로 자동 유효성 체크
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    content: string;
}