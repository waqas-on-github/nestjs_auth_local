import { Injectable, UseGuards } from '@nestjs/common';
import { SignupDto } from '../dto/signup.dto';
import { SignUpProvider } from './signup.provider';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthService {
  constructor(
    private readonly signUpProvider: SignUpProvider,
    // inject signIn provider
  ) {}
  public signUp(signupDto: SignupDto) {
    return this.signUpProvider.signUp(signupDto);
  }

  public signIn() {}
}
