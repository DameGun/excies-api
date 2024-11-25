import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExerciseList } from './entities/exercise-list.entity';
import { ExerciseListController } from './exercise-list.controller';
import { ExerciseListService } from './exercise-list.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseList])],
  providers: [ExerciseListService],
  controllers: [ExerciseListController],
})
export class ExerciseListModule {}
