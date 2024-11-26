import { IsOptional, IsString } from 'class-validator';

export class UpdateExerciseListItemDto {
  @IsString()
  @IsOptional()
  customName: string;
}
