import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { MappingService } from '@/common/mappings/mappings.provider';

import { CreateExerciseListItemDto } from './dto/create-exercise-list-item.dto';
import { ExerciseListItemDto } from './dto/exercise-list-item.dto';
import { UpdateExerciseListItemDto } from './dto/update-exercise-list-item.dto';
import { ExerciseListItem } from './entities/exercise-list-item.entity';
import { exerciseListItemQueryOptions } from './options/exercise-list-item-query.options';

@Injectable()
export class ExerciseListItemService {
  constructor(
    @InjectRepository(ExerciseListItem)
    private readonly exerciseListItemsRepository: Repository<ExerciseListItem>,
    @Inject()
    private readonly mappingService: MappingService
  ) {}

  async findAllByListId(listId: string, language: string): Promise<ExerciseListItemDto[]> {
    const exerciseListItems = await this.exerciseListItemsRepository.find({
      where: {
        listId,
        exercise: {
          translated: {
            language,
          },
        },
      },
      ...exerciseListItemQueryOptions,
    });

    const mappedExerciseListItems = this.mappingService.mapMany(
      exerciseListItems,
      ExerciseListItemDto
    );

    return mappedExerciseListItems;
  }

  async findOneById(id: string, language: string): Promise<ExerciseListItemDto> {
    const exerciseListItem = await this.exerciseListItemsRepository.findOne({
      where: {
        id,
        exercise: {
          translated: {
            language,
          },
        },
      },
      ...exerciseListItemQueryOptions,
    });

    if (!exerciseListItem) {
      throw new NotFoundException();
    }

    const mappedExerciseListItem = this.mappingService.map(exerciseListItem, ExerciseListItemDto);

    return mappedExerciseListItem;
  }

  async create(
    listId: string,
    createExerciseListItemDto: CreateExerciseListItemDto,
    language: string
  ): Promise<ExerciseListItemDto> {
    const exerciseListItem = await this.exerciseListItemsRepository.create({
      listId,
      ...createExerciseListItemDto,
    });

    await this.exerciseListItemsRepository.save(exerciseListItem);

    return await this.findOneById(exerciseListItem.id, language);
  }

  async update(id: string, updateExerciseListItemDto: UpdateExerciseListItemDto): Promise<void> {
    await this.exerciseListItemsRepository.update(id, updateExerciseListItemDto);
  }
}
