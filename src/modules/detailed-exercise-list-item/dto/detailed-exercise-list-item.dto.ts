import { DetailedExerciseListItem } from '../entities/detailed-exercise-list-item.entity';

export class DetailedExerciseListItemDto {
  id: string;
  time: string;
  rep: number;
  weight: number;
  notes: string;

  constructor({ id, time, rep, weight, notes }: DetailedExerciseListItem) {
    this.id = id;
    this.time = time;
    this.rep = rep;
    this.weight = weight;
    this.notes = notes;
  }
}
