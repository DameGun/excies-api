import { IsDateString, IsInt, IsNumber, IsPositive, Matches, Max, Min } from 'class-validator';

import {
  MAX_REP_VALUE,
  MAX_WEIGHT_VALUE,
  MIN_REP_VALUE,
  MIN_WEIGHT_VALUE,
  TIME_REGEX_PATTERN,
} from '../constants/validation.constants';

export class CreateDetailedExerciseListItemDto {
  @IsDateString()
  date: string;

  @Matches(TIME_REGEX_PATTERN)
  time: string;

  @Max(MAX_REP_VALUE)
  @Min(MIN_REP_VALUE)
  @IsPositive()
  @IsInt()
  rep: number;

  @Max(MAX_WEIGHT_VALUE)
  @Min(MIN_WEIGHT_VALUE)
  @IsPositive()
  @IsNumber()
  weight: number;
}
