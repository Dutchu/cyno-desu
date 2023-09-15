import {
  Controller,
  UseGuards,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { DogService } from './dog.service';
import { GetUser } from '../auth/decorator';

@UseGuards(JwtGuard)
@Controller('dogs')
export class DogController {
  constructor(private dogService: DogService) {
  }
  @Get()
  getDogs(@GetUser('id') userId: number) {}
  @Get(':id')
  getDogById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) dogId: number) {}
  @Post()
  createDog(@GetUser('id') userId: number) {}
  @Patch()
  editDogById(@GetUser('id') userId: number) {}
  @Delete()
  deleteDogById(@GetUser('id') userId: number) {}
}
