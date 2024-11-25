import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CurrentUser } from '@/common/decorators/currentUser.decorator';

import { CreateExerciseListDto } from './dto/createExerciseList.dto';
import { UpdateExerciseListDto } from './dto/updateExerciseList.dto';
import { ExerciseListService } from './exerciseList.service';

@Controller('exercise-lists')
export class ExerciseListController {
  constructor(private readonly exerciseListService: ExerciseListService) {}

  @Get()
  async getAllByUserId(@CurrentUser('userId') userId: string) {
    return await this.exerciseListService.findAllByUserId(userId);
  }

  @Post()
  async create(
    @CurrentUser('userId') userId: string,
    @Body() createExerciseListDto: CreateExerciseListDto
  ) {
    return await this.exerciseListService.create(userId, createExerciseListDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateExerciseListDto: UpdateExerciseListDto) {
    return await this.exerciseListService.update(id, updateExerciseListDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.exerciseListService.delete(id);
  }
}
