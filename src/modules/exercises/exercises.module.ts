import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Exercise } from './entities/exercise.entity';
import { ExerciseTranslated } from './entities/exerciseTranslated.entity';
import { Muscles } from './entities/muscles.entity';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, Muscles, ExerciseTranslated])],
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
