import { Module } from '@nestjs/common';
import { MoviesController } from './movieController';
import { MovieService } from './movieService';

@Module({
  controllers: [MoviesController],
  providers: [MovieService],
})
export class MovieModule {}
