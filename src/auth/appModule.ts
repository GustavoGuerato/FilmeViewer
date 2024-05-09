// app.module.ts
import { Module } from '@nestjs/common';
import { MoviesController } from '../movies/movieController';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
