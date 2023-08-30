import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
// import * as pactum from 'pactum';
import {
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();

    prisma = app.get(PrismaService);
    await prisma.cleanDB();
  });

  afterAll(() => {
    app.close();
  });
  it.todo('should pass');

  describe('Auth', () => {
    describe('Signup', () => {
      it.todo('Should sign up');
    });
    describe('Signin', () => {
      it.todo('Should sign in');
    });
  });

  describe('User', () => {
    describe('Get me', () => {
      it.todo('Should Get me');
    });
    describe('Edit user', () => {
      it.todo('Should Edit user');
    });
  });

  describe('Dog', () => {
    describe('Get dogs', () => {
      it.todo('Should Get dogs');
    });
    describe('Create dog', () => {
      it.todo('Should Create dog');
    });
    describe('Find dog by ID', () => {
      it.todo('Should Find dog by ID');
    });
    describe('Edit dog', () => {
      it.todo('Should Edit dog');
    });
    describe('Delete dog', () => {
      it.todo('Should Delete dog');
    });
  });
});
