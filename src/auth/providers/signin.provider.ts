import { Injectable, NotFoundException } from '@nestjs/common';
import { SignInDto } from '../dto/signin.dto';
import { CheckUserProvider } from './checkUserExists.provider';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class UserValidationProvider {
  constructor(
    private readonly checkUserProvider: CheckUserProvider,
    // inject hashing provider
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async validateUser(signInDto: SignInDto) {
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

      // if password is not correct throw exception
      if (!isPasswordCorrect) {
        throw new NotFoundException('invalid credentials');
      }
      // if password is correct return user
      return user;
    } catch (error) {
      throw error;
    }
  }
}
