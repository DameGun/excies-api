import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MappingService } from '@/common/mappings/mappings.provider';

import { ExerciseList } from './entities/exercise-list.entity';
import { ExerciseListController } from './exercise-list.controller';
import { ExerciseListService } from './exercise-list.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseList])],
  providers: [MappingService, ExerciseListService],
  controllers: [ExerciseListController],
})
export class ExerciseListModule {}
