import { CustomRepository } from '@custom/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthSignupDTO } from './dto/auth-signup.dto';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authSignupDTO: AuthSignupDTO): Promise<void> {
    const { email, nickname, password } = authSignupDTO;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ email, nickname, password: hashedPassword });

    try {
      await this.save(createUser);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('이미 존재하는 아이디입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
