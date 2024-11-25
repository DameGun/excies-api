import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractEntityWithUUID {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
