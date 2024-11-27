import { ExerciseList } from '../entities/exercise-list.entity';

export class ExerciseListDto {
  id: string;
  name: string;
  description: string | null;
  itemsCount: number;

  constructor({ id, name, description, listItems }: ExerciseList) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.itemsCount = listItems !== undefined ? listItems.length : 0;
  }
}
