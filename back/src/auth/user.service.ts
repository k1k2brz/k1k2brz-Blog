import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';

@Injectable()
export class UserService {
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

    async getUserById(id: number): Promise<User> {
        const idFound = await this.userRepository.findOne({where: {id}});

        if(!idFound) {
            throw new NotFoundException(`${id}는 존재하지 않는 사용자입니다`);
        }

        return idFound;
    }

    // JWT패스워드 체인지 찾아볼 것
    async changePassword(id: number, password: string): Promise<User> {
        const pw = await this.getUserById(id);
        pw.password = password;

        await this.userRepository.save(pw)
        return pw
    }
}
