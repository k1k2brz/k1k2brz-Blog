import { UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    SignUp(@Body() authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        return this.authService.SignUp(authCredentialsDTO);
    }

    @Post('/login')
    LogIn(@Body(ValidationPipe) authCredentialsDTO: AuthCredentialsDTO): Promise<{accessToken: string}> {
        return this.authService.LogIn(authCredentialsDTO);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    // 데코레이터 불러오기
    test(@GetUser() user: User) {
        console.log(user)
    }
}
