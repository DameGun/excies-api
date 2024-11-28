import { PickType } from '@nestjs/swagger';

import { ExerciseTranslated } from '../entities/exercise-translated.entity';

export class ExerciseTranslatedDetailsDto extends PickType(ExerciseTranslated, [
  'id',
  'description',
  'exerciseId',
] as const) {}
