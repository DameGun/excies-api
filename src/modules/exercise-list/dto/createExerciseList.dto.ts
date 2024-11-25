import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateExerciseListDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  description: string;
}
