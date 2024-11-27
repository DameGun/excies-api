import { IsNotEmpty, IsOptional, Length } from 'class-validator';

import {
  MAX_DESCRIPTION_LENGTH,
  MAX_NAME_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  MIN_NAME_LENGTH,
} from '../constants/validation.constants';

export class CreateExerciseListDto {
  @Length(MIN_NAME_LENGTH, MAX_NAME_LENGTH)
  @IsNotEmpty()
  name: string;

  @Length(MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH)
  @IsOptional()
  description: string | null;
}
