import { IsString } from "class-validator";

export class AuthCredentialsDTO {
    @IsString()
    username: string;
    @IsString()
    password: string;
}