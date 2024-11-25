import { IsOptional } from 'class-validator';

export class UpdateExerciseListDto {
  @IsOptional()
  name: string;

  @IsOptional()
  description: string;
}
