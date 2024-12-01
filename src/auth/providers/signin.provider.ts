import { Injectable, NotFoundException } from '@nestjs/common';
import { SignInDto } from '../dto/signin.dto';
import { CheckUserProvider } from './checkUserExists.provider';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class SignInProvider {
  constructor(
    private readonly checkUserProvider: CheckUserProvider,
    // inject hashing provider
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async singIn(signInDto: SignInDto) {
    try {
      // check user exits by email
      const user = await this.checkUserProvider.checkUserByEmail(
        signInDto.email,
      );
      // if user does not exist throw exception
      if (!user) {
        throw new NotFoundException('user does not found');
      }
      // if exists compare password
      const isPasswordCorrect = await this.hashingProvider.comparePassword(
        signInDto.password,
        user.password,
      );

      // if password is worng throw execption
      if (!isPasswordCorrect) {
        throw new NotFoundException('invalid credentials');
      }
    } catch (error) {
      throw error;
    }
  }
}
