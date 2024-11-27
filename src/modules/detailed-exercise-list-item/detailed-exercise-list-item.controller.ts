import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { ParamUUID } from '@/common/decorators/param-uuid.decorator';

import { DetailedExerciseListItemService } from './detailed-exercise-list-item.service';
import {
  CreateDetailedExerciseListItemDto,
  DetailedExerciseListItemDto,
  GroupDetailedExerciseListItemDto,
  UpdateDetailedExerciseListItemDto,
} from './dto';

@Controller('/exercise-lists/:listId/items/:listItemId/detailed')
export class DetailedExerciseListItemController {
  constructor(private readonly detailedExerciseListItemService: DetailedExerciseListItemService) {}

  @Get()
  async findAllByListItemId(
    @ParamUUID('listItemId') listItemId: string
  ): Promise<GroupDetailedExerciseListItemDto[]> {
    return await this.detailedExerciseListItemService.findAllByListItemId(listItemId);
  }

  @Post()
  async create(
    @ParamUUID('listItemId') listItemId: string,
    @Body() createDetailedExerciseListItemDto: CreateDetailedExerciseListItemDto
  ): Promise<DetailedExerciseListItemDto> {
    return await this.detailedExerciseListItemService.create(
      listItemId,
      createDetailedExerciseListItemDto
    );
  }

  @Patch(':id')
  async update(
    @ParamUUID('id') id: string,
    @Body() updateDetailedExerciseListItemDto: UpdateDetailedExerciseListItemDto
  ): Promise<DetailedExerciseListItemDto> {
    return await this.detailedExerciseListItemService.update(id, updateDetailedExerciseListItemDto);
  }

  @Delete(':id')
  async delete(@ParamUUID('id') id: string): Promise<void> {
    return await this.detailedExerciseListItemService.delete(id);
  }
}
