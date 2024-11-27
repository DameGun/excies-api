import { WithMappingProfile } from '@/common/mappings/mappings.types';

import { DetailedExerciseListItemDto } from './detailed-exercise-list-item.dto';

import { DetailedExerciseListItem } from '../entities/detailed-exercise-list-item.entity';

export class GroupDetailedExerciseListItemDto implements WithMappingProfile {
  date: string;
  items: DetailedExerciseListItemDto[];

  static mapMany(items: Array<DetailedExerciseListItem>): Array<GroupDetailedExerciseListItemDto> {
    const datesWithIds: Map<string, number> = new Map();
    const groups: GroupDetailedExerciseListItemDto[] = [];

    for (const item of items) {
      const dateIndex = datesWithIds.get(item.date);
      const mappedDetailedItem = new DetailedExerciseListItemDto(item);

      if (dateIndex !== undefined) {
        groups[dateIndex].items.push(mappedDetailedItem);
      } else {
        const newGroup: GroupDetailedExerciseListItemDto = {
          date: item.date,
          items: [mappedDetailedItem],
        };

        const newId = groups.push(newGroup) - 1;

        datesWithIds.set(item.date, newId);
      }
    }

    return groups;
  }
}
