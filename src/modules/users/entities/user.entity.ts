import { Column, Entity } from 'typeorm';

import { AbstractEntityWithUUID } from '@/common/entities/abstract-entity-with-uuid.entity';

@Entity()
export class User extends AbstractEntityWithUUID {
  @Column({
    unique: true,
  })
  username: string;

  @Column('text')
  password: string;

  @Column({
    unique: true,
    nullable: true,
  })
  email: string | null;

  @Column({
    default: true,
  })
  isMetricSystemChoosed: boolean;
}
