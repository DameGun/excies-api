import { ExerciseTranslated } from '../entities/exercise-translated.entity';

export type ExerciseTranslatedDetailsDto = Pick<
  ExerciseTranslated,
  'id' | 'description' | 'exerciseId'
>;
