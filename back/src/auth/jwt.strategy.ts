import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
import { UnauthorizedException } from "@nestjs/common";
import { jwtConfig } from "./configs/jwt-config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private userRepository: UserRepository
    ) {
        super({
            secretOrKey: jwtConfig,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload) {
        const { email } = payload;
        const user: User = await this.userRepository.findOne({where: { email: email }});

        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}