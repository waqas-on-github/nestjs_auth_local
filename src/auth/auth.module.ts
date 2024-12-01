import { Module } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { SignUpProvider } from './providers/signup.provider';
import { SignInProvider } from './providers/signin.provider';
import { CheckUserProvider } from './providers/checkUserExists.provider';
import { HashingProvider } from './providers/hashing.provider';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    SignUpProvider,
    SignInProvider,
    CheckUserProvider,
    HashingProvider,
  ],
  imports: [],
  exports: [AuthService],
})
export class AuthModule {}
