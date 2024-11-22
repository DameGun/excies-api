import { ExerciseTranslated } from '../entities/exerciseTranslated.entity';

export type ExerciseTranslatedDetailsDto = Pick<
  ExerciseTranslated,
  'id' | 'description' | 'exerciseId'
>;
