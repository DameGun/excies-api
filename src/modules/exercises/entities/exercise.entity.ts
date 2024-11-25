import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntityWithId } from '@/common/entities/abstractEntityWithId.entity';

import { ExerciseTranslated } from './exerciseTranslated.entity';
import { Muscles } from './muscles.entity';

@Entity()
export class Exercise extends AbstractEntityWithId {
  @Column()
  name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string | null;

  @Column({ nullable: true })
  musclesId: number;

  @ManyToOne(() => Muscles, (muscles) => muscles.exercises)
  @JoinColumn()
  muscles: Muscles;

  @OneToMany(() => ExerciseTranslated, (translated) => translated.exercise)
  @JoinColumn()
  translated: ExerciseTranslated[];
}
