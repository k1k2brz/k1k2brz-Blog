import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'

export class AuthSignupDTO {
    @IsString()
    @ApiProperty({ description: '이메일' })
    email: string;
    @IsString()
    @ApiProperty({ description: '닉네임' })
    nickname: string;
    @IsString()
    @ApiProperty({ description: '비밀번호' })
    password: string;
}