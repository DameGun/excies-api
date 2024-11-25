import { ExerciseTranslated } from '../entities/exercise-translated.entity';

export type ExerciseTranslatedDto = Pick<ExerciseTranslated, 'id' | 'name' | 'exerciseId'>;
