import { IsString } from "class-validator";

export class AuthSignupDTO {
    @IsString()
    email: string;
    @IsString()
    nickname: string;
    @IsString()
    password: string;
}