import { ExerciseListItem } from '../entities/exercise-list-item.entity';

export class ExerciseListItemDto {
  id: string;
  exerciseId: string;
  name: string;
  customName: string | null;
  lastTimeUpdated: string | null;

  constructor({ id, exercise, lastTimeUpdated, customName }: ExerciseListItem) {
    this.id = id;
    this.name = exercise.translated[0].name;
    this.lastTimeUpdated = lastTimeUpdated;
    this.customName = customName;
  }
}
