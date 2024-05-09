import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  findAll(): string {
    return 'This action returns all movies';
  }
}
