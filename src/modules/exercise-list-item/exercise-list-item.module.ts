import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MappingService } from '@/common/mappings/mappings.provider';

import { ExerciseListItem } from './entities/exercise-list-item.entity';
import { ExerciseListItemController } from './exercise-list-item.controller';
import { ExerciseListItemService } from './exercise-list-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseListItem])],
  providers: [MappingService, ExerciseListItemService],
  controllers: [ExerciseListItemController],
  exports: [ExerciseListItemService],
})
export class ExerciseListItemModule {}
