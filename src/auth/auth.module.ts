import { Module } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { SignUpProvider } from './providers/signup.provider';
import { CheckUserProvider } from './providers/checkUserExists.provider';
import { HashingProvider } from './providers/hashing.provider';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './stratiges/local';
import { UserValidationProvider } from './providers/signin.provider';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    SignUpProvider,
    CheckUserProvider,
    HashingProvider,
    LocalStrategy,
    UserValidationProvider,
  ],
  imports: [PassportModule],
  exports: [AuthService],
})
export class AuthModule {}
