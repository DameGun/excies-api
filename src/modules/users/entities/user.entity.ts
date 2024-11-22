import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
