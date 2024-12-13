import { ExerciseListItem } from '../entities/exercise-list-item.entity';

export class ExerciseListItemDto {
  id: string;
  name: string;
  customName: string | null;
  lastTimeUpdated: string | null;
  exerciseId: number;

  constructor({ id, exercise, lastTimeUpdated, customName, exerciseId }: ExerciseListItem) {
    this.id = id;
    this.name = exercise.translated[0].name;
    this.lastTimeUpdated = lastTimeUpdated;
    this.customName = customName;
    this.exerciseId = exerciseId;
  }
}
