import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CurrentUser } from '@/common/decorators/current-user.decorator';

import { CreateExerciseListDto } from './dto/create-exercise-list.dto';
import { ExerciseListDto } from './dto/exercise-list.dto';
import { UpdateExerciseListDto } from './dto/update-exercise-list.dto';
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
    @Param('id') id: string,
    @Body() updateExerciseListDto: UpdateExerciseListDto
  ): Promise<ExerciseListDto> {
    return await this.exerciseListService.update(id, updateExerciseListDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.exerciseListService.delete(id);
  }
}
