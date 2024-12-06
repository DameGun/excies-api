import { PickType } from '@nestjs/swagger';

import { ExerciseTranslated } from '../entities/exercise-translated.entity';

export class ExerciseTranslatedDto extends PickType(ExerciseTranslated, [
  'id',
  'name',
  'exerciseId',
] as const) {}
