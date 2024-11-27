import { PickType } from '@nestjs/mapped-types';

import { IsOptional, Length } from 'class-validator';

import { CreateDetailedExerciseListItemDto } from './create-detailed-exercise-list-item.dto';

import { MAX_NOTES_LENGTH, MIN_NOTES_LENGTH } from '../constants/validation.constants';

export class UpdateDetailedExerciseListItemDto extends PickType(CreateDetailedExerciseListItemDto, [
  'rep',
  'weight',
] as const) {
  @IsOptional()
  weight: number;

  @IsOptional()
  rep: number;

  @Length(MIN_NOTES_LENGTH, MAX_NOTES_LENGTH)
  @IsOptional()
  notes: string;
}
