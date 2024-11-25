import { ExerciseList } from '../entities/exercise-list.entity';

export class ExerciseListDto extends ExerciseList {
  itemsCount: number;

  constructor(entity: ExerciseList) {
    super();
    Object.assign(this, entity);
    this.itemsCount = 0;
  }
}
