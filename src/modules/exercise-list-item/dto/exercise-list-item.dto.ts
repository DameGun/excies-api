import { ExerciseListItem } from '../entities/exercise-list-item.entity';

export class ExerciseListItemDto {
  id: string;
  exerciseId: string;
  name: string;
  lastTimeUpdated: string;

  constructor({ id, exercise, lastTimeUpdated }: ExerciseListItem) {
    this.id = id;
    this.name = exercise.translated[0].name;
    this.lastTimeUpdated = lastTimeUpdated;
  }
}
