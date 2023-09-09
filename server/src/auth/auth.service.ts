import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    //generate the password hash
    const hash = await argon.hash(dto.password);

    try {
      //save the new user in the db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hashedPassword: hash,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (
        error instanceof
        Prisma.PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credentials taken',
          );
        }
      }
      throw error;
    }
  }

  async singin(dto: AuthDto) {
    //find user by email
    const user =
      await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });

    //if not exists throw exception
    if (!user)
      throw new ForbiddenException(
        'Credentials incorrect',
      );

    //compare password
    const pwMatches = await argon.verify(
      user.hashedPassword,
      dto.password,
    );

    //if password incorrect throw new exception
    if (!pwMatches) {
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    }

    //send back the user
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    console.log(secret);

    const token = await this.jwt.signAsync(
      payload,
      {
        expiresIn: '15m',
        secret: secret,
      },
    );

    return {
      access_token: token,
    };
  }
}
