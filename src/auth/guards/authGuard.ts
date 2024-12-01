import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() //inject jwt service to etract jwt token form request headers

  {}

  async canActivate(context: ExecutionContext) {
    return true;
  }
}
