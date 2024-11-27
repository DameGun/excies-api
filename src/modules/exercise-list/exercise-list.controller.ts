import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { ParamUUID } from '@/common/decorators/param-uuid.decorator';

import { CreateExerciseListDto, ExerciseListDto, UpdateExerciseListDto } from './dto';
import { ExerciseListService } from './exercise-list.service';

@Controller('exercise-lists')
export class ExerciseListController {
  constructor(private readonly exerciseListService: ExerciseListService) {}

  @Get()
  async getAllByUserId(@CurrentUser('userId') userId: string): Promise<ExerciseListDto[]> {
    return await this.exerciseListService.findAllByUserId(userId);
  }

  @Post()
  async create(
    @CurrentUser('userId') userId: string,
    @Body() createExerciseListDto: CreateExerciseListDto
  ): Promise<ExerciseListDto> {
    return await this.exerciseListService.create(userId, createExerciseListDto);
  }

  @Patch(':id')
  async update(
    @CurrentUser('userId') userId: string,
    @ParamUUID('id') id: string,
    @Body() updateExerciseListDto: UpdateExerciseListDto
  ): Promise<ExerciseListDto> {
    return await this.exerciseListService.update(id, userId, updateExerciseListDto);
  }

  @Delete(':id')
  async delete(@ParamUUID('id') id: string): Promise<void> {
    return await this.exerciseListService.delete(id);
  }
}
