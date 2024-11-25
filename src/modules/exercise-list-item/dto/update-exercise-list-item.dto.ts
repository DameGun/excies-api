import { IsDate } from 'class-validator';

export class UpdateExerciseListItemDto {
  @IsDate()
  lastTimeUpdated: string;
}
