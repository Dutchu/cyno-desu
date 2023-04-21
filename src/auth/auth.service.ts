import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I have been signup' };
  }
  singin() {
    return { msg: 'I have been signin' };
  }
}