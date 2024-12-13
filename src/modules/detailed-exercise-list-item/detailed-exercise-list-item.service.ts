import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { MappingService } from '@/common/mappings/mappings.provider';

import {
  CreateDetailedExerciseListItemDto,
  DetailedExerciseListItemDto,
  GroupDetailedExerciseListItemDto,
  UpdateDetailedExerciseListItemDto,
} from './dto';
import { DetailedExerciseListItem } from './entities/detailed-exercise-list-item.entity';

import { ExerciseListItemService } from '../exercise-list-item/exercise-list-item.service';

@Injectable()
export class DetailedExerciseListItemService {
  constructor(
    @InjectRepository(DetailedExerciseListItem)
    private readonly detailedExerciseListItemRepository: Repository<DetailedExerciseListItem>,
    private readonly exerciseListItemService: ExerciseListItemService,
    private readonly mappingService: MappingService
  ) {}

  async findAllByListItemId(listItemId: string): Promise<GroupDetailedExerciseListItemDto[]> {
    const detailedExerciseListItems = await this.detailedExerciseListItemRepository.find({
      where: { listItemId },
      order: {
        date: 'DESC',
        time: 'ASC',
      },
    });
    const mappedItems = this.mappingService.mapMany(
      detailedExerciseListItems,
      GroupDetailedExerciseListItemDto
    );
    return mappedItems;
  }

  async findOneById(id: string): Promise<DetailedExerciseListItemDto> {
    const entity = await this.detailedExerciseListItemRepository.findOneBy({ id });
    const mappedEntity = await this.mappingService.map(entity, DetailedExerciseListItemDto);
    return mappedEntity;
  }

  async create(
    listItemId: string,
    createDetailedExerciseListItemDto: CreateDetailedExerciseListItemDto
  ): Promise<DetailedExerciseListItemDto> {
    const time = new Date(createDetailedExerciseListItemDto.dateTime).toTimeString();
    const date = new Date(createDetailedExerciseListItemDto.dateTime).toDateString();

    delete createDetailedExerciseListItemDto.dateTime;

    const entity = await this.detailedExerciseListItemRepository.create({
      listItemId,
      time,
      date,
      ...createDetailedExerciseListItemDto,
    });

    await this.detailedExerciseListItemRepository.save(entity);

    await this.exerciseListItemService.updateLastDetailedExerciseTime(
      listItemId,
      createDetailedExerciseListItemDto.dateTime
    );

    return await this.findOneById(entity.id);
  }

  async update(
    id: string,
    updateDetailedExerciseListItemDto: UpdateDetailedExerciseListItemDto
  ): Promise<DetailedExerciseListItemDto> {
    await this.detailedExerciseListItemRepository.update(id, updateDetailedExerciseListItemDto);
    return await this.findOneById(id);
  }

  async delete(id: string): Promise<void> {
    await this.detailedExerciseListItemRepository.delete(id);
  }
}
