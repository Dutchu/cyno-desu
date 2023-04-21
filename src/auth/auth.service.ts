import { Injectable } from '@nestjs/common';
import { User, Dog } from '@prisma/client';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I have been signup' };
  }
  singin() {
    return { msg: 'I have been signin' };
  }
}