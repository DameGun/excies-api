import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { LanguageQueryParam } from '@/common/decorators/language-query-param.decorator';
import { ParamUUID } from '@/common/decorators/param-uuid.decorator';

import { CreateExerciseListItemDto, ExerciseListItemDto, UpdateExerciseListItemDto } from './dto';
import { ExerciseListItemService } from './exercise-list-item.service';

@Controller('exercise-lists/:listId/items')
export class ExerciseListItemController {
  constructor(private readonly exerciseListItemService: ExerciseListItemService) {}

  @Get()
  async findAllByListId(
    @ParamUUID('listId') listId: string,
    @LanguageQueryParam() language: string
  ): Promise<ExerciseListItemDto[]> {
    return await this.exerciseListItemService.findAllByListId(listId, language);
  }

  @Get(':id')
  async findOneById(
    @ParamUUID('id') listItemId: string,
    @LanguageQueryParam() language: string
  ): Promise<ExerciseListItemDto> {
    return await this.exerciseListItemService.findOneById(listItemId, language);
  }

  @Post()
  async create(
    @ParamUUID('listId') listId: string,
    @Body() createExerciseListItemDto: CreateExerciseListItemDto,
    @LanguageQueryParam() language: string
  ): Promise<ExerciseListItemDto> {
    return await this.exerciseListItemService.create(listId, createExerciseListItemDto, language);
  }

  @Patch(':id')
  async update(
    @ParamUUID('id') id: string,
    @Body() updateExerciseListItem: UpdateExerciseListItemDto,
    @LanguageQueryParam() language: string
  ): Promise<ExerciseListItemDto> {
    return await this.exerciseListItemService.update(id, updateExerciseListItem, language);
  }

  @Delete(':id')
  async delete(@ParamUUID('id') id: string): Promise<void> {
    return await this.exerciseListItemService.delete(id);
  }
}
