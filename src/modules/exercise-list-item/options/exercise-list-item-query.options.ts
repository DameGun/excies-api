import { FindOneOptions } from 'typeorm';

import { ExerciseListItem } from '../entities/exercise-list-item.entity';

export const exerciseListItemQueryOptions: FindOneOptions<ExerciseListItem> = {
  relations: {
    exercise: {
      translated: true,
    },
  },
  select: {
    id: true,
    exercise: {
      id: true,
      translated: {
        name: true,
      },
    },
    exerciseId: true,
    customName: true,
    lastTimeUpdated: true,
  },
};
