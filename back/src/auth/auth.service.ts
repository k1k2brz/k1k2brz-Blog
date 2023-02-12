import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async SignUp(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        return this.userRepository.createUser(authCredentialsDTO);
    }

    async LogIn(authCredentialsDTO: AuthCredentialsDTO): Promise<{accessToken: string}> {
        const { username, password } = authCredentialsDTO;
        const user = await this.userRepository.findOne({ where: { username: username }});

        if (user && (await bcrypt.compare(password, user.password))) {
            // Token
            const payload = { username }
            const accessToken = await this.jwtService.sign(payload);
            
            return { accessToken: accessToken };
        } else {
            throw new UnauthorizedException('로그인에 실패했습니다.')
        }
    }
}
