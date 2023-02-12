import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import secretConfig from './secretConfig';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: secretConfig().appSecret,
      signOptions: { expiresIn: 2222 },
    };
  },
};