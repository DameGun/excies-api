import { DetailedExerciseListItem } from '../entities/detailed-exercise-list-item.entity';

export class DetailedExerciseListItemDto {
  id: string;
  date: string;
  time: string;
  rep: number;
  weight: number;
  notes: string;

  constructor({ id, time, rep, weight, notes, date }: DetailedExerciseListItem) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.rep = rep;
    this.weight = weight;
    this.notes = notes;
  }
}
