import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntityWithUUID } from '@/common/entities/abstract-entity-with-uuid.entity';
import { ColumnNumericTransformer } from '@/common/transformers/numeric.transformer';
import { ExerciseListItem } from '@/modules/exercise-list-item/entities/exercise-list-item.entity';

import { MAX_NOTES_LENGTH } from '../constants/validation.constants';

@Entity()
export class DetailedExerciseListItem extends AbstractEntityWithUUID {
  @Column({ nullable: false })
  listItemId: string;

  @ManyToOne(() => ExerciseListItem)
  @JoinColumn()
  listItem: ExerciseListItem;

  @Column('date')
  date: string;

  @Column('time')
  time: string;

  @Column()
  rep: number;

  @Column({
    type: 'numeric',
    transformer: new ColumnNumericTransformer(),
  })
  weight: number;

  @Column({
    nullable: true,
    length: MAX_NOTES_LENGTH,
  })
  notes: string;
}
