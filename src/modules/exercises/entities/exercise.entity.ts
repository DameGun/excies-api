import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ExerciseTranslated } from './exerciseTranslated.entity';
import { Muscles } from './muscles.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

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
