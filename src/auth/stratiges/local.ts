import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserValidationProvider } from '../providers/signin.provider';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userValidationProvider: UserValidationProvider) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userValidationProvider.validateUser({
      email,
      password,
    });
    if (!user) {
      throw new UnauthorizedException('no user found in local strategy');
    }
    return user;
  }
}
