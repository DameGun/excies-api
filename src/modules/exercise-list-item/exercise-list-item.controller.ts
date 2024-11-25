import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { LanguageQueryParam } from '@/common/decorators/language-query-param.decorator';

import { CreateExerciseListItemDto } from './dto/create-exercise-list-item.dto';
import { ExerciseListItemDto } from './dto/exercise-list-item.dto';
import { ExerciseListItemService } from './exercise-list-item.service';

@Controller('exercise-lists/:listId/items')
export class ExerciseListItemController {
  constructor(private readonly exerciseListItemService: ExerciseListItemService) {}

  @Get()
  async findAllByListId(
    @Param('listId') listId: string,
    @LanguageQueryParam() language: string
  ): Promise<ExerciseListItemDto[]> {
    return await this.exerciseListItemService.findAllByListId(listId, language);
  }

  @Post()
  async create(
    @Param('listId') listId: string,
    @Body() createExerciseListItemDto: CreateExerciseListItemDto,
    @LanguageQueryParam() language: string
  ): Promise<ExerciseListItemDto> {
    return await this.exerciseListItemService.create(listId, createExerciseListItemDto, language);
  }
}
