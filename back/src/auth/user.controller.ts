import { Controller, Post, Body, ValidationPipe, UseGuards, Param, Get, Patch } from '@nestjs/common';
import { ParseIntPipe } from "@nestjs/common/pipes"
import { AuthGuard } from "@nestjs/passport";
import { UserService } from './user.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) { }

    @Post('/signup')
    SignUp(@Body() authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        return this.userService.SignUp(authCredentialsDTO);
    }

    @Post('/login')
    LogIn(@Body(ValidationPipe) authCredentialsDTO: AuthCredentialsDTO): Promise<{accessToken: string}> {
        return this.userService.LogIn(authCredentialsDTO);
    }

    @Get('/:id')
    getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.getUserById(id)
    }

    @Patch('/:id/changepassword')
    changePassword(
        @Param('id', ParseIntPipe) id: number,
        @Body('password') password: string,
    ): Promise<User> {
        return this.userService.changePassword(id, password)
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    // 데코레이터 불러오기
    test(@GetUser() user: User) {
        console.log(user)
    }
}
