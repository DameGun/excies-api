import { WithMappingProfile } from '@/common/mappings/mappings.types';

import { ExerciseList } from '../entities/exercise-list.entity';

export class ExerciseListDto implements WithMappingProfile {
  id: string;
  name: string;
  description: string | null;
  itemsCount: number;

  static map({ id, name, description, listItems }: ExerciseList): ExerciseListDto {
    return {
      id,
      name,
      description,
      itemsCount: listItems.length,
    };
  }

  static mapMany(source: Array<ExerciseList>): Array<ExerciseListDto> {
    return source.map(({ id, name, description, listItems }) => ({
      id,
      name,
      description,
      itemsCount: listItems.length,
    }));
  }
}
