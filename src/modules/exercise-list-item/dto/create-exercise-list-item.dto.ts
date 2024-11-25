import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateExerciseListItemDto {
  @IsNotEmpty()
  @IsInt()
  exerciseId: number;
}
