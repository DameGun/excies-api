import { ExerciseList } from '../entities/exerciseList.entity';

export class ExerciseListDto extends ExerciseList {
  itemsCount: number;

  constructor(entity: ExerciseList) {
    super();
    Object.assign(this, entity);
    this.itemsCount = 0;
  }
}
