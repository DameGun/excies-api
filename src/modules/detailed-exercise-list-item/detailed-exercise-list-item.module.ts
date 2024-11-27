import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MappingService } from '@/common/mappings/mappings.provider';

import { DetailedExerciseListItemController } from './detailed-exercise-list-item.controller';
import { DetailedExerciseListItemService } from './detailed-exercise-list-item.service';
import { DetailedExerciseListItem } from './entities/detailed-exercise-list-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetailedExerciseListItem])],
  providers: [MappingService, DetailedExerciseListItemService],
  controllers: [DetailedExerciseListItemController],
})
export class DetailedExerciseListItemModule {}
