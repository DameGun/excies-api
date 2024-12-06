import { PartialType } from '@nestjs/swagger';

import { CreateExerciseListDto } from './create-exercise-list.dto';

export class UpdateExerciseListDto extends PartialType(CreateExerciseListDto) {}
