import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MappingService } from '@/common/mappings/mappings.provider';

import { DetailedExerciseListItemController } from './detailed-exercise-list-item.controller';
import { DetailedExerciseListItemService } from './detailed-exercise-list-item.service';
import { DetailedExerciseListItem } from './entities/detailed-exercise-list-item.entity';

import { ExerciseListItemModule } from '../exercise-list-item/exercise-list-item.module';

@Module({
  imports: [TypeOrmModule.forFeature([DetailedExerciseListItem]), ExerciseListItemModule],
  providers: [MappingService, DetailedExerciseListItemService],
  controllers: [DetailedExerciseListItemController],
})
export class DetailedExerciseListItemModule {}
