import { PartialType } from '@nestjs/mapped-types';

import { CreateExerciseListDto } from './create-exercise-list.dto';

export class UpdateExerciseListDto extends PartialType(CreateExerciseListDto) {}
