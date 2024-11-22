import { ExerciseTranslated } from '../entities/exerciseTranslated.entity';

export type ExerciseTranslatedDto = Pick<ExerciseTranslated, 'id' | 'name' | 'exerciseId'>;
