import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExerciseList } from './entities/exerciseList.entity';
import { ExerciseListController } from './exerciseList.controller';
import { ExerciseListService } from './exerciseList.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseList])],
  providers: [ExerciseListService],
  controllers: [ExerciseListController],
})
export class ExerciseListModule {}
