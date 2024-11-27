import { IsOptional, Length } from 'class-validator';

import { MAX_CUSTOM_NAME_LENGTH, MIN_CUSTOM_NAME_LENGTH } from '../constants/validation.constants';

export class UpdateExerciseListItemDto {
  @Length(MIN_CUSTOM_NAME_LENGTH, MAX_CUSTOM_NAME_LENGTH)
  @IsOptional()
  customName: string | null;

  @IsOptional()
  lastTimeUpdated: string | null;
}
