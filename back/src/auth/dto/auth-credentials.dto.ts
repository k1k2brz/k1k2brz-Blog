import { IsString } from "class-validator";

export class AuthCredentialsDTO {
    @IsString()
    email: string;
    @IsString()
    password: string;
}