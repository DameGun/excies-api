import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractEntityWithId {
  @PrimaryGeneratedColumn()
  id: number;
}
