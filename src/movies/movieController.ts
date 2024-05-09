import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  findAll(): string {
    return 'This action returns all movies';
  }
}
